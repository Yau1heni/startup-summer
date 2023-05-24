import icon from 'public/union.svg'
import { colorsTheme } from '@/consts/colorsTheme'
import Image from 'next/image'
import styles from './header.module.css'
import { TabsCustom } from '@/components/tabs/tabs'

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.titleContainer}>
        <Image src={icon} alt={icon} />
        <h2 className={styles.title} color={colorsTheme.colors.blue[5]}>
          Jobored
        </h2>
      </div>

      <div className={styles.tabsContainer}>
        <TabsCustom />
      </div>
    </div>
  )
}
