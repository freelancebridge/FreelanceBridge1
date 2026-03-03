import Link from 'next/link';

export default function Help() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="bg-gradient-to-br from-indigo-950 to-purple-950 py-24 relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 text-white">
                    <h1 className="text-6xl font-black mb-6">
                        How can we help?
                    </h1>
                    <div className="max-w-2xl mx-auto relative mt-10">
                        <input
                            type="text"
                            placeholder="Search for articles, guides, or issues..."
                            className="w-full bg-white/10 border border-white/20 backdrop-blur-md text-white px-8 py-5 rounded-full outline-none focus:bg-white/20 transition-colors text-lg placeholder-purple-300 shadow-xl"
                        />
                    </div>
                </div>
            </div>

            <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { title: 'Getting Started', desc: 'Setting up your profile, verifying identity, and understanding fees.' },
                        { title: 'Payments & Invoicing', desc: 'How escrows work, withdrawing funds, and tax form generation.' },
                        { title: 'Trust & Safety', desc: 'Dispute resolution, reporting bad behavior, and platform policies.' },
                        { title: 'For Clients', desc: 'Enterprise accounts, hiring studios, and managing multiple contracts.' },
                        { title: 'For Creators', desc: 'Direct Collabs, portfolio optimization, and landing elite gigs.' },
                        { title: 'Technical Issues', desc: 'Bugs, account deletion, and 2FA recovery.' },
                    ].map((category, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow cursor-pointer">
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{category.desc}</p>
                            <div className="mt-6">
                                <span className="text-purple-600 font-bold hover:underline">View Articles &rarr;</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 bg-indigo-50 border border-indigo-100 rounded-3xl p-12 text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-indigo-950 mb-4">Still need help?</h2>
                    <p className="text-lg text-indigo-800 mb-8 max-w-2xl mx-auto">
                        Our support team is distributed globally and typically responds to all inquiries within 2 hours.
                    </p>
                    <Link href="/contact" className="inline-block px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full transition-colors">
                        Contact Support
                    </Link>
                </div>
            </div>
        </div>
    );
}
