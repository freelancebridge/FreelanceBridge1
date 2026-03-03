import Link from 'next/link';

export default function Blog() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="bg-white border-b border-gray-200 py-16 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-6xl font-black text-purple-950 mb-6 tracking-tight">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">Bridge</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                        Thoughts, essays, and updates on the future of independent work, technology, and design.
                    </p>
                </div>
            </div>

            <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-16">

                {/* Featured Post */}
                <Link href="#" className="block group">
                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-200 md:flex transition-all hover:shadow-xl">
                        <div className="md:w-1/2 h-64 md:h-auto bg-gradient-to-br from-indigo-600 to-purple-800 relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                        </div>
                        <div className="md:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
                            <div className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-4">Platform Updates</div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6 group-hover:text-purple-600 transition-colors">
                                Introducing Enterprise Magic: The New Standard for Corporate Scaling
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                Today, we are completely rethinking how Fortune 500 companies interface with independent talent pools by launching our compliance and routing engine.
                            </p>
                            <div className="text-purple-700 font-bold">Read the announcement &rarr;</div>
                        </div>
                    </div>
                </Link>

                {/* Post Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                    {[
                        { topic: 'Design', title: 'Why Glassmorphism is Dominating 2026 Dashboards', excerpt: 'An analysis of why reducing cognitive load via transparent UI layers is leading to higher conversion rates.' },
                        { topic: 'Engineering', title: 'Server Components vs Client Rendering: A Definitive Guide', excerpt: 'When to use what in the modern Next.js app router paradigm.' },
                        { topic: 'Founders', title: 'Raising $2M as a Solo Developer', excerpt: 'How one of our top creators leveraged their FreelanceBridge portfolio to raise a seed round from a16z.' },
                        { topic: 'Economics', title: 'The Death of the Traditional Agency Model', excerpt: 'Why massive retainers are being replaced by elastic, on-demand specialized teams.' },
                        { topic: 'Platform', title: 'FreelanceBridge 2.0: Less Noise, More Signal', excerpt: 'A deep dive into our design philosophy behind stripping out icons and emphasizing typography.' },
                        { topic: 'Creators', title: 'How to Build an Irresistible Portfolio', excerpt: 'Stop showing code. Start showing business outcomes. Here is how.' },
                    ].map((post, idx) => (
                        <Link href="#" key={idx} className="block group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-all h-full flex flex-col">
                            <div className="p-10 flex-grow flex flex-col">
                                <div className="text-purple-500 font-bold uppercase tracking-wider text-xs mb-3">{post.topic}</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">{post.title}</h3>
                                <p className="text-gray-600 leading-relaxed flex-grow">{post.excerpt}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="px-8 py-3 bg-white border border-gray-300 text-gray-700 rounded-full font-bold shadow-sm hover:bg-gray-50 transition-colors">
                        Load Older Posts
                    </button>
                </div>
            </div>
        </div>
    );
}
