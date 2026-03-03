import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
    try {
        const jobs = await prisma.job.findMany({
            where: {
                status: 'OPEN'
            },
            include: {
                client: {
                    select: {
                        id: true,
                        name: true,
                        companyName: true,
                        image: true,
                    }
                },
                _count: {
                    select: { applications: true }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        return NextResponse.json(jobs);
    } catch (error) {
        console.error("Fetch jobs error:", error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const session = await getServerSession(authOptions);
        if (!session || session.user.role !== 'CLIENT') {
            return NextResponse.json({ error: 'Unauthorized. Clients only.' }, { status: 401 });
        }

        const body = await request.json();
        const { title, description, budget, jobType, category } = body;

        if (!title || !description || !budget || !jobType || !category) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const job = await prisma.job.create({
            data: {
                title,
                description,
                budget: parseFloat(budget),
                jobType,
                category,
                clientId: session.user.id
            }
        });

        return NextResponse.json(job, { status: 201 });
    } catch (error) {
        console.error("Create job error:", error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
