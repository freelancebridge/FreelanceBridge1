import Link from 'next/link';

export default function Press() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="bg-purple-950 py-24 px-4 relative overflow-hidden">
                <div className="max-w-5xl mx-auto text-center relative z-10 text-white">
                    <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
                        Press Room
                    </h1>
                    <p className="text-2xl text-purple-200 max-w-3xl mx-auto font-light leading-relaxed">
                        Announcements, brand assets, and media coverage charting the growth of FreelanceBridge.
                    </p>
                </div>
            </div>

            <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full space-y-16">

                <section>
                    <div className="flex justify-between items-end border-b pb-4 mb-8">
                        <h2 className="text-3xl font-bold text-gray-900">Recent Headlines</h2>
                    </div>
                    <div className="space-y-6">
                        {[
                            { pub: 'TechCrunch', date: 'October 12, 2026', title: 'FreelanceBridge announces $150M Series D to expand Enterprise infrastructure.' },
                            { pub: 'The Verge', date: 'August 04, 2026', title: 'Why VCs are backing the "anti-bidding" freelance network.' },
                            { pub: 'Bloomberg', date: 'June 22, 2026', title: 'The new economy of independent studios.' },
                            { pub: 'Wired', date: 'March 15, 2026', title: 'How FreelanceBridge is fixing the broken gig economy for high-end creators.' }
                        ].map((news, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group cursor-pointer">
                                <div className="text-sm font-bold text-purple-600 mb-2 uppercase tracking-wide">{news.pub} &bull; <span className="text-gray-400">{news.date}</span></div>
                                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors">{news.title}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-white rounded-3xl p-12 border border-gray-100 shadow-sm text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Brand Assets</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg pt-2 pb-6">
                        Need our logo, color palette, or executive headshots? Download our comprehensive,
                        high-resolution press kit. Please follow our brand guidelines when utilizing our marks.
                    </p>
                    <div className="flex justify-center gap-6">
                        <button className="px-8 py-4 bg-purple-900 text-white rounded-full font-bold hover:bg-purple-800 shadow-lg transition-transform hover:-translate-y-1">
                            Download Press Kit (.zip)
                        </button>
                    </div>
                    <p className="mt-8 text-sm text-gray-500">For direct media inquiries, please email <a href="mailto:press@freelancebridge.com" className="font-bold text-purple-600 hover:underline">press@freelancebridge.com</a></p>
                </section>
            </div>
        </div>
    );
}
