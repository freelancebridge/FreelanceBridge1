import Link from 'next/link';

export default function Leadership() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="bg-purple-950 py-24 px-4 relative overflow-hidden">
                <div className="max-w-5xl mx-auto text-center relative z-10 text-white">
                    <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
                        Leadership
                    </h1>
                    <p className="text-2xl text-purple-200 max-w-3xl mx-auto font-light leading-relaxed">
                        A team of former founders, designers, and engineers dedicated to building the ultimate infrastructure for independent work.
                    </p>
                </div>
            </div>

            <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {[
                        { name: 'Amaris Thorne', title: 'Chief Executive Officer', bg: 'from-orange-400 to-pink-500' },
                        { name: 'Julian Vance', title: 'Chief Technology Officer', bg: 'from-blue-500 to-indigo-600' },
                        { name: 'Sofia Lin', title: 'VP of Design', bg: 'from-purple-400 to-purple-600' },
                        { name: 'Marcus Adebayo', title: 'Chief Operating Officer', bg: 'from-green-400 to-teal-500' },
                        { name: 'Leila Qureshi', title: 'Head of Developer Relations', bg: 'from-yellow-400 to-orange-500' },
                        { name: 'Evan Mitchell', title: 'VP of Engineering', bg: 'from-pink-500 to-rose-600' },
                    ].map((leader, idx) => (
                        <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group">
                            <div className={`h-64 bg-gradient-to-br ${leader.bg} relative overflow-hidden flex items-center justify-center`}>
                                <div className="text-white/30 text-8xl font-black opacity-20 transform -rotate-12 select-none group-hover:scale-110 transition-transform duration-700">
                                    {leader.name.split(' ')[0][0]}{leader.name.split(' ')[1][0]}
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                                <p className="text-purple-600 font-bold text-sm tracking-wider uppercase mb-6">{leader.title}</p>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Focused on scaling the platform while maintaining our rigorous standards for quality and aesthetics.
                                </p>
                                <span className="text-sm font-bold text-gray-400 hover:text-purple-600 cursor-pointer transition-colors">LinkedIn &rarr;</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
