"use client";

import { useSession } from "next-auth/react";
import useSWR from "swr";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function MessagesInbox() {
    const { data: session } = useSession();
    const { data: conversations, error, isLoading } = useSWR(session ? '/api/messages' : null, fetcher, { refreshInterval: 5000 });

    if (!session) {
        return <div className="p-20 text-center font-bold text-xl">Please log in to view your messages.</div>;
    }

    if (isLoading) return <div className="p-20 text-center text-purple-600 animate-pulse font-bold">Loading your inbox...</div>;
    if (error) return <div className="p-20 text-center text-red-500 font-bold">Failed to load messages.</div>;

    return (
        <div className="bg-indigo-50 min-h-[calc(100vh-64px)] py-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-8">Your Direct Messages</h1>

                {!conversations || conversations.length === 0 ? (
                    <div className="bg-white rounded-3xl shadow-sm border border-purple-100 p-12 text-center">
                        <div className="text-6xl mb-4">📫</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">No messages yet</h3>
                        <p className="text-gray-500 font-medium">When you connect with a wizard or client, your chats will appear here.</p>
                        <Link href={session.user.role === 'CLIENT' ? "/freelancers" : "/jobs"} className="inline-block mt-6 px-8 py-3 bg-purple-100 text-purple-700 font-bold rounded-full hover:bg-purple-200 transition-colors">
                            Find Connections
                        </Link>
                    </div>
                ) : (
                    <div className="bg-white rounded-3xl shadow-sm border border-purple-100 overflow-hidden">
                        {conversations.map((conv: any, idx: number) => (
                            <Link href={`/messages/${conv.partner.id}`} key={conv.partner.id} className={`block p-6 hover:bg-purple-50 transition-colors ${idx !== 0 ? 'border-t border-purple-50' : ''}`}>
                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-sm">
                                            {conv.partner.name.charAt(0).toUpperCase()}
                                        </div>
                                        {conv.unreadCount > 0 && (
                                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 border-2 border-white rounded-full flex items-center justify-center text-[10px] font-bold text-white">
                                                {conv.unreadCount}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-baseline mb-1">
                                            <h3 className="text-lg font-bold text-gray-900 truncate">{conv.partner.name}</h3>
                                            <span className="text-xs font-medium text-gray-400 whitespace-nowrap ml-2">
                                                {formatDistanceToNow(new Date(conv.lastMessage.createdAt), { addSuffix: true })}
                                            </span>
                                        </div>
                                        <p className={`text-sm truncate ${conv.unreadCount > 0 ? 'text-gray-900 font-bold' : 'text-gray-500 font-medium'}`}>
                                            {conv.lastMessage.senderId === session.user.id ? 'You: ' : ''}{conv.lastMessage.content}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
