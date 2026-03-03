import Link from 'next/link';

export default function IdeaCatalog() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="bg-purple-950 py-24 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-t from-orange-500 to-yellow-300 mb-6 drop-shadow-lg">
                        Idea Catalog
                    </h1>
                    <p className="text-2xl text-purple-200 max-w-3xl mx-auto">
                        A curated gallery of the most innovative apps, brands, and digital products built by creators on FreelanceBridge.
                    </p>
                </div>
            </div>

            <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
                <div className="mb-12 flex justify-center space-x-4">
                    <button className="px-6 py-2 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-full font-bold shadow-md">All Ideas</button>
                    <button className="px-6 py-2 bg-white text-purple-900 border border-purple-200 hover:bg-purple-50 rounded-full font-bold shadow-sm transition-colors">SaaS</button>
                    <button className="px-6 py-2 bg-white text-purple-900 border border-purple-200 hover:bg-purple-50 rounded-full font-bold shadow-sm transition-colors">Fintech</button>
                    <button className="px-6 py-2 bg-white text-purple-900 border border-purple-200 hover:bg-purple-50 rounded-full font-bold shadow-sm transition-colors">E-Commerce</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Catalog Item 1 */}
                    <div className="bg-gradient-to-b from-indigo-950 to-purple-950 rounded-3xl overflow-hidden shadow-xl border border-purple-800/50 group">
                        <div className="h-64 bg-purple-900/50 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/40 to-orange-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-white text-opacity-50 text-2xl font-black tracking-widest uppercase">Project Visual</span>
                            </div>
                        </div>
                        <div className="p-8 text-white">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-orange-400">Aura Analytics</h3>
                                    <p className="text-purple-300">Predictive SaaS Dashboard</p>
                                </div>
                                <span className="bg-purple-800 text-purple-200 text-xs px-3 py-1 rounded-full font-bold uppercase">UI/UX + Dev</span>
                            </div>
                            <p className="text-purple-100 leading-relaxed mb-6">
                                A complete redesign and frontend rebuild of a predictive analytics dashboard utilizing Next.js and Tailwind.
                            </p>
                            <Link href="/freelancers" className="text-orange-400 font-bold hover:text-white transition-colors">
                                View Creator Profile &rarr;
                            </Link>
                        </div>
                    </div>

                    {/* Catalog Item 2 */}
                    <div className="bg-gradient-to-b from-indigo-950 to-purple-950 rounded-3xl overflow-hidden shadow-xl border border-purple-800/50 group">
                        <div className="h-64 bg-purple-900/50 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 to-teal-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-white text-opacity-50 text-2xl font-black tracking-widest uppercase">Project Visual</span>
                            </div>
                        </div>
                        <div className="p-8 text-white">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-teal-400">Neon Pay</h3>
                                    <p className="text-purple-300">Fintech Mobile App Rebrand</p>
                                </div>
                                <span className="bg-purple-800 text-purple-200 text-xs px-3 py-1 rounded-full font-bold uppercase">Branding</span>
                            </div>
                            <p className="text-purple-100 leading-relaxed mb-6">
                                Ground-up brand identity creation for a Gen-Z focused financial protocol, including motion graphics and logo design.
                            </p>
                            <Link href="/freelancers" className="text-teal-400 font-bold hover:text-white transition-colors">
                                View Creator Profile &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
