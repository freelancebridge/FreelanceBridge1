import Link from 'next/link';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function FreelancerProfile({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const mockFreelancers = {
        '1': {
            id: '1',
            name: 'Alice Cooper',
            role: 'FREELANCER',
            title: 'Full Stack Wizard',
            hourlyRate: 85,
            skills: 'React, Node.js, Prisma',
            bio: 'Senior full-stack developer with 5+ years of experience building scalable applications.',
            reviewsReceived: [
                { id: 'r1', rating: 5, comment: 'Amazing work!', job: { title: 'Dashboard App' }, createdAt: new Date() },
                { id: 'r2', rating: 4, comment: 'Good communication.', job: { title: 'Bug fixes' }, createdAt: new Date() }
            ],
            jobsPosted: []
        }
    };

    const freelancer = mockFreelancers[id as keyof typeof mockFreelancers] || {
        id,
        name: 'Mock Freelancer',
        role: 'FREELANCER',
        title: 'Mock Title',
        hourlyRate: 100,
        skills: 'Mock, Skills',
        bio: 'This is a mocked profile because the database is currently disabled. Enjoy this static placeholder text.',
        reviewsReceived: [],
        jobsPosted: []
    };

    if (!freelancer || freelancer.role !== 'FREELANCER') {
        notFound();
    }

    const ratingCount = freelancer.reviewsReceived.length;
    const avgRating = ratingCount > 0
        ? freelancer.reviewsReceived.reduce((sum, r) => sum + r.rating, 0) / ratingCount
        : 5.0;

    const mappedSkills = freelancer.skills ? freelancer.skills.split(',').map(s => s.trim()) : ['Adaptable'];

    // Mock portfolio & stats if they don't exist yet, for aesthetic continuity of the design
    const uiData = {
        title: freelancer.title || 'Independent Creator',
        location: 'Remote Ecosystem',
        time: 'Active',
        rate: freelancer.hourlyRate ? `$${freelancer.hourlyRate.toFixed(2)}/hr` : 'Negotiable',
        totalEarned: 'Rising Star',
        totalJobs: freelancer.reviewsReceived.length.toString(),
        totalHours: 'Highly Available',
        about: freelancer.bio || `Hey there! 👋 I am a ${freelancer.title || 'Creator'} ready to build next-generation projects. I love turning wild ideas into crisp, high-performance interfaces that make users say "wow". Let's build something incredible together!`,
        portfolio: [
            { title: 'Feature Project Alpha', description: 'Overhauled system for a major startup.', image: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&q=80&w=400' },
            { title: 'Project Beta', description: 'Built robust infrastructure from scratch.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400' },
        ],
    };

    return (
        <div className="bg-indigo-50 min-h-screen py-10">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-3/4 space-y-8">
                        <div className="bg-white rounded-3xl shadow-lg border border-purple-100 p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -mr-10 -mt-10"></div>
                            <div className="flex flex-col sm:flex-row gap-6 relative z-10">
                                <div className="relative">
                                    <div className="w-28 h-28 bg-gradient-to-br from-purple-600 to-orange-500 rounded-full flex items-center justify-center text-4xl font-extrabold text-white shadow-xl">
                                        {(freelancer.name || 'W').charAt(0).toUpperCase()}
                                    </div>
                                    <div className="absolute bottom-2 right-2 w-7 h-7 bg-orange-500 border-4 border-white rounded-full flex items-center justify-center">
                                        <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">{freelancer.name}</h1>
                                    <p className="text-gray-500 flex items-center mt-2 font-medium">
                                        {uiData.location} - <span className="text-sm ml-1 text-purple-400">{uiData.time}</span>
                                    </p>
                                    <div className="flex flex-wrap items-center mt-4 gap-4">
                                        {avgRating >= 4.9 && (
                                            <div className="flex items-center text-orange-600 bg-orange-50 px-4 py-1.5 rounded-full text-sm font-bold border border-orange-100">
                                                Top 1% Creator
                                            </div>
                                        )}
                                        <div className="flex items-center text-purple-700 bg-purple-50 px-4 py-1.5 rounded-full text-sm font-bold border border-purple-100">
                                            Verified Pro
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 sm:items-end mt-4 sm:mt-0">
                                    <Link href={`/messages/new?to=${freelancer.id}`} className="bg-gradient-to-r from-purple-700 to-orange-500 hover:from-purple-800 hover:to-orange-600 text-white px-10 py-3 rounded-full font-bold shadow-lg transition-transform transform hover:-translate-y-0.5 text-center w-full sm:w-auto">
                                        Invite to Project
                                    </Link>
                                    <button className="border-2 border-purple-200 text-purple-700 bg-white hover:bg-purple-50 hover:border-purple-300 px-10 py-3 rounded-full font-bold transition-all w-full sm:w-auto">
                                        Save for Later
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl shadow-sm border border-purple-100 p-8 hover:shadow-md transition-shadow">
                            <div className="flex flex-col sm:flex-row justify-between mb-6 border-b border-gray-100 pb-6">
                                <h2 className="text-3xl font-bold text-gray-900">{uiData.title}</h2>
                                <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-500 mt-2 sm:mt-0">{uiData.rate}</p>
                            </div>
                            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap text-lg font-medium">{uiData.about}</p>
                        </div>

                        {freelancer.reviewsReceived.length > 0 && (
                            <div className="bg-white rounded-3xl shadow-sm border border-purple-100 p-8 hover:shadow-md transition-shadow">
                                <h3 className="text-2xl font-extrabold text-gray-900 border-b border-gray-100 pb-4 mb-6 flex items-center">
                                    Track Record
                                </h3>
                                <div className="space-y-8">
                                    {freelancer.reviewsReceived.map((rev, idx) => (
                                        <div key={rev.id} className={idx !== 0 ? "pt-8 border-t border-gray-50" : ""}>
                                            <h4 className="text-xl font-bold text-purple-700 hover:text-orange-500 transition-colors cursor-pointer mb-2">{rev.job.title}</h4>
                                            <div className="flex items-center mb-4 bg-gray-50 w-max px-3 py-1 rounded-full">
                                                <div className="flex text-orange-500 text-sm">
                                                    {'⭐'.repeat(rev.rating)}{'☆'.repeat(5 - rev.rating)}
                                                </div>
                                                <span className="text-gray-900 font-bold ml-2">{rev.rating}.0</span>
                                            </div>
                                            <p className="text-gray-700 italic mb-3 text-lg">"{rev.comment}"</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="bg-white rounded-3xl shadow-sm border border-purple-100 p-8 hover:shadow-md transition-shadow">
                            <h3 className="text-2xl font-extrabold text-gray-900 border-b border-gray-100 pb-4 mb-6 flex items-center">
                                Masterpieces
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {uiData.portfolio.map((item, idx) => (
                                    <div key={idx} className="group cursor-pointer">
                                        <div className="aspect-video w-full rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-orange-50 mb-4 relative shadow-inner group-hover:shadow-lg transition-all">
                                            <div className="w-full h-full flex flex-col items-center justify-center text-purple-400 group-hover:scale-105 transition-transform duration-500">
                                                <span className="font-bold">Project Preview</span>
                                            </div>
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-1">{item.title}</h4>
                                        <p className="text-sm text-gray-500">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl shadow-sm border border-purple-100 p-8 hover:shadow-md transition-shadow">
                            <h3 className="text-2xl font-extrabold text-gray-900 border-b border-gray-100 pb-4 mb-6 flex items-center">
                                Superpowers
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {mappedSkills.map(skill => (
                                    <span key={skill} className="bg-purple-50 hover:bg-orange-50 border border-purple-100 hover:border-orange-200 cursor-pointer text-purple-800 hover:text-orange-700 px-5 py-2.5 rounded-xl font-bold transition-colors">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/4 space-y-6">
                        <div className="bg-gradient-to-br from-purple-900 to-indigo-900 text-white rounded-3xl shadow-lg p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-32 h-32 bg-orange-500 rounded-full mix-blend-multiply opacity-50 blur-2xl"></div>
                            <h3 className="text-xl font-bold mb-8">The Stats</h3>
                            <div className="space-y-6 relative z-10">
                                <div>
                                    <p className="text-3xl font-black text-orange-400">{uiData.totalEarned}</p>
                                    <p className="text-sm font-medium text-purple-200">Total magic made</p>
                                </div>
                                <div className="border-t border-purple-700 pt-6">
                                    <p className="text-3xl font-black">{uiData.totalJobs}</p>
                                    <p className="text-sm font-medium text-purple-200">Gigs crushed</p>
                                </div>
                                <div className="border-t border-purple-700 pt-6">
                                    <p className="text-3xl font-black">{uiData.totalHours}</p>
                                    <p className="text-sm font-medium text-purple-200">Hours clocked</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl shadow-sm border border-purple-100 p-8">
                            <h3 className="text-xl font-extrabold text-gray-900 mb-6">Status</h3>
                            <div className="flex items-start bg-green-50 p-4 rounded-xl border border-green-100">
                                <div>
                                    <p className="text-base font-bold text-gray-900"><span className="text-green-500 mr-2">●</span> Ready to jam!</p>
                                    <p className="text-sm text-gray-600 font-medium mt-1">&gt; 30 hrs/week</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
