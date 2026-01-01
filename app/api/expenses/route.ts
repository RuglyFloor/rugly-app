export const dynamic = 'force-dynamic';
import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET() {
  const expenses = await prisma.expense.findMany({
    orderBy: { date: 'desc' }
  })
  return NextResponse.json(expenses)
}

export async function POST(request: Request) {
  const body = await request.json()
  const expense = await prisma.expense.create({
    data: {
      ...body,
      date: new Date(body.date)
    }
  })
  return NextResponse.json(expense)
}
