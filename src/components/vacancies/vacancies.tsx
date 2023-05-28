import { useQuery } from 'react-query'
import { vacanciesService } from '@/services/vacancies-service'
import { VacanciesFilters } from '@/components/vacancies/filters/vacancies-filters'
import { VacancyCard } from '@/components/vacancies/vacancy/vacancy-card/vacancy-card'
import styles from './vacancies.module.css'
import { SearchInput } from '@/components/vacancies/search-input/search-input'
import { noRefetch } from '@/utils/no-refetch'
import { Params, useFilterParamsStore } from '@/store/useFilterParamsStore'
import { useState } from 'react'
import { Loader, Pagination } from '@mantine/core'
import { useRouter } from 'next/router'
import { RouteNames } from '@/consts/routes'

const initialStateFilter: Params = {
  page: 0,
  count: 4,
  catalogues: '',
  keyword: '',
  payment_to: '',
  payment_from: '',
  no_agreement: 1,
  published: 1,
}

export const Vacancies = () => {
  const [applyFilter, setApplyFilter] = useState(initialStateFilter)

  const inputValue = useFilterParamsStore((state) => state.params.keyword)
  const setInputValue = useFilterParamsStore((state) => state.setKeyword)
  const params = useFilterParamsStore((state) => state.params)
  const page = useFilterParamsStore((state) => state.params.page)
  const setPage = useFilterParamsStore((state) => state.setPage)
  const totalPages = 125

  const { push } = useRouter()

  const { isLoading, data } = useQuery({
    queryKey: ['getVacancies', applyFilter],
    queryFn: () => vacanciesService.getVacancies(applyFilter),
    retry: 2,
    ...noRefetch,
  })

  if (isLoading) {
    return <Loader />
  }

  if (data?.length === 0) {
    push(RouteNames.EMPTY_STATE)
  }
  const onClickPaginationHandler = () => {
    setApplyFilter(params)
  }

  const vacanciesList = data?.map((vacancy) => (
    <VacancyCard data-elem={`vacancy-${vacancy.id}`} key={vacancy.id} vacancy={vacancy} />
  ))

  return (
    <div className={styles.container}>
      {/*{!isMobile && <VacanciesFilters setApplyFilter={setApplyFilter} params={params} />}*/}
      <VacanciesFilters setApplyFilter={setApplyFilter} params={params} />
      <div className={styles.vacanciesContainer}>
        <SearchInput
          setApplyFilter={setApplyFilter}
          params={params}
          value={inputValue}
          onChange={setInputValue}
        />
        {vacanciesList}
        <Pagination
          total={totalPages}
          value={page}
          onClick={onClickPaginationHandler}
          onChange={setPage}
        />
      </div>
    </div>
  )
}
