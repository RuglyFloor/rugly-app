export const dynamic = 'force-dynamic';
import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET() {
  const investments = await prisma.investment.findMany({
    orderBy: { date: 'desc' }
  })
  return NextResponse.json(investments)
}

export async function POST(request: Request) {
  const body = await request.json()
  const investment = await prisma.investment.create({
    data: {
      ...body,
      date: new Date(body.date)
    }
  })
  return NextResponse.json(investment)
}
