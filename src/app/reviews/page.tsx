import Link from 'next/link';

export default function CommunityReviews() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="bg-purple-950 py-24 px-4 relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center relative z-10 text-white">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                        Community <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">Reviews</span>
                    </h1>
                    <p className="text-2xl text-purple-200 max-w-2xl mx-auto font-light leading-relaxed mb-8">
                        Unfiltered, verified feedback from the builders and creators that make our ecosystem thrive.
                    </p>
                    <div className="flex justify-center items-center gap-2 text-2xl font-bold bg-white/10 w-fit mx-auto px-6 py-3 rounded-full backdrop-blur-md border border-white/20">
                        <span className="text-orange-400">★ 4.9/5.0</span>
                        <span className="text-purple-200 text-lg font-normal ml-2">from 15,200+ reviews</span>
                    </div>
                </div>
            </div>

            <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { name: 'David Chen', role: 'Startup Founder', review: 'I found an incredible iOS developer in < 24 hours. The communication was flawless, the escrow system made me feel safe, and the final product exceeded expectations.', rating: '5.0', date: '2 days ago' },
                        { name: 'Elena R.', role: 'Brand Designer', review: 'FreelanceBridge completely changed my career trajectory. Direct Collabs mean I am no longer competing on price, but on quality and fit. The clients here are top-tier.', rating: '5.0', date: '1 week ago' },
                        { name: 'Mike T.', role: 'Agency Owner', review: 'We use the Enterprise tools to seamlessly scale up our dev capacity when we sign large contracts. The quality of talent is unmatched compared to legacy platforms.', rating: '4.9', date: '2 weeks ago' },
                        { name: 'Sarah Jenkins', role: 'Full Stack Dev', review: 'The lack of bidding wars is the best feature. Clients reach out to ME based on my portfolio. It flips the entire dynamic of freelancing to be much more respectful.', rating: '5.0', date: '3 weeks ago' },
                        { name: 'Alex Wong', role: 'Product Manager', review: 'Clean UI, great talent, fast onboarding. Only reason it is 4.8 is because I wish the built-in video calling had screen annotation. Otherwise, perfect.', rating: '4.8', date: '1 month ago' },
                        { name: 'Jessica M.', role: 'Copywriter', review: 'The caliber of clients on this platform is simply different. They understand value, they appreciate good work, and they pay on time via the milestone system.', rating: '5.0', date: '1 month ago' },
                    ].map((review, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <div className="font-bold text-gray-900 text-lg">{review.name}</div>
                                    <div className="text-sm text-gray-500">{review.role}</div>
                                </div>
                                <div className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                                    <span>★</span> {review.rating}
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed italic flex-grow">"{review.review}"</p>
                            <div className="mt-6 text-sm text-gray-400 font-semibold">{review.date}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
