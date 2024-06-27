import { PrismaClient } from '@prisma/client'
console.log('Inside db.ts')
const prismaClientSingleton = () => {
  console.log("Prisma client instantiated");
  return new PrismaClient()
}

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma