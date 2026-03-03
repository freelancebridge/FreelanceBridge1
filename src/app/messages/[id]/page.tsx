"use client";

import { useSession } from "next-auth/react";
import useSWR from "swr";
import { useState, useRef, useEffect, use } from "react";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { useRouter } from "next/navigation";

const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function ChatRoom({ params }: { params: Promise<{ id: string }> }) {
    const { id: partnerId } = use(params);
    const { data: session } = useSession();
    const router = useRouter();

    const [content, setContent] = useState('');
    const [sending, setSending] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const { data: messages, error, mutate } = useSWR(
        session ? `/api/messages?partnerId=${partnerId}` : null,
        fetcher,
        { refreshInterval: 3000 }
    );

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!content.trim() || sending) return;

        setSending(true);
        const tempMsg = content;
        setContent('');

        // Optimistic UI update
        mutate(
            (current: any) => [...(current || []), {
                id: Math.random().toString(),
                senderId: session?.user?.id,
                receiverId: partnerId,
                content: tempMsg,
                createdAt: new Date().toISOString()
            }],
            false
        );

        try {
            await fetch('/api/messages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ receiverId: partnerId, content: tempMsg })
            });
            mutate();
        } catch (error) {
            console.error(error);
            setContent(tempMsg); // restore on failure
        } finally {
            setSending(false);
        }
    };

    if (!session) {
        return <div className="p-20 text-center font-bold">Please log in to view messages.</div>;
    }

    if (error) return <div className="p-20 text-center text-red-500 font-bold">Failed to load chat.</div>;

    return (
        <div className="bg-indigo-50 min-h-[calc(100vh-64px)] flex flex-col">
            {/* Chat header */}
            <div className="bg-white border-b border-purple-100 p-4 shadow-sm z-10 sticky top-[64px] flex items-center gap-4">
                <button onClick={() => router.back()} className="text-gray-500 hover:text-purple-600 p-2 rounded-full hover:bg-purple-50 transition-colors">
                    ← Back
                </button>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center font-bold text-white shadow-sm">
                        {"Partner".charAt(0)}
                    </div>
                    <div>
                        <h2 className="font-bold text-gray-900 leading-tight">Conversation</h2>
                        <span className="text-xs text-green-500 font-bold">● Active</span>
                    </div>
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 sm:px-6 lg:px-8 space-y-4">
                {(!messages || messages.length === 0) ? (
                    <div className="text-center text-gray-500 py-10 font-medium">
                        No messages yet. Send a message to start the conversation!
                    </div>
                ) : (
                    messages.map((msg: any) => {
                        const isMe = msg.senderId === session.user.id;
                        return (
                            <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[75%] rounded-2xl p-4 shadow-sm ${isMe
                                        ? 'bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-tr-sm'
                                        : 'bg-white border border-purple-100 text-gray-900 rounded-tl-sm'
                                    }`}>
                                    <p className="whitespace-pre-wrap">{msg.content}</p>
                                    <span className={`text-[10px] mt-2 block font-bold ${isMe ? 'text-purple-200' : 'text-gray-400'}`}>
                                        {formatDistanceToNow(new Date(msg.createdAt), { addSuffix: true })}
                                    </span>
                                </div>
                            </div>
                        );
                    })
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="bg-white border-t border-purple-100 p-4 sticky bottom-0 z-10">
                <div className="max-w-4xl mx-auto">
                    <form onSubmit={handleSend} className="flex gap-2 relative">
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault();
                                    handleSend(e);
                                }
                            }}
                            placeholder="Type a message..."
                            className="w-full border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 text-gray-900 resize-none overflow-hidden h-14 bg-gray-50 shadow-inner"
                            rows={1}
                        />
                        <button
                            type="submit"
                            disabled={!content.trim() || sending}
                            className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white w-14 h-14 rounded-2xl flex items-center justify-center font-bold shadow-md transition-colors flex-shrink-0"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
