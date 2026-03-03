import Link from 'next/link';

export default function DirectCollabs() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="bg-purple-950 py-32 px-4 relative overflow-hidden flex flex-col items-center justify-center flex-grow">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10 text-white">
                    <div className="inline-block px-6 py-2 border border-purple-500 rounded-full text-purple-300 font-bold mb-8 tracking-widest uppercase text-sm">
                        Beta Feature
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight">
                        Direct <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Collabs</span>
                    </h1>
                    <p className="text-2xl text-purple-200 max-w-3xl mx-auto font-light leading-relaxed mb-12">
                        Skip the bidding wars entirely. Top-tier creators on FreelanceBridge are discovered and booked directly by founders.
                        No proposals necessary.
                    </p>

                    <div className="bg-purple-900/40 backdrop-blur-xl border border-purple-700 p-10 rounded-3xl shadow-2xl max-w-2xl mx-auto mb-16 relative">
                        <div className="absolute -top-6 -left-6 w-12 h-12 bg-indigo-500 rounded-full mix-blend-screen filter blur-xl"></div>
                        <h3 className="text-2xl font-bold text-white mb-4 text-left">How It Works:</h3>
                        <ul className="text-purple-200 text-lg text-left space-y-4">
                            <li className="flex gap-4"><span className="text-indigo-400 font-bold">1.</span> Maintain a verified Top Creator profile.</li>
                            <li className="flex gap-4"><span className="text-indigo-400 font-bold">2.</span> Set your availability schedule and fixed hourly or daily rate.</li>
                            <li className="flex gap-4"><span className="text-indigo-400 font-bold">3.</span> Founders book you directly on your calendar, paying upfront.</li>
                        </ul>
                    </div>

                    <div className="flex justify-center">
                        <Link href="/freelancers" className="px-10 py-5 bg-white text-purple-950 rounded-full font-extrabold text-lg hover:bg-gray-100 shadow-xl transition-transform hover:-translate-y-1">
                            Optimize My Profile for Discovery
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
