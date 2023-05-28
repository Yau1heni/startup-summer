import { useLocalStorage } from '@mantine/hooks'
import { VacancyCard } from '@/components/vacancies/vacancy/vacancy-card/vacancy-card'
import { VacancyType } from '@/services/vacancies-service'
import styles from './vacancy-favorites.module.css'
import { useRouter } from 'next/router'
import { RouteNames } from '@/consts/routes'
import { useEffect, useState } from 'react'
import { Loader } from '@mantine/core'

export const VacancyFavorites = () => {
  const [value] = useLocalStorage<VacancyType[]>({
    key: 'favorites',
  })

  const [isLoading, setIsLoading] = useState(true)

  const { push } = useRouter()

  useEffect(() => {
    setIsLoading(false)
  }, [value])

  if (isLoading) {
    return <Loader />
  }

  if (!value || value?.length === 0) {
    push(RouteNames.EMPTY_STATE)
  }

  const favoritesList = value?.map((favorites) => (
    <VacancyCard key={`ls${favorites.id}`} vacancy={favorites} />
  ))

  return (
    <div className={styles.container}>
      <div className={styles.favoritesList}>{favoritesList}</div>
    </div>
  )
}
