import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { redirect } from "next/navigation";

export const dynamic = 'force-dynamic';

export default async function NotificationsPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('/login');
    }

    const notifications = await prisma.notification.findMany({
        where: { userId: session.user.id },
        orderBy: { createdAt: 'desc' }
    });

    // Mark all as read
    await prisma.notification.updateMany({
        where: {
            userId: session.user.id,
            isRead: false
        },
        data: {
            isRead: true
        }
    });

    return (
        <div className="bg-gray-50 min-h-[calc(100vh-64px)] py-10">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-6">
                    <div>
                        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Your Notifications</h1>
                        <p className="text-gray-600 mt-2 font-medium">Stay updated on your gigs and messages.</p>
                    </div>
                </div>

                <div className="bg-white rounded-3xl shadow-sm border border-purple-100 overflow-hidden">
                    {notifications.length === 0 ? (
                        <div className="p-12 text-center text-gray-500">
                            <p className="font-bold text-lg mb-2">Caught up!</p>
                            <p>You have no notifications right now.</p>
                        </div>
                    ) : (
                        <div className="divide-y divide-gray-50">
                            {notifications.map(notif => (
                                <Link href={notif.linkUrl || '#'} key={notif.id} className={`block p-6 hover:bg-purple-50 transition-colors ${!notif.isRead ? 'bg-purple-50/50' : ''}`}>
                                    <div className="flex items-start gap-4">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-xl shadow-sm ${
                                            notif.type === 'MESSAGE' ? 'bg-gradient-to-br from-blue-400 to-indigo-500 text-white' :
                                            notif.type === 'APPLICATION' ? 'bg-gradient-to-br from-green-400 to-emerald-500 text-white' :
                                            'bg-gradient-to-br from-purple-400 to-orange-500 text-white'
                                        }`}>
                                            {notif.type === 'MESSAGE' ? '💬' : notif.type === 'APPLICATION' ? '📝' : '🔔'}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className={`text-base leading-relaxed ${!notif.isRead ? 'font-bold text-gray-900' : 'font-medium text-gray-800'}`}>
                                                {notif.content}
                                            </p>
                                            <p className="text-sm font-bold text-gray-400 mt-2 tracking-wide uppercase">
                                                {formatDistanceToNow(new Date(notif.createdAt), { addSuffix: true })}
                                            </p>
                                        </div>
                                        {!notif.isRead && (
                                            <div className="w-3 h-3 bg-orange-500 rounded-full mt-2"></div>
                                        )}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
