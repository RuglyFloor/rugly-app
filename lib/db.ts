import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

const prismaClientSingleton = () => {
  const connectionString = process.env.DATABASE_URL
  
  // If we're in a build environment or the URL is missing, 
  // we return a proxy that won't crash the build process.
  if (!connectionString || connectionString.includes('placeholder')) {
    console.warn('DATABASE_URL is missing. Using a dummy Prisma client for build.')
    return new Proxy({} as PrismaClient, {
      get: (target, prop) => {
        if (prop === '$connect' || prop === '$disconnect') return () => Promise.resolve()
        return () => {
          throw new Error(`Prisma client called during build or without DATABASE_URL. Property: ${String(prop)}`)
        }
      }
    })
  }

  try {
    const pool = new Pool({ connectionString })
    const adapter = new PrismaPg(pool)
    return new PrismaClient({ adapter })
  } catch (error) {
    console.error('Failed to initialize Prisma with adapter:', error)
    // Fallback to a client that might fail, but at least we tried.
    return new PrismaClient()
  }
}

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

export { prisma }

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma
