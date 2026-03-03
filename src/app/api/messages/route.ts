import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { searchParams } = new URL(request.url);
        const partnerId = searchParams.get('partnerId');

        if (partnerId) {
            // Fetch messages between logged in user and partner
            const messages = await prisma.message.findMany({
                where: {
                    OR: [
                        { senderId: session.user.id, receiverId: partnerId },
                        { senderId: partnerId, receiverId: session.user.id }
                    ]
                },
                orderBy: { createdAt: 'asc' }
            });

            return NextResponse.json(messages);
        } else {
            // Fetch list of unique conversations
            const messages = await prisma.message.findMany({
                where: {
                    OR: [
                        { senderId: session.user.id },
                        { receiverId: session.user.id }
                    ]
                },
                orderBy: { createdAt: 'desc' },
                include: {
                    sender: { select: { id: true, name: true, image: true, role: true } },
                    receiver: { select: { id: true, name: true, image: true, role: true } }
                }
            });

            // Group by partner
            const conversationsMap = new Map();
            messages.forEach(msg => {
                const partner = msg.senderId === session.user.id ? msg.receiver : msg.sender;
                if (!conversationsMap.has(partner.id)) {
                    conversationsMap.set(partner.id, {
                        partner,
                        lastMessage: msg,
                        unreadCount: msg.receiverId === session.user.id && !msg.isRead ? 1 : 0
                    });
                } else {
                    const conv = conversationsMap.get(partner.id);
                    if (msg.receiverId === session.user.id && !msg.isRead) {
                        conv.unreadCount += 1;
                    }
                }
            });

            return NextResponse.json(Array.from(conversationsMap.values()));
        }

    } catch (error) {
        console.error("Messages GET error:", error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const body = await request.json();
        const { receiverId, content } = body;

        if (!receiverId || !content) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const message = await prisma.message.create({
            data: {
                senderId: session.user.id,
                receiverId,
                content
            }
        });

        // Create a notification for the receiver
        await prisma.notification.create({
            data: {
                userId: receiverId,
                type: 'MESSAGE',
                content: `New message from ${session.user.name}`,
                linkUrl: `/messages/${session.user.id}`
            }
        });

        // NOTE: In a real implementation with Pusher, we would broadcast here:
        // pusherServer.trigger(`chat-${receiverId}`, 'new-message', message);

        return NextResponse.json(message, { status: 201 });
    } catch (error) {
        console.error("Messages POST error:", error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
