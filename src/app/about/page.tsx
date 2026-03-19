export default function About() {
    return (
        <div className="bg-indigo-50 min-h-[calc(100vh-64px)] py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl shadow-sm border border-purple-100 p-12 relative overflow-hidden text-center">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50 rounded-full filter blur-3xl opacity-50 -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-50 rounded-full filter blur-3xl opacity-50 -ml-20 -mb-20"></div>
                    
                    <div className="relative z-10">
                        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-orange-500 mb-6">About FreelanceBridge</h1>
                        <p className="text-xl text-gray-700 leading-relaxed mb-8">
                            We're on a mission to connect the world's most talented creators with visionary clients.
                            Our platform is designed to make work feel less like "work" and more like a collaboration between brilliant minds.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left">
                            <div className="p-6 bg-purple-50 rounded-2xl border border-purple-100">
                                <h3 className="text-xl font-bold text-purple-900 mb-2">For Clients</h3>
                                <p className="text-purple-700 font-medium">Find the perfect spark for your next big idea. Hire top-tier talent without the friction.</p>
                            </div>
                            <div className="p-6 bg-orange-50 rounded-2xl border border-orange-100">
                                <h3 className="text-xl font-bold text-orange-900 mb-2">For Creators</h3>
                                <p className="text-orange-700 font-medium">Do what you love, on your own terms. Connect with clients who value your unique powers.</p>
                            </div>
                            <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
                                <h3 className="text-xl font-bold text-indigo-900 mb-2">Our Promise</h3>
                                <p className="text-indigo-700 font-medium">A secure, transparent, and vibrant ecosystem where great work is celebrated and rewarded.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
