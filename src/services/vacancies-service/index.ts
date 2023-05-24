import { instance } from '@/services/config'

export const vacanciesService = {
  getVacancies: (params: VacanciesRequestParamsType) => {
    return instance
      .get<VacanciesResponseType>('vacancies/', {
        params,
      })
      .then((response) => response.data.objects)
      .catch((error) => {
        console.log(error)
      })
  },
  getVacancy: (id: string) => {
    return instance
      .get<VacancyType>(`vacancies/${id}/`, {})
      .then((response) => response.data)
      .catch((error) => {
        console.log(error)
      })
  },
}

export type VacanciesResponseType = {
  objects: VacancyType[]
}

export type VacancyType = {
  id: number
  id_client: number
  profession: string
  firm_name: string
  town: { title: string }
  catalogues: { id: number; title: string }[]
  type_of_work: { id: number; title: string }
  payment_to: number
  payment_from: number
  currency: string
  vacancyRichText: string
}

export type VacanciesRequestParamsType = {
  page: number
  count: number
  published: number
  no_agreement: number
  keyword?: string
  payment_to?: number | ''
  payment_from?: number | ''
  catalogues?: string
}
