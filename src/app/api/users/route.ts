import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const role = searchParams.get('role');

        // Base query
        const query: any = {
            where: {},
            select: {
                id: true,
                name: true,
                image: true,
                bio: true,
                skills: true,
                hourlyRate: true,
                role: true,
                companyName: true,
                portfolioUrl: true,
                createdAt: true,
                reviewsReceived: {
                    select: {
                        rating: true,
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        };

        if (role) {
            query.where.role = role;
        }

        const users = await prisma.user.findMany(query);

        // Calculate average rating
        const mapUsers = users.map((u: any) => {
            const avgRating = u.reviewsReceived && u.reviewsReceived.length > 0
                ? u.reviewsReceived.reduce((a: any, b: any) => a + b.rating, 0) / u.reviewsReceived.length
                : 5.0; // Default to 5.0 for display purposes

            return {
                ...u,
                rating: avgRating.toFixed(1),
                reviewsCount: u.reviewsReceived?.length || 0
            };
        });

        return NextResponse.json(mapUsers);
    } catch (error) {
        console.error("Fetch users error:", error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
