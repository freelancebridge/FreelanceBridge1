import Link from 'next/link';

export default function HowToFindGigs() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="bg-purple-950 py-24 pb-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-6">
                        How to Find Gigs
                    </h1>
                    <p className="text-xl text-purple-200">
                        Stop endlessly scrolling job boards. Learn the systematic approach to landing high-ticket clients on FreelanceBridge.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10 pb-24">
                <div className="bg-gradient-to-b from-indigo-950 to-purple-950 rounded-3xl p-8 md:p-12 shadow-2xl border border-purple-800/50 text-white">
                    <div className="space-y-12">
                        <section>
                            <h2 className="text-3xl font-bold mb-4 text-pink-400 flex items-center gap-4">
                                <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-400 opacity-80">01</span>
                                Optimize Your Profile
                            </h2>
                            <p className="text-purple-100 leading-relaxed text-lg pl-16">
                                Your profile is your storefront. Ditch the generic bio. Focus purely on the value you deliver and the specific, measurable results you've achieved for past clients. Ensure your top 3 portfolio pieces are front and center. Quality beats quantity every time.
                            </p>
                        </section>
                        <hr className="border-purple-800/50" />
                        <section>
                            <h2 className="text-3xl font-bold mb-4 text-purple-400 flex items-center gap-4">
                                <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-400 opacity-80">02</span>
                                Pitch with Precision
                            </h2>
                            <p className="text-purple-100 leading-relaxed text-lg pl-16">
                                The era of copy-paste cover letters is dead. When pitching a client, identify exactly what their core problem is based on their job description, and tell them precisely how you will solve it in your first two sentences.
                            </p>
                        </section>
                        <hr className="border-purple-800/50" />
                        <section>
                            <h2 className="text-3xl font-bold mb-4 text-indigo-400 flex items-center gap-4">
                                <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-400 opacity-80">03</span>
                                Price for Value
                            </h2>
                            <p className="text-purple-100 leading-relaxed text-lg pl-16">
                                Don't compete on price; compete on reliability and outcome. Premium clients on FreelanceBridge are looking for low-risk, high-reward contractors. Price confidently, and back it up with flawless communication.
                            </p>
                        </section>
                    </div>

                    <div className="mt-16 text-center">
                        <Link href="/jobs" className="inline-block px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] transition-all transform hover:-translate-y-1 text-lg">
                            Browse Open Gigs
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
