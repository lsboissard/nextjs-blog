import { NextAuthOptions } from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client";
import CredentialsProvider from "next-auth/providers/credentials"
import FacebookProvider from "next-auth/providers/facebook"
import GoogleProvider from "next-auth/providers/google"
import NextAuth from "next-auth/next"
import bcrypt from 'bcrypt'

declare global {
  var cachedPrisma: PrismaClient;
}

let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  debug: process.env.NODE_ENV === 'development',
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        name: { label: 'Nome', type: 'text' },
        email: { label: 'E-mail', type: 'email' },
        password: { label: 'Senha', type: 'password' }
      },
      async authorize(credentials, req): Promise<any> {
        //check to if email/password is valid
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        //check to see if user exists
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email
          }
        })
        if (!user) {
          return null
        }

        //check to see if password is valid
        const isPasswordValid = await bcrypt.compare(credentials.password, user.password ?? '')
        if (!isPasswordValid) {
          return null
        }

        //return user object
        return user
      }
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID ?? '',
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET ?? ''
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt'
  }
}


const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }