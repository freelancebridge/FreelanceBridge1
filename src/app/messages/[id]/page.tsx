import prisma from '@/lib/prisma';
import ChatRoomClient from '@/components/ChatRoomClient';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function ChatRoom({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    
    const partner = await prisma.user.findUnique({
        where: { id }
    });

    if (!partner) {
        notFound();
    }

    return <ChatRoomClient partnerId={id} partnerName={partner.name} />;
}
