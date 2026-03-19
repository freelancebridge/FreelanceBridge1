export default function Contact() {
    return (
        <div className="bg-indigo-50 min-h-[calc(100vh-64px)] py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl shadow-sm border border-purple-100 p-12 text-center relative overflow-hidden">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Contact Us</h1>
                    <p className="text-xl text-gray-700 mb-8">We'd love to hear from you. Drop us a line.</p>
                    
                    <form className="max-w-md mx-auto space-y-4 text-left">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Name</label>
                            <input type="text" className="w-full border border-gray-200 rounded-xl px-4 py-2" placeholder="Your name" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                            <input type="email" className="w-full border border-gray-200 rounded-xl px-4 py-2" placeholder="you@example.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Message</label>
                            <textarea rows={4} className="w-full border border-gray-200 rounded-xl px-4 py-2" placeholder="How can we help?"></textarea>
                        </div>
                        <button type="button" className="w-full bg-purple-600 text-white font-bold py-3 rounded-xl hover:bg-purple-700 transition-colors">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
