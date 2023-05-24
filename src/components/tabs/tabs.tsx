import { Tabs } from '@mantine/core'
import { useRouter } from 'next/router'
import styles from './tabs.module.css'

export const TabsCustom = () => {
  const router = useRouter()

  return (
    <Tabs
      defaultValue={'vacancies'}
      value={router.query.activeTab as string}
      variant={'outline'}
      onTabChange={(value) => router.push(`/${value}`)}
    >
      <Tabs.List>
        <Tabs.Tab value="vacancies" className={`${styles.tabLabel} ${styles.tabs}`}>
          Поиск вакансий
        </Tabs.Tab>
        <Tabs.Tab value="favourites" className={`${styles.tabLabel} ${styles.tabs}`}>
          Избранное
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  )
}
