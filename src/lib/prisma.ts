import { PrismaClient } from '@prisma/client'

// Ստեղծում ենք Prisma Client-ի մեկ օրինակ (Singleton), որպեսզի 
// տվյալների բազայի հետ կապերը չափից շատ չլինեն:
const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

// Օգտագործում ենք global ստեկը, որպեսզի Next.js-ի վերագործարկման ժամանակ կապը չկորչի
const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

// Production միջավայրում սա կլինի հիմնական կապը
if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma
