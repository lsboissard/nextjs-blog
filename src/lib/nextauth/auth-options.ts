import { NextAuthOptions } from "next-auth"
import FacebookProvider from "next-auth/providers/facebook"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID ?? '',
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET ?? ''
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
    })
  ],
}

