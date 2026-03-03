import Link from 'next/link';
import { notFound } from 'next/navigation';
import { formatDistanceToNow } from 'date-fns';

export const dynamic = 'force-dynamic';

export default async function JobProfile({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const mockJobs = {
        'job-1': {
            id: 'job-1',
            title: 'Build a Next.js MVP',
            status: 'OPEN',
            description: 'Looking for an experienced Next.js developer to build a MVP for our startup. You will be working closely with the founding team to iterate rapidly based on user feedback. The stack is Next.js, Tailwind, Prisma, and PostgreSQL.',
            category: 'Web Development',
            jobType: 'FIXED',
            budget: 5000,
            createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
            client: { id: 'client-1', name: 'Acme Corp', companyName: 'Acme Corporation', image: null, createdAt: new Date('2022-01-01') },
            _count: { applications: 5 }
        },
        'job-2': {
            id: 'job-2',
            title: 'Design Logo and Branding',
            status: 'OPEN',
            description: 'Need a creative designer to establish our brand identity and design a modern logo. We are a crypto startup and want something sleek, neon, and futuristic.',
            category: 'Design',
            jobType: 'HOURLY',
            budget: 50,
            createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5),
            client: { id: 'client-2', name: 'Tech Innovations', companyName: '', image: null, createdAt: new Date('2023-05-15') },
            _count: { applications: 12 }
        },
        'job-3': {
            id: 'job-3',
            title: 'Smart Contract Audit',
            status: 'OPEN',
            description: 'We need a security expert to audit our Solidity smart contracts before mainnet launch. Experience with DeFi protocols is a must.',
            category: 'Blockchain',
            jobType: 'FIXED',
            budget: 10000,
            createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5),
            client: { id: 'client-3', name: 'DeFi protocol', companyName: 'DeFi protocol', image: null, createdAt: new Date('2021-11-20') },
            _count: { applications: 2 }
        }
    };

    const job = mockJobs[id as keyof typeof mockJobs] || {
        id,
        title: 'Mock Job Title',
        status: 'OPEN',
        description: 'This is a mock job description because the database is currently disabled. Please enjoy this static placeholder text while we perform maintenance.',
        category: 'Miscellaneous',
        jobType: 'FIXED',
        budget: 1000,
        createdAt: new Date(),
        client: { id: 'client-mock', name: 'Mock Client', companyName: 'Mock Company', image: null, createdAt: new Date() },
        _count: { applications: 0 }
    };

    if (!job) {
        notFound();
    }

    const clientName = job.client.companyName || job.client.name || 'Anonymous Client';
    const postedTime = formatDistanceToNow(new Date(job.createdAt), { addSuffix: true });

    // Simulate skills parsing if category holds the main tag and description has others
    const skills = [job.category];

    return (
        <div className="bg-indigo-50 min-h-screen py-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="bg-white rounded-3xl shadow-lg border border-purple-100 p-8 md:p-12 relative overflow-hidden mb-8">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -mr-20 -mt-20 pointer-events-none"></div>

                    <div className="flex flex-col md:flex-row justify-between items-start gap-6 relative z-10 mb-8 border-b border-gray-100 pb-8">
                        <div>
                            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">{job.title}</h1>
                            <div className="flex flex-wrap items-center text-sm text-gray-600 gap-4 font-medium">
                                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">{job.category}</span>
                                <span>Posted {postedTime}</span>
                                <span className="flex items-center text-gray-500">
                                    <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                    {job.status}
                                </span>
                            </div>
                        </div>
                        <div className="text-left md:text-right w-full md:w-auto">
                            <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-500">
                                {job.jobType === 'FIXED' ? `$${job.budget}` : `$${job.budget}/hr`}
                            </p>
                            <p className="text-gray-500 font-medium text-sm mt-1">{job.jobType} Price</p>
                        </div>
                    </div>

                    <div className="prose prose-lg prose-purple max-w-none mb-10 text-gray-700">
                        <p className="whitespace-pre-wrap leading-relaxed">
                            {job.description}
                        </p>
                    </div>

                    <div className="mb-10">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Required Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.map(skill => (
                                <span key={skill} className="bg-purple-50 text-purple-700 border border-purple-100 px-4 py-1.5 rounded-lg text-sm font-bold">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-gray-50 p-6 rounded-2xl border border-gray-100 mt-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-xl font-bold text-white">
                                {clientName.charAt(0).toUpperCase()}
                            </div>
                            <div>
                                <p className="font-bold text-gray-900">{clientName}</p>
                                <p className="text-sm text-gray-500">Verified Client • Member since {new Date(job.client.createdAt).getFullYear()}</p>
                            </div>
                        </div>
                        <Link href={`/messages/new?jobId=${job.id}&to=${job.client.id}`} className="w-full sm:w-auto bg-gradient-to-r from-purple-700 to-orange-500 hover:from-purple-800 hover:to-orange-600 text-white px-8 py-3 rounded-full font-bold shadow-md hover:shadow-lg transition-all text-center">
                            Apply for Gig
                        </Link>
                    </div>

                </div>

                <div className="flex justify-between items-center px-4">
                    <Link href="/jobs" className="text-purple-600 font-bold hover:text-purple-800 transition-colors">
                        ← Back to Gigs
                    </Link>
                    <span className="text-sm text-gray-500 font-medium">{job._count.applications} proposals so far</span>
                </div>

            </div>
        </div>
    );
}
