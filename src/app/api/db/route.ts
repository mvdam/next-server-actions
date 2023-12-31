import { NextRequest, NextResponse } from 'next/server'
import { getContactFormsFromDb } from '@/utils/db/in-memory-db'

export async function GET(_: NextRequest) {
  return NextResponse.json(await getContactFormsFromDb())
}
