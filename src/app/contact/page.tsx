import Link from 'next/link';

export default function SayHello() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="bg-gradient-to-tr from-purple-950 to-indigo-950 py-24 px-4 relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center relative z-10 text-white">
                    <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
                        Say <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">Hello</span>
                    </h1>
                    <p className="text-2xl text-purple-200 max-w-2xl mx-auto font-light leading-relaxed">
                        Got a partnership idea, enterprise inquiry, or just want to chat? We read every single message.
                    </p>
                </div>
            </div>

            <div className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-10 md:p-16 relative -mt-32 z-20">
                    <form className="space-y-8 flex flex-col">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Name</label>
                                <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all font-semibold" placeholder="Jane Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Email</label>
                                <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all font-semibold" placeholder="jane@example.com" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Subject</label>
                            <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all font-semibold appearance-none">
                                <option>Enterprise Inquiry</option>
                                <option>Partnership/Sponsorship</option>
                                <option>Press/Media</option>
                                <option>General Chat</option>
                            </select>
                        </div>

                        <div className="space-y-2 flex-grow">
                            <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Message</label>
                            <textarea rows={6} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all resize-none font-semibold" placeholder="How can we build the future together?"></textarea>
                        </div>

                        <button type="button" className="w-full bg-purple-900 text-white font-bold text-lg py-5 rounded-xl hover:bg-purple-800 shadow-lg transform hover:-translate-y-1 transition-all">
                            Send Message
                        </button>
                    </form>
                </div>

                <div className="mt-20 text-center grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <div>
                        <h4 className="font-bold text-gray-900 mb-2">Support</h4>
                        <a href="#" className="text-purple-600 hover:underline">help@freelancebridge.com</a>
                    </div>
                    <div className="border-l border-r border-gray-200 px-4">
                        <h4 className="font-bold text-gray-900 mb-2">Press</h4>
                        <a href="#" className="text-purple-600 hover:underline">press@freelancebridge.com</a>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 mb-2">Enterprise</h4>
                        <a href="#" className="text-purple-600 hover:underline">sales@freelancebridge.com</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
