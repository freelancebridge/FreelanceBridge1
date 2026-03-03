import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    try {
        const { name, email, password, role } = await request.json();

        if (!name || !email || !password || !role) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        if (role !== 'CLIENT' && role !== 'FREELANCER') {
            return NextResponse.json({ error: 'Invalid role' }, { status: 400 });
        }

        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return NextResponse.json({ error: 'Email already exists' }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role,
            },
        });

        return NextResponse.json({
            message: 'User created successfully',
            user: { id: user.id, name: user.name, email: user.email, role: user.role }
        }, { status: 201 });
    } catch (error: any) {
        console.error('--- REGISTRATION ERROR DETAILS ---');
        console.error('Type:', typeof error);
        console.error('Name:', error?.name);
        console.error('Message:', error?.message);
        console.error('Code:', error?.code);
        console.error('Meta:', error?.meta);
        console.error('Stack:', error?.stack);
        console.error('----------------------------------');
        return NextResponse.json({ error: 'Internal server error', details: error?.message || String(error) }, { status: 500 });
    }
}
