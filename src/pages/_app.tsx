import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useEffect, useState } from 'react'

import AppProvider from '@/contexts/appprovider'
import StyleComponentProvider from '@/lib/StyleComponentProvider'
import '@/styles/globals.css'
import { dappConfig } from '@/web3/connector'
import { DAppProvider } from '@usedapp/core'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'swiper/css'
import { SessionProvider, useSession } from 'next-auth/react'
import setAuthToken from '@/apis'
import { SWRConfig } from 'swr'
export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)
  const router = useRouter()

  useEffect(() => {
    NProgress.configure({ showSpinner: false })
    const handleStart = (url: string) => {
      NProgress.start()
    }

    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  const [showing, setShowing] = useState(false)

  useEffect(() => {
    setShowing(true)
  }, [])

  if (!showing) {
    return null
  }

  if (typeof window === 'undefined') {
    return <></>
  }

  return getLayout(
    <SessionProvider session={pageProps?.session}>
      <SWRConfig value={{ provider: () => new Map() }}>
        <DAppProvider config={dappConfig}>
          <ToastContainer />
          <StyleComponentProvider>
            <AppProvider>
              <Auth>
                <Component {...pageProps} />
              </Auth>
            </AppProvider>
          </StyleComponentProvider>
        </DAppProvider>
      </SWRConfig>
    </SessionProvider>
  )
}

function Auth({ children }: any) {
  const { data } = useSession()
  const accessToken = (data as any)?.user?.token
  if (accessToken) {
    setAuthToken(accessToken)
  }

  return children
}
