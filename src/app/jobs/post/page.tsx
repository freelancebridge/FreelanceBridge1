export default function PostJob() {
    return (
        <div className="bg-gray-50 min-h-screen py-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10 text-center flex flex-col items-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">What are we building today?</h1>
                    <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">Drop the details below and we'll match you with the perfect creator to bring your vision to life.</p>
                </div>

                <form className="space-y-8">
                    {/* Headline */}
                    <div className="bg-white rounded-3xl shadow-sm border border-purple-100 p-8 md:p-10 hover:shadow-md transition-shadow">
                        <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Give your gig a catchy name.</h2>
                        <p className="text-base text-gray-500 mb-6 font-medium">This is your hook. Make it spicy so the right talent bites!</p>
                        <div className="mb-4">
                            <input
                                type="text"
                                id="title"
                                name="title"
                                className="w-full border-2 border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-purple-100 focus:border-purple-500 text-gray-900 text-lg transition-all"
                                placeholder="e.g. Build an insanely fast Next.js landing page"
                            />
                        </div>
                        <div className="text-sm text-gray-500 bg-gray-50 p-4 rounded-xl border border-gray-100">
                            <p className="font-bold text-gray-700 mb-2">Cool ideas to borrow:</p>
                            <ul className="list-disc pl-5 space-y-1 font-medium">
                                <li>Design a jaw-dropping brand identity for a coffee startup</li>
                                <li>Write witty conversion copy for our new app launch</li>
                                <li>Build a robust GraphQL API in Node.js</li>
                            </ul>
                        </div>
                    </div>

                    {/* Skills Context */}
                    <div className="bg-white rounded-3xl shadow-sm border border-purple-100 p-8 md:p-10 hover:shadow-md transition-shadow">
                        <h2 className="text-2xl font-extrabold text-gray-900 mb-2">What skills does the wizard need?</h2>
                        <p className="text-base text-gray-500 mb-6 font-medium">Tag up to 10 superpowers needed for this gig.</p>
                        <div className="mb-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="skills"
                                    name="skills"
                                    className="w-full border-2 border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-purple-100 focus:border-purple-500 text-gray-900 text-lg transition-all"
                                    placeholder="Type to search superpowers..."
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3 mt-5">
                            <span className="bg-gradient-to-r from-purple-100 to-purple-50 text-purple-800 border-2 border-purple-200 text-sm px-4 py-2 rounded-xl flex items-center cursor-pointer font-bold shadow-sm">
                                React <span className="ml-3 text-purple-400 hover:text-purple-900 text-lg">×</span>
                            </span>
                            <span className="bg-gradient-to-r from-purple-100 to-purple-50 text-purple-800 border-2 border-purple-200 text-sm px-4 py-2 rounded-xl flex items-center cursor-pointer font-bold shadow-sm">
                                TypeScript <span className="ml-3 text-purple-400 hover:text-purple-900 text-lg">×</span>
                            </span>
                        </div>
                        <div className="mt-8 border-t border-gray-100 pt-6">
                            <p className="text-sm font-bold text-gray-700 mb-4">Trending right now:</p>
                            <div className="flex flex-wrap gap-2">
                                {['Tailwind CSS', 'Figma', 'Next.js', 'Copywriting', 'Node.js'].map(skill => (
                                    <span key={skill} className="bg-white border-2 border-gray-200 hover:border-orange-400 hover:text-orange-600 cursor-pointer text-gray-600 text-sm px-4 py-2 rounded-xl transition-colors font-bold flex items-center">
                                        <span className="mr-2 text-orange-400">+</span> {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="bg-white rounded-3xl shadow-sm border border-purple-100 p-8 md:p-10 hover:shadow-md transition-shadow">
                        <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Spill the tea.</h2>
                        <p className="text-base text-gray-500 mb-6 font-medium">Give us the grand tour of your project. The more detail, the better the match!</p>
                        <div className="mb-4">
                            <textarea
                                id="description"
                                name="description"
                                rows={6}
                                className="w-full border-2 border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-purple-100 focus:border-purple-500 text-gray-900 text-lg transition-all reszie-y font-medium"
                                placeholder="Once upon a time, we had this amazing idea to build..."
                            />
                        </div>
                        <div className="flex items-center justify-between border-t border-gray-100 pt-6 mt-4">
                            <div className="flex items-center space-x-3 text-purple-600 cursor-pointer hover:text-orange-500 transition-colors font-bold">
                                <span>+ Attach files (moodboards, specs, anything!)</span>
                            </div>
                            <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Max size: 100 MB</span>
                        </div>
                    </div>

                    {/* Budget */}
                    <div className="bg-white rounded-3xl shadow-sm border border-purple-100 p-8 md:p-10 hover:shadow-md transition-shadow relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50 rounded-full filter blur-3xl opacity-50 -mr-20 -mt-20"></div>

                        <h2 className="text-2xl font-extrabold text-gray-900 mb-2 relative z-10">Let's talk money.</h2>
                        <p className="text-base text-gray-500 mb-8 font-medium relative z-10">We'll make sure you only meet folks who fit your budget vibes.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 relative z-10">
                            <label className="bg-white/60 backdrop-blur-md border border-gray-200 rounded-3xl p-6 cursor-pointer relative shadow-sm flex items-center justify-between transform transition-all hover:-translate-y-1 hover:border-purple-400 group overflow-hidden opacity-90 hover:opacity-100">
                                <div className="relative z-10">
                                    <div className="flex items-center mb-2">
                                        <span className="font-extrabold text-gray-900 text-xl">By the hour</span>
                                    </div>
                                    <p className="text-sm text-gray-500 font-medium">Perfect for ongoing or unpredictable work.</p>
                                </div>
                                <div className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center bg-gray-50 relative z-10">
                                </div>
                            </label>

                            <label className="bg-white/60 backdrop-blur-md border border-gray-200 rounded-3xl p-6 cursor-pointer relative shadow-sm flex items-center justify-between transform transition-all hover:-translate-y-1 hover:border-purple-400 group overflow-hidden opacity-90 hover:opacity-100">
                                <div className="relative z-10">
                                    <div className="flex items-center mb-2">
                                        <span className="font-extrabold text-gray-900 text-xl">Fixed price</span>
                                    </div>
                                    <p className="text-sm text-gray-500 font-medium">One clear price for the entire project.</p>
                                </div>
                                <div className="w-7 h-7 rounded-full border border-gray-300 bg-gray-50 relative z-10"></div>
                            </label>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end relative z-10 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">From</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                        <span className="text-gray-500 text-xl font-bold">$</span>
                                    </div>
                                    <input type="number" className="w-full border-2 border-gray-200 rounded-xl pl-10 pr-12 py-4 focus:outline-none focus:ring-4 focus:ring-purple-100 focus:border-purple-500 text-gray-900 text-right text-xl font-bold bg-white" placeholder="25.00" defaultValue="40.00" />
                                    <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none">
                                        <span className="text-gray-400 font-bold">/hr</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">To</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                        <span className="text-gray-500 text-xl font-bold">$</span>
                                    </div>
                                    <input type="number" className="w-full border-2 border-gray-200 rounded-xl pl-10 pr-12 py-4 focus:outline-none focus:ring-4 focus:ring-purple-100 focus:border-purple-500 text-gray-900 text-right text-xl font-bold bg-white" placeholder="65.00" defaultValue="80.00" />
                                    <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none">
                                        <span className="text-gray-400 font-bold">/hr</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-end gap-4 mt-12 pb-20">
                        <button type="button" className="px-10 py-4 bg-white text-gray-500 font-bold rounded-full border-2 border-gray-200 hover:bg-gray-50 hover:text-gray-800 transition-colors text-lg w-full sm:w-auto">
                            Nevermind
                        </button>
                        <button type="button" className="px-10 py-4 bg-gradient-to-r from-purple-600 to-orange-500 text-white font-bold rounded-full hover:from-purple-500 hover:to-orange-400 shadow-xl transition-transform transform hover:-translate-y-1 text-lg flex items-center justify-center w-full sm:w-auto">
                            Launch the Gig
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
