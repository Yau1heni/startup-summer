import Head from 'next/head'
import { Inter, Poppins } from 'next/font/google'
import { getLayout } from '@/components/layout/layout'
import { NextPageWithLayout } from '@/pages/_app'

const inter = Inter({ subsets: ['latin', 'cyrillic'], weight: ['500', '700'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['700'] })

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
