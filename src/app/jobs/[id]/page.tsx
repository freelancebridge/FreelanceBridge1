import Link from 'next/link';
import { notFound } from 'next/navigation';
import { formatDistanceToNow } from 'date-fns';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import ApplicationForm from '@/components/ApplicationForm';

export const dynamic = 'force-dynamic';

export default async function JobProfile({ params }: { params: { id: string } }) {
    const { id } = params;

    const job = await (async () => {
        try {
            return await prisma.job.findUnique({
                where: { id },
                include: {
                    client: true,
                    applications: {
                        include: { freelancer: true },
                        orderBy: { createdAt: 'desc' }
                    },
                    _count: {
                        select: { applications: true }
                    }
                }
            });
        } catch (error) {
            console.error('Database connection error in JobProfile:', error);
            return null;
        }
    })();

    if (!job) {
        notFound();
    }

    const clientName = job.client.companyName || job.client.name || 'Anonymous Client';
    const postedTime = formatDistanceToNow(new Date(job.createdAt), { addSuffix: true });

    // Simulate skills parsing if category holds the main tag and description has others
    const skills = [job.category];

    const session = await getServerSession(authOptions);
    const isOwner = session?.user?.id === job.clientId;
    const isFreelancer = session?.user?.role === 'FREELANCER';
    const hasApplied = isFreelancer ? job.applications.some(app => app.freelancerId === session?.user?.id) : false;

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
                        
                        {!isOwner && isFreelancer && !hasApplied && (
                            <ApplicationForm jobId={job.id} />
                        )}
                        {!isOwner && isFreelancer && hasApplied && (
                            <div className="w-full sm:w-auto bg-green-50 text-green-700 px-8 py-3 rounded-full font-bold shadow-sm text-center border border-green-200">
                                You have applied for this Gig
                            </div>
                        )}
                        {!session && (
                            <Link href="/login" className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-3 rounded-full font-bold shadow-sm transition-all text-center">
                                Login to Apply
                            </Link>
                        )}
                    </div>

                </div>

                {isOwner && job.applications.length > 0 && (
                    <div className="mt-8 mb-12">
                        <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Applications ({job.applications.length})</h2>
                        <div className="space-y-4">
                            {job.applications.map(app => (
                                <div key={app.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6">
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="font-bold text-lg text-gray-900">{app.freelancer.name} <span className="text-gray-500 text-sm font-normal">({app.freelancer.title})</span></h3>
                                            <span className="font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-full text-sm border border-purple-100">${app.bidAmount}</span>
                                        </div>
                                        <p className="text-gray-700 whitespace-pre-wrap">{app.coverLetter}</p>
                                    </div>
                                    <div className="flex flex-col gap-2 justify-center">
                                        <Link href={`/freelancers/${app.freelancerId}`} className="text-center bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-xl font-bold transition-colors text-sm">View Profile</Link>
                                        <Link href={`/messages/${app.freelancerId}`} className="text-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl font-bold transition-colors text-sm">Message</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

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
