import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

export const dynamic = 'force-dynamic';

export default async function Dashboard() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('/login');
    }

    const { role, id } = session.user;

    if (role === 'CLIENT') {
        const jobs = await prisma.job.findMany({
            where: { clientId: id },
            orderBy: { createdAt: 'desc' },
            include: {
                _count: {
                    select: { applications: true }
                }
            }
        });

        return (
            <div className="bg-indigo-50 min-h-[calc(100vh-64px)] py-10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Client Dashboard</h1>
                            <p className="text-xl text-gray-600 mt-2">Manage your posted gigs and review proposals.</p>
                        </div>
                        <Link href="/jobs/post" className="px-6 py-3 bg-gradient-to-r from-purple-700 to-orange-500 text-white font-bold rounded-full hover:from-purple-800 hover:to-orange-600 shadow-lg">
                            Post New Gig
                        </Link>
                    </div>

                    <div className="bg-white rounded-3xl shadow-sm border border-purple-100 overflow-hidden">
                        <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                            <h2 className="text-2xl font-bold text-gray-900">Your Posted Gigs</h2>
                        </div>
                        {jobs.length === 0 ? (
                            <div className="p-12 text-center text-gray-500">
                                <p className="mb-4">You haven't posted any gigs yet.</p>
                                <Link href="/jobs/post" className="text-purple-600 font-bold hover:underline">Post your first gig</Link>
                            </div>
                        ) : (
                            <div className="divide-y divide-gray-100">
                                {jobs.map(job => (
                                    <div key={job.id} className="p-6 hover:bg-purple-50/30 transition-colors flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                        <div>
                                            <Link href={`/jobs/${job.id}`} className="text-xl font-bold text-gray-900 hover:text-purple-700 transition-colors">{job.title}</Link>
                                            <div className="flex items-center gap-3 mt-2 text-sm">
                                                <span className={`px-2 py-0.5 rounded font-bold text-xs uppercase ${job.status === 'OPEN' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                                                    {job.status}
                                                </span>
                                                <span className="text-gray-500">
                                                    Posted {formatDistanceToNow(new Date(job.createdAt), { addSuffix: true })}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-6">
                                            <div className="text-center">
                                                <span className="block text-2xl font-black text-purple-600">{job._count.applications}</span>
                                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Proposals</span>
                                            </div>
                                            <Link href={`/jobs/${job.id}`} className="px-4 py-2 border-2 border-purple-200 text-purple-700 hover:border-purple-600 hover:bg-purple-50 rounded-xl font-bold transition-all">
                                                Manage
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    // FREELANCER DASHBOARD
    const applications = await prisma.application.findMany({
        where: { freelancerId: id },
        orderBy: { createdAt: 'desc' },
        include: {
            job: {
                include: { client: true }
            }
        }
    });

    const activeApplications = applications.filter(app => app.status === 'PENDING' || app.status === 'ACCEPTED');

    return (
        <div className="bg-indigo-50 min-h-[calc(100vh-64px)] py-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Freelancer Dashboard</h1>
                        <p className="text-xl text-gray-600 mt-2">Track your proposals and active gigs.</p>
                    </div>
                    <Link href="/jobs" className="px-6 py-3 bg-gradient-to-r from-purple-700 to-orange-500 text-white font-bold rounded-full hover:from-purple-800 hover:to-orange-600 shadow-lg">
                        Find More Gigs
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Stats */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white rounded-3xl shadow-sm border border-purple-100 p-6 flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 font-medium text-sm">Active Proposals</p>
                                <p className="text-3xl font-black text-gray-900 mt-1">{activeApplications.length}</p>
                            </div>
                            <div className="w-12 h-12 bg-orange-100 text-orange-600 flex items-center justify-center rounded-full text-xl">
                                📝
                            </div>
                        </div>
                        <div className="bg-white rounded-3xl shadow-sm border border-purple-100 p-6 flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 font-medium text-sm">Total Proposals Sent</p>
                                <p className="text-3xl font-black text-gray-900 mt-1">{applications.length}</p>
                            </div>
                            <div className="w-12 h-12 bg-purple-100 text-purple-600 flex items-center justify-center rounded-full text-xl">
                                🚀
                            </div>
                        </div>
                    </div>

                    {/* Applications List */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-3xl shadow-sm border border-purple-100 overflow-hidden">
                            <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                                <h2 className="text-2xl font-bold text-gray-900">Your Proposals</h2>
                            </div>
                            
                            {applications.length === 0 ? (
                                <div className="p-12 text-center text-gray-500">
                                    <p className="mb-4">You haven't applied to any gigs yet.</p>
                                    <Link href="/jobs" className="text-purple-600 font-bold hover:underline">Start browsing gigs</Link>
                                </div>
                            ) : (
                                <div className="divide-y divide-gray-100">
                                    {applications.map(app => (
                                        <div key={app.id} className="p-6 hover:bg-purple-50/30 transition-colors flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                            <div>
                                                <Link href={`/jobs/${app.job.id}`} className="text-lg font-bold text-gray-900 hover:text-purple-700 transition-colors">{app.job.title}</Link>
                                                <p className="text-gray-500 text-sm mt-1">
                                                    Client: <span className="font-bold">{app.job.client.companyName || app.job.client.name}</span>
                                                </p>
                                            </div>
                                            <div className="flex flex-col items-end gap-2">
                                                <span className="font-black text-purple-700 bg-purple-50 px-3 py-1 rounded-lg border border-purple-100">${app.bidAmount}</span>
                                                <span className={`px-2 py-0.5 rounded font-bold text-[10px] uppercase tracking-wider ${
                                                    app.status === 'PENDING' ? 'bg-orange-100 text-orange-700' :
                                                    app.status === 'ACCEPTED' ? 'bg-green-100 text-green-700' :
                                                    'bg-red-100 text-red-700'
                                                }`}>
                                                    {app.status}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
