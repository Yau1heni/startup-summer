import { useEffect, useState } from 'react'
import { VacancyType } from '@/services/vacancies-service'

export const useParser = (data: VacancyType): string[] => {
  const [text, setText] = useState('')

  useEffect(() => {
    if (data) {
      const parser = new DOMParser()
      const doc = parser.parseFromString(data.vacancyRichText, 'text/html')
      const text = doc.body.textContent
      setText(text as string)
    }
  }, [data])

  return [text]
}
