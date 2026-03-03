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

        const body = await request.json();
        const { jobId, freelancerId, amount } = body;

        if (!jobId || !freelancerId || amount === undefined) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Verify job belongs to client
        const job = await prisma.job.findUnique({ where: { id: jobId } });
        if (!job || job.clientId !== session.user.id) {
            return NextResponse.json({ error: 'Job not found or unauthorized' }, { status: 403 });
        }

        // Since this is a scaffolding phase, mock Stripe by directly creating Payment and updating Job
        const payment = await prisma.payment.create({
            data: {
                amount: Number(amount),
                status: 'HELD', // Escrow
                stripeId: 'mock_stripe_session_' + Date.now(),
                jobId,
                fromUserId: session.user.id,
                toUserId: freelancerId
            }
        });

        // Update job status
        await prisma.job.update({
            where: { id: jobId },
            data: { status: 'IN_PROGRESS' }
        });

        // Create or update application to ACCEPTED
        const existingApp = await prisma.application.findFirst({
            where: { jobId, freelancerId }
        });

        if (existingApp) {
            await prisma.application.update({
                where: { id: existingApp.id },
                data: { status: 'ACCEPTED' }
            });
        } else {
            await prisma.application.create({
                data: {
                    jobId,
                    freelancerId,
                    status: 'ACCEPTED',
                    coverLetter: 'Client invited and hired directly.',
                    bidAmount: Number(amount)
                }
            });
        }

        // Notify freelancer
        await prisma.notification.create({
            data: {
                userId: freelancerId,
                type: 'PAYMENT',
                content: `You've been hired for '${job.title}'! The client deposited $${amount} into Escrow.`,
                linkUrl: `/jobs/${job.id}`
            }
        });

        return NextResponse.json({ success: true, paymentId: payment.id }, { status: 200 });
    } catch (error) {
        console.error("Checkout Mock error:", error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
