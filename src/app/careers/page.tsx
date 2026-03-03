import Link from 'next/link';

export default function Careers() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="bg-purple-950 py-24 px-4 relative overflow-hidden">
                <div className="max-w-5xl mx-auto text-center relative z-10 text-white">
                    <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
                        Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">Rebellion</span>
                    </h1>
                    <p className="text-2xl text-purple-200 max-w-3xl mx-auto font-light leading-relaxed">
                        We are a fully distributed, asynchronous-first team building the economic infrastructure for the next century of work.
                    </p>
                </div>
            </div>

            <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full space-y-16">

                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-purple-900 mb-4">No Meetings. Just Shipping.</h3>
                            <p className="text-gray-600">We operate 95% asynchronously. Unless it's highly strategic, we communicate in text and focus purely on deep work and shipping velocity.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-purple-900 mb-4">Craftsmanship First</h3>
                            <p className="text-gray-600">We care deeply about aesthetics, transitions, and the tiny details. If it's not beautiful, it doesn't ship.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-purple-900 mb-4">Radical Autonomy</h3>
                            <p className="text-gray-600">We hire adults and treat them as such. No tracking software, no set hours. Just deliver your work and achieve the outcome.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">Open Roles</h2>
                    <div className="space-y-4">
                        {[
                            { role: 'Staff Frontend Engineer', dept: 'Engineering', type: 'Full-time' },
                            { role: 'Senior Product Designer', dept: 'Design', type: 'Full-time' },
                            { role: 'Go-to-Market Lead', dept: 'Growth', type: 'Full-time' },
                            { role: 'Head of Data Science', dept: 'Data', type: 'Full-time' },
                            { role: 'Developer Advocate', dept: 'Community', type: 'Full-time' }
                        ].map((job, idx) => (
                            <Link href="#" key={idx} className="block bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md hover:border-purple-300 transition-all group">
                                <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">{job.role}</h3>
                                        <p className="text-gray-500 text-sm font-semibold">{job.dept} &bull; Remote (Global)</p>
                                    </div>
                                    <div className="mt-4 sm:mt-0">
                                        <span className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider group-hover:bg-purple-100 group-hover:text-purple-700 transition-colors">
                                            {job.type}
                                        </span>
                                        <span className="ml-4 text-purple-500 font-bold group-hover:translate-x-1 inline-block transition-transform">&rarr;</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                <div className="mt-8 text-center text-gray-500">
                    Don't see a fit? <a href="#" className="text-purple-600 font-bold hover:underline">Send an open application.</a>
                </div>
            </div>
        </div>
    );
}
