import Link from 'next/link';

export default function Impact() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="bg-gradient-to-br from-indigo-950 to-purple-950 py-32 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-5xl mx-auto text-center relative z-10 text-white">
                    <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Impact</span>
                    </h1>
                    <p className="text-2xl text-purple-200 max-w-3xl mx-auto font-light leading-relaxed">
                        Redistributing wealth and opportunity by enabling global talent to capture the true value of their work.
                    </p>
                </div>
            </div>

            <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    <div className="bg-white p-12 text-center rounded-3xl shadow-xl border border-gray-100 transform hover:-translate-y-2 transition-transform duration-500">
                        <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-purple-600 mb-4">$1.2B</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Paid to Creators</h3>
                        <p className="text-gray-500">Transferred directly to independent talent worldwide since inception.</p>
                    </div>
                    <div className="bg-white p-12 text-center rounded-3xl shadow-xl border border-gray-100 transform hover:-translate-y-2 transition-transform duration-500">
                        <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-pink-500 mb-4">120+</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Countries Reached</h3>
                        <p className="text-gray-500">Democratizing access to elite client networks across the globe.</p>
                    </div>
                    <div className="bg-white p-12 text-center rounded-3xl shadow-xl border border-gray-100 transform hover:-translate-y-2 transition-transform duration-500">
                        <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-blue-500 mb-4">8M+</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Projects Shipped</h3>
                        <p className="text-gray-500">Transformative digital products built and deployed via our platform.</p>
                    </div>
                </div>

                <div className="bg-purple-900 text-white rounded-3xl p-12 lg:p-20 shadow-2xl relative overflow-hidden text-center max-w-5xl mx-auto">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply opacity-50 filter blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                    <h2 className="text-4xl font-black mb-8 relative z-10">The 1% Pledge</h2>
                    <p className="text-xl text-purple-200 font-light leading-relaxed max-w-3xl mx-auto relative z-10 mb-10">
                        We pledge 1% of our total platform revenue to fund independent tech education programs in developing markets, ensuring the next generation of builders has the tools they need to participate in the global economy.
                    </p>
                    <Link href="/about" className="inline-block px-8 py-4 bg-white text-purple-950 font-bold rounded-full relative z-10 hover:bg-gray-100 transition-colors">
                        Learn more about our mission
                    </Link>
                </div>
            </div>
        </div>
    );
}
