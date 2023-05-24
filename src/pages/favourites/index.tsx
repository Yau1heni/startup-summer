import { getLayout } from '@/components/layout/layout'
import { VacancyFavorites } from '@/components/vacancies/vacancy-favorites/vacancy-favorites'

const FavouritesPage = () => {
  return (
    <>
      <VacancyFavorites />
    </>
  )
}

FavouritesPage.getLayout = getLayout

export default FavouritesPage
