import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { jobId, revieweeId, rating, comment } = await request.json();

        if (!jobId || !revieweeId || !rating || !comment) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const numericRating = Number(rating);
        if (numericRating < 1 || numericRating > 5) {
            return NextResponse.json({ error: 'Rating must be between 1 and 5' }, { status: 400 });
        }

        // Verify job exists and is completed (or at least valid relation)
        const job = await prisma.job.findUnique({ where: { id: jobId } });
        if (!job) {
            return NextResponse.json({ error: 'Job not found' }, { status: 404 });
        }

        // Create review
        const review = await prisma.review.create({
            data: {
                jobId,
                reviewerId: session.user.id,
                revieweeId,
                rating: numericRating,
                comment
            }
        });

        // Notify user
        await prisma.notification.create({
            data: {
                userId: revieweeId,
                type: 'REVIEW',
                content: `${session.user.name} left you a ${numericRating}-star review for '${job.title}'!`,
                linkUrl: `/freelancers/${revieweeId}`
            }
        });

        return NextResponse.json({ success: true, review }, { status: 201 });
    } catch (error) {
        console.error("Review creation error:", error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
