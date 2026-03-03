import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';

import { Suspense } from 'react';
import SearchInput from '@/components/SearchInput';

export const dynamic = 'force-dynamic';

export default async function JobsList({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
    const q = (await searchParams).q || '';

    const allJobs = [
        {
            id: 'job-1',
            title: 'Build a Next.js MVP',
            status: 'OPEN',
            description: 'Looking for an experienced Next.js developer to build a MVP for our startup.',
            category: 'Web Development',
            jobType: 'FIXED',
            budget: 5000,
            createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
            client: { name: 'Acme Corp', companyName: 'Acme Corporation' }
        },
        {
            id: 'job-2',
            title: 'Design Logo and Branding',
            status: 'OPEN',
            description: 'Need a creative designer to establish our brand identity and design a modern logo.',
            category: 'Design',
            jobType: 'HOURLY',
            budget: 50,
            createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5),
            client: { name: 'Tech Innovations', companyName: '' }
        },
        {
            id: 'job-3',
            title: 'Smart Contract Audit',
            status: 'OPEN',
            description: 'We need a security expert to audit our Solidity smart contracts before mainnet launch.',
            category: 'Blockchain',
            jobType: 'FIXED',
            budget: 10000,
            createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5),
            client: { name: 'DeFi protocol', companyName: 'DeFi protocol' }
        }
    ];

    const rawJobs = allJobs.filter(job => {
        if (!q) return true;
        const search = q.toLowerCase();
        return (
            (job.title && job.title.toLowerCase().includes(search)) ||
            (job.description && job.description.toLowerCase().includes(search)) ||
            (job.category && job.category.toLowerCase().includes(search))
        );
    });

    const gigs = rawJobs.map(job => ({
        id: job.id,
        title: job.title,
        client: job.client.companyName || job.client.name || 'Anonymous Client',
        budget: job.jobType === 'FIXED' ? `$${job.budget}` : `$${job.budget}/hr`,
        type: job.jobType,
        posted: formatDistanceToNow(new Date(job.createdAt), { addSuffix: true }),
        description: job.description,
        category: job.category
    }));

    return (
        <div className="bg-indigo-50 min-h-screen py-10">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
                    <div>
                        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Find Gigs</h1>
                        <p className="text-xl text-gray-600 mt-2">Discover projects that match your powers.</p>
                    </div>
                    <Link href="/jobs/post" className="px-8 py-3 bg-gradient-to-r from-purple-700 to-orange-500 text-white font-bold rounded-full hover:from-purple-800 hover:to-orange-600 shadow-lg transition-transform transform hover:-translate-y-0.5 whitespace-nowrap">
                        Post a Gig
                    </Link>
                </div>

                <div className="bg-white rounded-3xl shadow-sm border border-purple-100 p-6 mb-8 flex flex-col md:flex-row gap-4 items-center">
                    <div className="relative flex-1 w-full">
                        <Suspense fallback={<div className="w-full h-11 bg-gray-100 animate-pulse rounded-xl"></div>}>
                            <SearchInput placeholder="Search for projects..." />
                        </Suspense>
                    </div>
                </div>

                {gigs.length === 0 ? (
                    <div className="text-center py-20">
                        <h3 className="text-2xl font-bold text-gray-400">No open gigs at the moment.</h3>
                    </div>
                ) : (
                    <div className="bg-gradient-to-b from-indigo-950 to-purple-950 rounded-3xl shadow-lg border border-purple-800/50 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none"></div>
                        {gigs.map((gig, idx) => (
                            <div key={gig.id} className={`p-8 hover:bg-purple-900/50 transition-colors cursor-pointer group relative z-10 ${idx !== 0 ? 'border-t border-purple-800/50' : ''}`}>
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors mb-2">{gig.title}</h3>
                                        <div className="flex items-center text-sm text-purple-200 mb-4 space-x-3 font-medium">
                                            <span className="text-white font-bold bg-purple-900/80 px-3 py-1 rounded-md border border-purple-700/50">{gig.budget}</span>
                                            <span>•</span>
                                            <span className="text-purple-300 bg-purple-900/40 px-2 py-0.5 rounded uppercase text-xs">{gig.type}</span>
                                            <span>•</span>
                                            <span className="text-purple-400">{gig.posted}</span>
                                        </div>
                                        <p className="text-purple-100 text-lg mb-6 leading-relaxed max-w-3xl truncate">{gig.description}</p>

                                        <div className="flex flex-wrap gap-2">
                                            <span className="bg-purple-900/40 text-purple-300 border border-purple-700/50 text-sm px-4 py-1.5 rounded-xl font-bold group-hover:border-purple-500/50 transition-colors">
                                                {gig.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end w-full md:w-auto">
                                        <span className="text-sm font-bold text-gray-500 mb-2 uppercase tracking-wide">Client</span>
                                        <span className="flex items-center text-white font-bold bg-green-900/30 px-3 py-1.5 rounded-xl border border-green-500/30">
                                            <span className="text-green-400 mr-2">✓</span> {gig.client}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
