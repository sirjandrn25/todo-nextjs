import CredentialsProvider from 'next-auth/providers/credentials'
import NextAuth from 'next-auth/next'
import { userInfo } from 'os'

type tokenObjType = {
  accessToken: string
  refreshToken: string
  expires: string
}

// const refreshAccessToken = async (tokenObj: tokenObjType) => {
//   const response = fetch('http:')
// }

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        // email: { label: 'Email Address', type: 'email', placeholder: 'enter your mail address' },
        // password: { label: 'Password', type: 'password', placeholder: 'enter your password' },
      },
      authorize: async (credentails: any) => {
        const response = await fetch('http://localhost:8000/api/v1/user_login/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: credentails.email, password: credentails.password }),
        })

        const data = await response.json()
        // console.log('authorization section')

        if (credentails?.email === 'user@example.com' && credentails?.password === 'dharan123') {
          return {
            access: data.access,
            refresh: data.refresh,
            user: data.user,
            expires: new Date(Date.now() + 60 * 5 * 1000),
          }
        }
        return null
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      //   console.log({ token, user })
      //   console.log('jwt token')
      if (user) {
        token = user
      }
      return token
    },
    session: ({ session, token }) => {
      if (token) {
        session.accessToken = token.access
        session.refreshToken = token.refresh
        session.user = token.user
        session.expires = token.expires
      }
      //   console.log({ session, token })
      return session
    },
  },
  secret: 'test',
  jwt: {
    secret: 'test',
    encryption: false,
  },
})
