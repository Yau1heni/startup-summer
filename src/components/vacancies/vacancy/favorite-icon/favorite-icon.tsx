import { FC } from 'react'
import fullIcon from 'public/full-star.svg'
import emptyIcon from 'public/empty-star.svg'
import Image from 'next/image'
import styles from './favorite-icon.module.css'

type RatingPropsType = {
  onClick: () => void
  isFavorites: boolean
}

export const FavoriteIcon: FC<RatingPropsType> = ({ onClick, isFavorites }) => {
  return (
    <div onClick={onClick}>
      {isFavorites ? (
        <Image src={fullIcon} alt="fullIcon" className={styles.icon} />
      ) : (
        <Image src={emptyIcon} alt="emptyIcon" className={styles.icon} />
      )}
    </div>
  )
}
