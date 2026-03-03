import Link from 'next/link';

export default function Resources() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="bg-gradient-to-br from-indigo-950 to-purple-950 py-24 relative overflow-hidden">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 text-white">
                    <h1 className="text-6xl font-black mb-6">
                        Builder <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">Resources</span>
                    </h1>
                    <p className="text-xl text-purple-200 max-w-2xl mx-auto font-light leading-relaxed">
                        Free templates, exhaustive pricing calculators, legal agreement blueprints, and advanced guides to help you scale independently.
                    </p>
                </div>
            </div>

            <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full space-y-16">
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">Essential Toolkits (Free Downloads)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white border-2 border-orange-100 hover:border-orange-300 rounded-3xl p-10 transition-colors group cursor-pointer">
                            <h3 className="text-2xl font-bold text-purple-900 mb-2 group-hover:text-orange-600 transition-colors">The Perfect Scope of Work (SOW)</h3>
                            <p className="text-gray-600 mb-6">A plug-and-play notion template that guarantees client alignment and prevents scope creep.</p>
                            <span className="text-orange-500 font-bold uppercase tracking-wider text-sm">Download Template &darr;</span>
                        </div>
                        <div className="bg-white border-2 border-purple-100 hover:border-purple-300 rounded-3xl p-10 transition-colors group cursor-pointer">
                            <h3 className="text-2xl font-bold text-purple-900 mb-2 group-hover:text-purple-600 transition-colors">Value-Based Pricing Calculator</h3>
                            <p className="text-gray-600 mb-6">Stop charging by the hour. Use this interactive Google Sheet to calculate project pricing based on ROI.</p>
                            <span className="text-purple-500 font-bold uppercase tracking-wider text-sm">Open Spreadsheet &darr;</span>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">Deep-Dive Manuals</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            'How to build a compelling waitlist in 24 hours',
                            'The solo-founder tech stack (2026 Edition)',
                            'Navigating international client taxes efficiently',
                            'Transitioning from an agency to an independent consultant',
                            'How to vet a UI designer without a design background',
                            'Defining MVP scope for rapid market validation'
                        ].map((manual, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">{manual}</h3>
                                <div className="flex justify-between items-center mt-6">
                                    <span className="text-sm text-gray-400">8 min read</span>
                                    <span className="text-purple-600 font-bold">Read &rarr;</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <Link href="/blog" className="text-xl font-bold text-purple-600 hover:underline">
                            View all articles on our Blog
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
