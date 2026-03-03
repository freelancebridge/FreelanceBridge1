import Link from 'next/link';

export default function HowToHire() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="bg-purple-950 py-24 pb-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 mb-6">
                        How to Hire the Best
                    </h1>
                    <p className="text-xl text-purple-200">
                        A step-by-step guide to finding, vetting, and collaborating with the top 1% of independent creators on FreelanceBridge.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10 pb-24">
                <div className="bg-gradient-to-b from-indigo-950 to-purple-950 rounded-3xl p-8 md:p-12 shadow-2xl border border-purple-800/50 text-white">
                    <div className="space-y-12">
                        <section>
                            <h2 className="text-3xl font-bold mb-4 text-orange-400 flex items-center gap-4">
                                <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-orange-400 opacity-80">01</span>
                                Define Your Scope
                            </h2>
                            <p className="text-purple-100 leading-relaxed text-lg pl-16">
                                Before reaching out, make sure you know exactly what you need. Write a clear, concise brief detailing the deliverables, timeline, and budget. The best freelancers appreciate clarity and precision. Avoid vague terms and be extremely upfront about your expectations.
                            </p>
                        </section>
                        <hr className="border-purple-800/50" />
                        <section>
                            <h2 className="text-3xl font-bold mb-4 text-pink-400 flex items-center gap-4">
                                <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-orange-400 opacity-80">02</span>
                                Search & Filter
                            </h2>
                            <p className="text-purple-100 leading-relaxed text-lg pl-16">
                                Use our advanced search filters to narrow down candidates by skill, availability, and rate. Review their portfolios meticulously—past work is the best predictor of future success. Look for case studies that align closely with your industry or aesthetic vision.
                            </p>
                        </section>
                        <hr className="border-purple-800/50" />
                        <section>
                            <h2 className="text-3xl font-bold mb-4 text-purple-400 flex items-center gap-4">
                                <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-orange-400 opacity-80">03</span>
                                Initiate Contact
                            </h2>
                            <p className="text-purple-100 leading-relaxed text-lg pl-16">
                                Send a personalized message. Mention a specific project from their portfolio that you liked. High-level creators get pitched continuously; standing out shows you're serious. Book an introductory video call to ensure your personalities and working styles mesh.
                            </p>
                        </section>
                    </div>

                    <div className="mt-16 text-center">
                        <Link href="/freelancers" className="inline-block px-10 py-4 bg-gradient-to-r from-orange-500 to-purple-600 text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all transform hover:-translate-y-1 text-lg">
                            Start Hiring Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
