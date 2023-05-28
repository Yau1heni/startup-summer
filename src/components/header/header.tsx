import icon from 'public/union.svg'
import { colorsTheme } from '@/consts/colorsTheme'
import Image from 'next/image'
import styles from './header.module.css'
import { TabsCustom } from '@/components/tabs/tabs'
import { Burger } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { useBurgerStore } from '@/store/useBurgerStore'

export const Header = () => {
  const isMobile = useMediaQuery('(max-width: 480px)')

  const setOpened = useBurgerStore((state) => state.setOpened)
  const opened = useBurgerStore((state) => state.opened)

  return (
    <div className={styles.headerContainer}>
      <div className={styles.titleContainer}>
        <Image src={icon} alt={icon} />
        <h2 className={styles.title} color={colorsTheme.colors.blue[5]}>
          Jobored
        </h2>
      </div>

      {isMobile ? (
        <>
          <Burger className={styles.burger} opened={opened} onClick={setOpened} />
        </>
      ) : (
        <div className={styles.tabsContainer}>
          <TabsCustom />
        </div>
      )}
    </div>
  )
}
