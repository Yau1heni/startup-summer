import { FC } from 'react'
import { VacancyType } from '@/services/vacancies-service'
import { VacancyCard } from '@/components/vacancies/vacancy/vacancy-card/vacancy-card'
import { Text } from '@mantine/core'
import styles from './vacancy.module.css'

export const Vacancy: FC<PropsType> = ({ vacancy, textVacancy }) => {
  return (
    <div className={styles.container}>
      <VacancyCard vacancy={vacancy as VacancyType} className={styles.vacancyCard} />
      <Text>{textVacancy}</Text>
    </div>
  )
}

type PropsType = {
  vacancy: VacancyType
  textVacancy: string
}
