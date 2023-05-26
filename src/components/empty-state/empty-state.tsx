import Image from 'next/image'
import emptyStateImage from 'public/empty-state.png'
import styles from './empty-state.module.css'

export const EmptyState = () => {
  return (
    <div className={styles.container}>
      <Image src={emptyStateImage} alt={'empty state'} />
      <div className={styles.text}>Упс, здесь еще ничего нет!</div>
    </div>
  )
}
