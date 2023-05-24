import { useLocalStorage } from '@mantine/hooks'
import { VacancyCard } from '@/components/vacancies/vacancy/vacancy-card/vacancy-card'
import { VacancyType } from '@/services/vacancies-service'
import styles from './vacancy-favorites.module.css'

export const VacancyFavorites = () => {
  const [value] = useLocalStorage<VacancyType[]>({
    key: 'favorites',
  })

  const favoritesList = value?.map((favorites) => (
    <VacancyCard key={`ls${favorites.id}`} vacancy={favorites} />
  ))

  return <div className={styles.container}>{favoritesList}</div>
}
