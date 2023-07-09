import { SignInApi } from '@/apis/signin'
import NextAuth, { SessionStrategy } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',

      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'Enter email',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Enter Password',
        },
      },

      async authorize(credentials: any, req) {
        const { email, password } = credentials
        try {
          if (email && password) {
            const { data } = await SignInApi.signIn({
              email,
              password,
            })
            return data.data
          }
        } catch (error) {
          return null
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt' as SessionStrategy,
    maxAge: 3 * 24 * 60 * 60,
  },
  jwt: {
    maxAge: 3 * 24 * 60 * 60,
  },
  callbacks: {
    async jwt({ token, user }: any) {
      return { ...token, ...user }
    },
    async session({ session, token, user }: any) {
      console.log(session, user, token, '000')

      if (!session.user.session_expiry) {
        // set expiration to 12 hours for now
        const exp = new Date(
          new Date().getTime() + 12 * 60 * 60 * 1000
        ).toISOString()
        session.user.session_expiry = exp
        session.user.token = token.token
        session.user.typeUser = token.typeUser
      }

      return session
    },
    async redirect({ url, baseUrl }: any) {
      return '/'
    },
  },
  secret: process.env.NEXT_AUTH_URL,

  pages: {
    signIn: '/signin',
  },
}
export default NextAuth(authOptions)
