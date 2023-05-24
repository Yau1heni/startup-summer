import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import { useLoader } from '@/hooks/useLoader'
import '@/styles/nprogress.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { MantineProvider } from '@mantine/core'
import { colorsTheme } from '@/consts/colorsTheme'
import { useAccessToken } from '@/hooks/useAccessToken'

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  useLoader()
  useAccessToken()

  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={colorsTheme}>
        <Component {...pageProps} />
      </MantineProvider>
    </QueryClientProvider>
  )
}
