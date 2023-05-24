import { useEffect, useState } from 'react'
import { useLocalStorage } from '@mantine/hooks'
import { VacancyType } from '@/services/vacancies-service'

export const useFavorites = (vacancy: VacancyType): ReturnType => {
  const [isFavorites, setIsFavorites] = useState(false)
  const [favorites, setFavorites] = useLocalStorage<VacancyType[]>({
    key: 'favorites',
    defaultValue: [],
  })

  useEffect(() => {
    if (favorites?.findIndex((el) => el.id === vacancy.id) !== -1) {
      setIsFavorites(true)
    }
  }, [favorites])

  const controlFavoritesHandler = (id: number) => {
    if (isFavorites) {
      setFavorites(favorites.filter((item) => item.id !== id))
      setIsFavorites(false)
    } else {
      setFavorites([...favorites, vacancy])
      setIsFavorites(true)
    }
  }

  return [isFavorites, controlFavoritesHandler]
}

type ReturnType = [boolean, (id: number) => void]
