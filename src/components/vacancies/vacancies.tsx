import { useQuery } from 'react-query'
import { vacanciesService } from '@/services/vacancies-service'
import { VacanciesFilters } from '@/components/vacancies/filters/vacancies-filters'
import { VacancyCard } from '@/components/vacancies/vacancy/vacancy-card/vacancy-card'
import styles from './vacancies.module.css'
import { SearchInput } from '@/components/vacancies/search-input/search-input'
import { noRefetch } from '@/utils/no-refetch'
import { initialState } from '@/store/useFilterParamsStore'
import { useState } from 'react'

export const Vacancies = () => {
  const [applyFilter, setApplyFilter] = useState(initialState)

  const { isLoading, data } = useQuery({
    queryKey: ['getVacancies', applyFilter],
    queryFn: () => vacanciesService.getVacancies(applyFilter),
    retry: 2,
    ...noRefetch,
  })

  if (isLoading) {
    return <span>Loading...</span>
  }

  const vacanciesList = data?.map((vacancy) => (
    <VacancyCard data-elem={`vacancy-${vacancy.id}`} key={vacancy.id} vacancy={vacancy} />
  ))

  return (
    <div className={styles.container}>
      <VacanciesFilters setApplyFilter={setApplyFilter} />
      <div className={styles.vacanciesContainer}>
        <SearchInput />
        {vacanciesList}
      </div>
    </div>
  )
}
