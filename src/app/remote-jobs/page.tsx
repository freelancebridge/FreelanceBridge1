import Link from 'next/link';

export default function RemoteJobs() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="bg-purple-950 py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 text-white">
                    <h1 className="text-6xl font-extrabold text-white mb-6">
                        Remote Jobs
                    </h1>
                    <p className="text-xl text-purple-200 max-w-3xl mx-auto">
                        Not a fan of the freelance hustle? Want something more stable?
                        Browse our curated list of elite, full-time remote opportunities at top-tier startups.
                    </p>
                </div>
            </div>

            <div className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
                <div className="space-y-6">
                    {/* Dummy Robust Job Cards */}
                    {[
                        { role: 'Senior UX Engineer', company: 'Linear', salary: '$160k - $200k', tags: ['React', 'TypeScript'] },
                        { role: 'Brand Designer', company: 'Vercel', salary: '$130k - $170k', tags: ['Figma', 'Motion'] },
                        { role: 'Product Manager', company: 'Stripe', salary: '$180k - $220k', tags: ['Fintech', 'B2B'] },
                        { role: 'Growth Lead', company: 'Notion', salary: '$150k - $190k', tags: ['Marketing', 'Data'] },
                        { role: 'Full Stack Dev', company: 'OpenAI', salary: '$200k - $300k', tags: ['Python', 'Next.js'] },
                    ].map((job, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row justify-between items-start sm:items-center">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.role}</h3>
                                <p className="text-lg text-gray-600 mb-4">{job.company} &bull; Remote (Global)</p>
                                <div className="flex gap-2">
                                    {job.tags.map((tag, tIdx) => (
                                        <span key={tIdx} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-6 sm:mt-0 text-right flex flex-col items-start sm:items-end w-full sm:w-auto">
                                <span className="text-xl font-bold text-purple-700 mb-4">{job.salary}</span>
                                <button className="w-full sm:w-auto px-8 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-purple-900 transition-colors">
                                    Apply
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="text-purple-600 font-bold hover:underline text-lg">Load More Remote Jobs</button>
                </div>
            </div>
        </div>
    );
}
