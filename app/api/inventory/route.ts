import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET() {
  const items = await prisma.inventoryItem.findMany({
    orderBy: { createdAt: 'desc' }
  })
  return NextResponse.json(items)
}

export async function POST(request: Request) {
  const body = await request.json()
  const item = await prisma.inventoryItem.create({
    data: body
  })
  return NextResponse.json(item)
}
