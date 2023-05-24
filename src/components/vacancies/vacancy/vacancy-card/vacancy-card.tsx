import { VacancyType } from '@/services/vacancies-service'
import React, { FC } from 'react'
import styles from './vacancy-card.module.css'
import { colorsTheme } from '@/consts/colorsTheme'
import Link from 'next/link'
import { Text } from '@mantine/core'
import { FavoriteIcon } from '@/components/vacancies/vacancy/favorite-icon/favorite-icon'
import { useFavorites } from '@/hooks/useFavorites'

export const VacancyCard: FC<PropsType> = ({ vacancy }) => {
  const [isFavorites, controlFavoritesHandler] = useFavorites(vacancy)

  const onclickHandler = () => {
    controlFavoritesHandler(vacancy.id)
  }

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <Link href={`/vacancies/${vacancy.id}`}>
          <Text color={colorsTheme.colors.blue[5]} size={'lg'} weight={'600'}>
            {vacancy.profession}
          </Text>
        </Link>
        <div>
          {`з/п от ${vacancy.payment_from} `}
          {vacancy.payment_to !== 0 && ` - ${vacancy.payment_to} `}
          {vacancy.currency}
        </div>
        <div> {vacancy.type_of_work.title}</div>
        <div> {vacancy.town.title}</div>
      </div>
      <FavoriteIcon
        data-elem={`vacancy-${vacancy.id}-shortlist-button`}
        onClick={onclickHandler}
        isFavorites={isFavorites}
      />
    </div>
  )
}

type PropsType = {
  vacancy: VacancyType
  className?: string
}
