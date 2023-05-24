import Head from 'next/head'
import { getLayout } from '@/components/layout/layout'
import { NextPageWithLayout } from '@/pages/_app'

const Home: NextPageWithLayout = () => {
  return (
    <Head>
      <title>startup summer</title>
      <meta name="description" />
      <link rel="icon" href="public/favicon.ico" />
    </Head>
  )
}

Home.getLayout = getLayout

export default Home
