import Link from 'next/link';

export default function HireAStudio() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="bg-purple-950 py-24 relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400 mb-6">
                        Hire a Studio
                    </h1>
                    <p className="text-xl text-purple-200">
                        For massive projects that require an entire team. Browse and hire vetted elite boutique studios and agencies directly on FreelanceBridge.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10 pb-24 w-full">
                <div className="bg-gradient-to-b from-indigo-950 to-purple-950 rounded-3xl p-10 md:p-16 shadow-2xl border border-purple-800/50 text-white text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                        <span className="text-4xl font-black text-white">S</span>
                    </div>

                    <h2 className="text-3xl font-bold mb-6">Studio Access is Currently Invite-Only</h2>
                    <p className="text-lg text-purple-200 mb-10 leading-relaxed max-w-2xl mx-auto">
                        We manually vet every single agency and studio on our platform to ensure enterprise-grade quality. Our studio catalog is currently rolling out in private beta.
                    </p>

                    <form className="max-w-md mx-auto flex flex-col gap-4">
                        <input
                            type="email"
                            placeholder="Enter your enterprise email"
                            className="bg-purple-900/50 border border-purple-700 text-white rounded-lg px-6 py-4 outline-none focus:border-orange-500 transition-colors w-full placeholder-purple-400"
                        />
                        <button type="button" className="w-full bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-bold py-4 rounded-lg shadow-lg transition-transform hover:-translate-y-1">
                            Request Early Access
                        </button>
                    </form>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-500">Need immediate help? <Link href="/freelancers" className="text-purple-600 font-bold hover:underline">Hire high-end solo contractors instead.</Link></p>
                </div>
            </div>
        </div>
    );
}
