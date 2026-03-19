import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    try {
        const session = await getServerSession(authOptions);
        if (!session || session.user.role !== 'FREELANCER') {
            return NextResponse.json({ error: 'Unauthorized. Freelancers only.' }, { status: 401 });
        }

        const body = await request.json();
        const { jobId, coverLetter, bidAmount } = body;

        if (!jobId || !coverLetter || !bidAmount) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Check if job exists
        const job = await prisma.job.findUnique({ where: { id: jobId } });
        if (!job) {
            return NextResponse.json({ error: 'Job not found' }, { status: 404 });
        }

        // Check if already applied
        const existingApp = await prisma.application.findFirst({
            where: {
                jobId,
                freelancerId: session.user.id
            }
        });

        if (existingApp) {
            return NextResponse.json({ error: 'You have already applied to this gig' }, { status: 400 });
        }

        const application = await prisma.application.create({
            data: {
                coverLetter,
                bidAmount: parseFloat(bidAmount),
                status: 'PENDING',
                jobId,
                freelancerId: session.user.id
            }
        });

        await prisma.notification.create({
            data: {
                userId: job.clientId,
                type: 'APPLICATION',
                content: `${session.user.name} applied to your gig: ${job.title}`,
                linkUrl: `/jobs/${job.id}`
            }
        });

        return NextResponse.json(application, { status: 201 });
    } catch (error) {
        console.error("Create application error:", error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
