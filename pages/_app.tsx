import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/base/Layout'
import ContextRootProvider from '../store'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <Layout>
        <ContextRootProvider>
          <Component {...pageProps} />
        </ContextRootProvider>
      </Layout>
    </SessionProvider>
  )
}

export default MyApp
