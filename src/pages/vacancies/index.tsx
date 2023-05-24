import { getLayout } from '@/components/layout/layout'
import { Vacancies } from '@/components/vacancies/vacancies'

const VacanciesPage = () => {
  return (
    <>
      <Vacancies />
    </>
  )
}

VacanciesPage.getLayout = getLayout

export default VacanciesPage
