import { Header } from '@/components/header/header'
import { PropsWithChildren, ReactElement } from 'react'
import { NextPage } from 'next'
import styles from './layout.module.css'

export const Layout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <div>{children}</div>
    </div>
  )
}

export const getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}
