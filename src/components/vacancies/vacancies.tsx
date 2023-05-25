import { useQuery } from 'react-query'
import { vacanciesService } from '@/services/vacancies-service'
import { VacanciesFilters } from '@/components/vacancies/filters/vacancies-filters'
import { VacancyCard } from '@/components/vacancies/vacancy/vacancy-card/vacancy-card'
import styles from './vacancies.module.css'
import { SearchInput } from '@/components/vacancies/search-input/search-input'
import { noRefetch } from '@/utils/no-refetch'
import { initialState, useFilterParamsStore } from '@/store/useFilterParamsStore'
import { useState } from 'react'

export const Vacancies = () => {
  const [applyFilter, setApplyFilter] = useState(initialState)

  const inputValue = useFilterParamsStore((state) => state.params.keyword)
  const setInputValue = useFilterParamsStore((state) => state.setKeyword)
  const params = useFilterParamsStore((state) => state.params)

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
      <VacanciesFilters setApplyFilter={setApplyFilter} params={params} />
      <div className={styles.vacanciesContainer}>
        <SearchInput
          setApplyFilter={setApplyFilter}
          params={params}
          value={inputValue}
          onChange={setInputValue}
        />
        {vacanciesList}
      </div>
    </div>
  )
}
