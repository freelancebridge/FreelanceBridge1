import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== 'ADMIN') {
        // Technically this should be a 403 or redirect, but for scaffolding we'll show a message
        return (
            <div className="min-h-screen bg-indigo-50 flex items-center justify-center p-4">
                <div className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-lg w-full">
                    <div className="text-6xl mb-4">⛔</div>
                    <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Access Denied</h1>
                    <p className="text-gray-500 font-medium mb-8">This area is restricted to FreelanceBridge administrators only.</p>
                </div>
            </div>
        );
    }

    // Server Actions for User Management
    async function toggleBanUser(formData: FormData) {
        'use server'
        const userId = formData.get('userId') as string;
        const currentBanStatus = formData.get('isBanned') === 'true';

        await prisma.user.update({
            where: { id: userId },
            data: { isBanned: !currentBanStatus }
        });

        revalidatePath('/admin');
    }

    // Aggregate metrics
    const [
        totalUsers,
        totalJobs,
        activeJobs,
        payments
    ] = await Promise.all([
        prisma.user.count(),
        prisma.job.count(),
        prisma.job.count({ where: { status: 'IN_PROGRESS' } }),
        prisma.payment.aggregate({
            _sum: { amount: true },
            where: { status: 'RELEASED' }
        })
    ]);

    const totalVolume = payments._sum.amount || 0;

    const allUsers = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            isBanned: true,
            createdAt: true
        },
        orderBy: { createdAt: 'desc' }
    });

    return (
        <div className="bg-indigo-50 min-h-[calc(100vh-64px)] py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Admin Command Center</h1>
                        <p className="text-gray-500 font-medium mt-1">Platform overview and user management.</p>
                    </div>
                    <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-bold text-sm">
                        Superadmin Mode
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    <div className="bg-white rounded-3xl p-6 shadow-sm border border-purple-100">
                        <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Total Users</p>
                        <p className="text-4xl font-black text-gray-900">{totalUsers}</p>
                    </div>
                    <div className="bg-white rounded-3xl p-6 shadow-sm border border-purple-100">
                        <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Total Gigs</p>
                        <p className="text-4xl font-black text-gray-900">{totalJobs}</p>
                    </div>
                    <div className="bg-white rounded-3xl p-6 shadow-sm border border-purple-100">
                        <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Active Gigs</p>
                        <p className="text-4xl font-black text-gray-900">{activeJobs}</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-3xl p-6 shadow-lg text-white">
                        <p className="text-sm font-bold text-purple-200 uppercase tracking-widest mb-2">Platform Volume</p>
                        <p className="text-4xl font-black text-orange-400">${totalVolume.toLocaleString()}</p>
                    </div>
                </div>

                <div className="bg-white rounded-3xl shadow-sm border border-purple-100 overflow-hidden">
                    <div className="p-6 border-b border-gray-100">
                        <h2 className="text-xl font-bold text-gray-900">User Management</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 text-gray-500 text-sm font-bold uppercase tracking-wider">
                                <tr>
                                    <th className="px-6 py-4">Name / Email</th>
                                    <th className="px-6 py-4">Role</th>
                                    <th className="px-6 py-4">Joined</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {allUsers.map(user => (
                                    <tr key={user.id} className="hover:bg-purple-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <p className="font-bold text-gray-900">{user.name || 'Anonymous'}</p>
                                            <p className="text-sm text-gray-500">{user.email}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="bg-purple-100 text-purple-800 text-xs font-bold px-3 py-1 rounded-full uppercase">
                                                {user.role}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600 font-medium">
                                            {new Date(user.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4">
                                            {user.isBanned ? (
                                                <span className="text-red-600 font-bold flex items-center text-sm"><span className="w-2 h-2 rounded-full bg-red-600 mr-2"></span>Banned</span>
                                            ) : (
                                                <span className="text-green-600 font-bold flex items-center text-sm"><span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>Active</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            {user.id !== session.user.id && (
                                                <form action={toggleBanUser}>
                                                    <input type="hidden" name="userId" value={user.id} />
                                                    <input type="hidden" name="isBanned" value={user.isBanned.toString()} />
                                                    <button type="submit" className={`text-sm font-bold px-4 py-2 rounded-xl transition-colors ${user.isBanned ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' : 'bg-red-50 text-red-600 hover:bg-red-100'}`}>
                                                        {user.isBanned ? 'Unban' : 'Suspend'}
                                                    </button>
                                                </form>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
}
