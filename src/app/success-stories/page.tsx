import Link from 'next/link';

export default function SuccessStories() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="bg-purple-950 py-24 px-4 relative overflow-hidden">
                <div className="max-w-5xl mx-auto text-center relative z-10 text-white">
                    <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
                        Built on <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400">FreelanceBridge</span>
                    </h1>
                    <p className="text-2xl text-purple-200 max-w-3xl mx-auto font-light leading-relaxed">
                        Read exactly how the world's most ambitious companies are scaling their engineering and design teams using independent creators.
                    </p>
                </div>
            </div>

            <div className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full space-y-16">
                {/* Story 1 */}
                <div className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                    <div className="md:w-2/5 bg-gradient-to-br from-orange-400 to-pink-500 p-12 flex flex-col justify-center text-white">
                        <div className="text-5xl font-black mb-4">Acme Corp</div>
                        <p className="text-xl font-bold text-white/80">Enterprise SaaS</p>
                    </div>
                    <div className="md:w-3/5 p-12 lg:p-16 flex flex-col justify-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">"We shipped our entire mobile app re-write 4 months early."</h2>
                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                            Instead of spending 6 months interviewing and hiring full-time React Native developers, Acme Corp hired a specialized studio off FreelanceBridge in 48 hours. The result was a flawless execution ahead of schedule.
                        </p>
                        <Link href="/freelancers" className="text-purple-600 font-bold hover:text-purple-800 text-lg decoration-2 hover:underline">
                            Hire React Native Devs &rarr;
                        </Link>
                    </div>
                </div>

                {/* Story 2 */}
                <div className="flex flex-col md:flex-row-reverse bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                    <div className="md:w-2/5 bg-gradient-to-br from-indigo-500 to-purple-600 p-12 flex flex-col justify-center text-white">
                        <div className="text-5xl font-black mb-4">Sarah J.</div>
                        <p className="text-xl font-bold text-white/80">Independent UI/UX Designer</p>
                    </div>
                    <div className="md:w-3/5 p-12 lg:p-16 flex flex-col justify-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">"FreelanceBridge allowed me to quit my agency job and double my income."</h2>
                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                            By utilizing Direct Collabs, Sarah bypassed the crowded race-to-the-bottom bidding platforms and worked directly with Series A founders who valued premium design work.
                        </p>
                        <Link href="/register" className="text-purple-600 font-bold hover:text-purple-800 text-lg decoration-2 hover:underline">
                            Join as a Creator &rarr;
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
