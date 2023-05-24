import { instance } from '@/services/config'

export const cataloguesService = {
  getCatalogues: () => {
    return instance
      .get<CataloguesResponseType[]>('catalogues/')
      .then((response) => response.data)
      .catch((error) => {
        console.log(error)
      })
  },
}

type CataloguesResponseType = {
  title: string
  title_trimmed: string
  key: string
}
