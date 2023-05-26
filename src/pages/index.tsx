import Head from 'next/head'
import { getLayout } from '@/components/layout/layout'
import { NextPageWithLayout } from '@/pages/_app'
import { useEffect } from 'react'
import { RouteNames } from '@/consts/routes'
import { useRouter } from 'next/router'

const Home: NextPageWithLayout = () => {
  const { push } = useRouter()

  useEffect(() => {
    push(RouteNames.VACANCIES).then()
  })

  return (
    <Head>
      <title>startup summer</title>
      <meta name="jobored" />
    </Head>
  )
}

Home.getLayout = getLayout

export default Home
