import Link from 'next/link';

export default function CreatorMarketplace() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header */}
            <div className="bg-purple-950 py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/50"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 text-white">
                    <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400 mb-6">
                        Creator Marketplace
                    </h1>
                    <p className="text-xl text-purple-200 max-w-3xl mx-auto">
                        The definitive directory of the world's most talented independent creators.
                        No agencies, no fluff. Just pure, verified talent ready to build your vision.
                    </p>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Dummy robust cards mimicking the standard FreelanceBridge design */}
                    {[
                        { title: 'Frontend Engineers', count: '1,243 verified', color: 'from-blue-500 to-purple-600' },
                        { title: 'Brand Designers', count: '982 verified', color: 'from-orange-500 to-pink-600' },
                        { title: 'Copywriters', count: '512 verified', color: 'from-green-400 to-teal-600' },
                        { title: '3D Animators', count: '305 verified', color: 'from-purple-500 to-indigo-600' },
                        { title: 'Mobile Devs', count: '876 verified', color: 'from-red-500 to-orange-600' },
                        { title: 'Growth Marketers', count: '645 verified', color: 'from-yellow-400 to-orange-500' },
                    ].map((category, idx) => (
                        <div key={idx} className="bg-gradient-to-b from-indigo-950 to-purple-950 rounded-3xl p-8 border border-purple-700/30 hover:border-orange-500/50 shadow-lg hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] transition-all duration-500 group cursor-pointer relative overflow-hidden transform hover:-translate-y-1">
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} rounded-full mix-blend-screen filter blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors mb-2 relative z-10">{category.title}</h3>
                            <p className="text-purple-300 relative z-10 text-sm font-semibold tracking-wider uppercase">{category.count}</p>

                            <div className="mt-8 relative z-10">
                                <span className="text-orange-400 font-bold group-hover:underline">Browse Creators &rarr;</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Link href="/freelancers" className="inline-block px-10 py-4 bg-purple-900 border border-purple-700 hover:bg-purple-800 text-white font-bold rounded-full transition-colors">
                        View Complete Directory
                    </Link>
                </div>
            </div>
        </div>
    );
}
