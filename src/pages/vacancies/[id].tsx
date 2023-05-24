import { useQuery } from 'react-query'
import { vacanciesService, VacancyType } from '@/services/vacancies-service'
import { useRouter } from 'next/router'
import { useParser } from '@/hooks/useParser'
import { Vacancy } from '@/components/vacancies/vacancy/vacancy'
import { getLayout } from '@/components/layout/layout'

const VacancyPage = () => {
  const { query } = useRouter()
  const id = (query.id ? query.id : '') as string

  const { isLoading, data } = useQuery({
    queryKey: 'getVacancy',
    queryFn: () => vacanciesService.getVacancy(id),
    cacheTime: 0,
  })

  const [text] = useParser(data as VacancyType)

  if (isLoading) {
    return <span>Loading...</span>
  }

  return (
    <>
      <Vacancy vacancy={data as VacancyType} textVacancy={text} />
    </>
  )
}

VacancyPage.getLayout = getLayout
export default VacancyPage
