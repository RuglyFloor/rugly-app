export const dynamic = 'force-dynamic';
import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET() {
  const customers = await prisma.customer.findMany({
    orderBy: { createdAt: 'desc' }
  })
  return NextResponse.json(customers)
}

export async function POST(request: Request) {
  const body = await request.json()
  const customer = await prisma.customer.create({
    data: body
  })
  return NextResponse.json(customer)
}
