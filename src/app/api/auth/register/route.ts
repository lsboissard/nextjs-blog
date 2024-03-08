import bcrypt from 'bcrypt'
import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { name, email, password } = body.data

  if (!name || !email || !password) {
    return new Response('Missing fields', { status: 400 })
  }

  const userExists = await prisma.user.findUnique({
    where: {
      email: email
    }
  })

  if (userExists) {
    return new Response('User already exists', { status: 400 })
  }

  const hashedPassword = await bcrypt.hash(password, 3)

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    }
  })

  return NextResponse.json(user, { status: 201 })
}