import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/base/Layout'
import ContextRootProvider from '../store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ContextRootProvider>
        <Component {...pageProps} />
      </ContextRootProvider>
    </Layout>
  )
}

export default MyApp
