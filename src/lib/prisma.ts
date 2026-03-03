import { PrismaClient } from '@prisma/client'
import { PrismaLibSql } from '@prisma/adapter-libsql'

const adapter = new PrismaLibSql({
    url: process.env.DATABASE_URL || 'file:./dev.db',
})

const globalWithPrisma = global as typeof globalThis & { prisma: PrismaClient }
export const prisma = globalWithPrisma.prisma || new PrismaClient({ adapter })

if (process.env.NODE_ENV !== 'production') globalWithPrisma.prisma = prisma
