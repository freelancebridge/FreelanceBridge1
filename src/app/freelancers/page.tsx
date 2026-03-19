import Link from 'next/link';
import { Suspense } from 'react';
import SearchInput from '@/components/SearchInput';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export default async function FreelancersList({ searchParams }: { searchParams: { q?: string } }) {
    const q = searchParams?.q || '';

    const dbUsers = await (async () => {
        try {
            return await prisma.user.findMany({
                where: {
                    role: 'FREELANCER',
                    isBanned: false,
                    ...(q ? {
                        OR: [
                            { name: { contains: q, mode: 'insensitive' } },
                            { title: { contains: q, mode: 'insensitive' } },
                            { skills: { contains: q, mode: 'insensitive' } }
                        ]
                    } : {})
                },
                include: {
                    reviewsReceived: true
                }
            });
        } catch (error) {
            console.error('Database connection error in FreelancersList:', error);
            return []; // Return empty list instead of crashing
        }
    })();

    const wizards = dbUsers.map((user: any) => {
        const ratingCount = user.reviewsReceived.length;
        const avgRating = ratingCount > 0
            ? user.reviewsReceived.reduce((sum: number, r: any) => sum + r.rating, 0) / ratingCount
            : 5.0; // default rating if none

        return {
            id: user.id,
            name: user.name || 'Anonymous Wizard',
            title: user.title || 'Independent Creator',
            rate: user.hourlyRate ? `$${user.hourlyRate}/hr` : 'Negotiable',
            rating: avgRating.toFixed(1),
            earned: ratingCount > 0 ? `${ratingCount} jobs` : 'New',
            skills: user.skills ? user.skills.split(',').map((s: string) => s.trim()) : ['Adaptable']
        };
    });

    return (
        <div className="bg-indigo-50 min-h-screen py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Find Wizards</h1>
                    <p className="text-xl text-gray-600 mt-3 max-w-2xl">Connect with the top 1% of independent creators ready to jump into your next big idea.</p>
                </div>

                <div className="bg-white rounded-3xl shadow-sm border border-purple-100 p-6 mb-10 flex flex-col md:flex-row gap-4 items-center">
                    <div className="relative flex-1 w-full">
                        <Suspense fallback={<div className="w-full h-11 bg-gray-100 animate-pulse rounded-xl"></div>}>
                            <SearchInput placeholder="Search by skill, name, or superpower..." />
                        </Suspense>
                    </div>
                </div>

                {wizards.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-purple-100">
                        <h3 className="text-2xl font-bold text-gray-400">No wizards found matching your criteria.</h3>
                        <p className="text-gray-500 mt-2">Try adjusting your search or check back later!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {wizards.map((freelancer) => (
                            <Link href={`/freelancers/${freelancer.id}`} key={freelancer.id} className="block group">
                                <div className="bg-gradient-to-b from-indigo-950 to-purple-950 border border-purple-700/30 hover:border-orange-500/50 rounded-3xl p-8 shadow-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all duration-500 flex flex-col h-full transform group-hover:-translate-y-2 relative overflow-hidden">
                                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-900/30 rounded-full mix-blend-screen filter blur-3xl group-hover:bg-orange-500/20 transition-colors duration-500"></div>

                                    <div className="flex items-start justify-between mb-6 relative z-10">
                                        <div className="w-20 h-20 bg-gradient-to-br from-purple-800 to-indigo-900 rounded-full flex items-center justify-center text-3xl font-black text-white shadow-[0_0_15px_rgba(139,92,246,0.5)] border border-purple-500/30 group-hover:scale-105 transition-transform">
                                            {freelancer.name.charAt(0).toUpperCase()}
                                        </div>
                                        {parseFloat(freelancer.rating) >= 4.9 && (
                                            <div className="bg-purple-900 border border-purple-500/30 text-purple-300 px-3 py-1 rounded-full text-xs font-bold shadow-sm uppercase tracking-wider group-hover:border-orange-500/50 group-hover:text-orange-400 transition-colors">
                                                Top 1%
                                            </div>
                                        )}
                                    </div>

                                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors relative z-10">{freelancer.name}</h3>
                                    <p className="text-purple-400 font-medium mb-6 relative z-10">{freelancer.title}</p>

                                    <div className="flex items-center text-sm text-purple-200 mb-6 space-x-4 bg-purple-900/60 border border-purple-700/50 p-3 rounded-xl relative z-10">
                                        <span className="font-bold text-white">{freelancer.rate}</span>
                                        <span className="flex items-center text-orange-400 font-bold">⭐ {freelancer.rating}</span>
                                        <span className="font-medium">{freelancer.earned} earned</span>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                                        {freelancer.skills.map((skill: string) => (
                                            <span key={skill} className="bg-purple-900/40 text-purple-300 border border-purple-700/50 text-xs px-3 py-1.5 rounded-full font-semibold group-hover:border-purple-500/50 transition-colors">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
