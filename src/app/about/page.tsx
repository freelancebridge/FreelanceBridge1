import Link from 'next/link';

export default function About() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="bg-purple-950 py-32 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-500 rounded-full mix-blend-multiply opacity-20 filter blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-500 rounded-full mix-blend-multiply opacity-20 filter blur-[100px] -translate-x-1/3 translate-y-1/3"></div>

                <div className="max-w-5xl mx-auto text-center relative z-10 text-white">
                    <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight">
                        We build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">future of work.</span>
                    </h1>
                    <p className="text-2xl text-purple-200 max-w-3xl mx-auto font-light leading-relaxed">
                        FreelanceBridge is a technology company systematically dismantling the inefficiencies of the traditional labor market. We connect the world's most visionary companies with its most exceptional independent talent.
                    </p>
                </div>
            </div>

            <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                        <p className="text-xl text-gray-600 leading-relaxed mb-6">
                            For decades, corporate hiring has been broken. Resumes are terrible proxies for skill. Geography is an arbitrary constraint. Bidding platforms turned independent work into a race to the bottom.
                        </p>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Our mission is to build the purest, most efficient meritocracy on the internet. We ensure that if you are exceptionally good at what you do, you can build a massive, lucrative, independent business doing exactly that, from anywhere in the world.
                        </p>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-950 to-purple-950 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply opacity-50 filter blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                        <h3 className="text-3xl font-bold mb-8 relative z-10">Our Core Tenets</h3>
                        <ul className="space-y-6 relative z-10 text-lg text-purple-100">
                            <li className="flex gap-4">
                                <span className="text-orange-400 font-bold">01.</span>
                                <div><strong className="text-white block">Merit Over Credentials</strong> Don't show us a degree. Show us what you've built.</div>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-orange-400 font-bold">02.</span>
                                <div><strong className="text-white block">Radical Transparency</strong> Complete visibility into pricing, reviews, and transaction history.</div>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-orange-400 font-bold">03.</span>
                                <div><strong className="text-white block">Aesthetics Matter</strong> Good design is good business. We refuse to build ugly software.</div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="text-center mt-20">
                    <h2 className="text-4xl font-bold text-gray-900 mb-8">Join the Rebellion</h2>
                    <div className="flex justify-center gap-6">
                        <Link href="/careers" className="px-8 py-4 bg-purple-950 text-white rounded-full font-bold text-lg hover:bg-purple-900 shadow-xl transition-all">
                            View Open Roles Internally
                        </Link>
                        <Link href="/register" className="px-8 py-4 bg-white text-purple-950 border border-purple-200 rounded-full font-bold text-lg hover:bg-gray-50 shadow-sm transition-all">
                            Join as a Creator
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
