import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    try {
        const session = await getServerSession(authOptions);
        if (!session || session.user.role !== 'CLIENT') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { paymentId } = await request.json();

        if (!paymentId) {
            return NextResponse.json({ error: 'Missing paymentId' }, { status: 400 });
        }

        // Verify payment belongs to client and is HELD
        const payment = await prisma.payment.findUnique({
            where: { id: paymentId },
            include: { job: true }
        });

        if (!payment || payment.fromUserId !== session.user.id || payment.status !== 'HELD') {
            return NextResponse.json({ error: 'Payment not found or not in Escrow' }, { status: 403 });
        }

        // Mock Release of funds
        const updatedPayment = await prisma.payment.update({
            where: { id: paymentId },
            data: { status: 'RELEASED' }
        });

        // Mark job as COMPLETED
        await prisma.job.update({
            where: { id: payment.jobId },
            data: { status: 'COMPLETED' }
        });

        // Notify Freelancer
        await prisma.notification.create({
            data: {
                userId: payment.toUserId,
                type: 'PAYMENT',
                content: `Congratulations! The client has approved your work for '${payment.job.title}' and released $${payment.amount} from Escrow!`,
                linkUrl: `/freelancers/${payment.toUserId}`
            }
        });

        return NextResponse.json({ success: true, payment: updatedPayment }, { status: 200 });
    } catch (error) {
        console.error("Release Payment error:", error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
