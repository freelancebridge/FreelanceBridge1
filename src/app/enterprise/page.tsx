import Link from 'next/link';

export default function EnterpriseMagic() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="bg-gradient-to-br from-purple-950 via-indigo-950 to-black py-32 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent"></div>
                <div className="max-w-5xl mx-auto text-center relative z-10 text-white">
                    <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight">
                        Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">Magic</span>
                    </h1>
                    <p className="text-2xl text-purple-200 max-w-3xl mx-auto font-light leading-relaxed">
                        Scale your corporate workforce with elasticity. Custom routing, dedicated account managers, compliant invoicing, and white-glove onboarding for Fortune 500s.
                    </p>

                    <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
                        <button className="px-10 py-5 bg-white text-purple-950 rounded-full font-extrabold text-lg hover:bg-gray-100 shadow-xl transition-transform hover:-translate-y-1">
                            Book a Demo
                        </button>
                        <button className="px-10 py-5 bg-transparent border-2 border-purple-500 text-white rounded-full font-bold text-lg hover:bg-purple-900/50 transition-colors">
                            View API Docs
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Enterprise Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
                        <h3 className="text-2xl font-bold text-purple-950 mb-4">Unified Compliance</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            We automatically handle global tax forms, worker classification, and local labor laws so you don't have to hire a fleet of lawyers.
                        </p>
                    </div>
                    <div className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
                        <h3 className="text-2xl font-bold text-purple-950 mb-4">Dedicated Management</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Get a dedicated technical account manager who proactively hand-picks creators specifically suited for your proprietary tech stack.
                        </p>
                    </div>
                    <div className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
                        <h3 className="text-2xl font-bold text-purple-950 mb-4">Custom Invoicing</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Consolidate thousands of global contractor payments into a single, clean monthly invoice compatible with standard procurement systems.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
