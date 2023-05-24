import { Dropdown } from '@/components/ui/dropdown/dropdown'
import styles from './vacancies-filters.module.css'
import { Button, NumberInput, SelectItem } from '@mantine/core'
import { useQuery } from 'react-query'
import { cataloguesService } from '@/services/catalogues-service'
import { noRefetch } from '@/utils/no-refetch'
import { Params, useFilterParamsStore } from '@/store/useFilterParamsStore'
import { FC } from 'react'
import close from 'public/close.svg'
import Image from 'next/image'

export const VacanciesFilters: FC<PropsType> = ({ setApplyFilter }) => {
  const { params, setCatalogues, setPaymentTo, setPaymentFrom } = useFilterParamsStore()

  const { isLoading, data } = useQuery({
    queryKey: 'getCatalogues',
    queryFn: cataloguesService.getCatalogues,
    retry: 2,
    ...noRefetch,
  })

  if (isLoading) {
    return <span>Loading...</span>
  }

  const handleClickFilter = () => {
    setApplyFilter(params)
  }

  const catalogues = data?.map((el) => ({
    value: el.key,
    label: el.title,
  })) as SelectItem[]

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.titleText}>Фильтры</div>
        <div className={styles.resetContainer}>
          <div className={styles.resetText}>сбросить все</div>
          <Image src={close} alt={'close'} />
        </div>
      </div>
      <Dropdown
        label={'Отрасль'}
        placeholder={'выберите отрасль'}
        catalogues={catalogues}
        value={params.catalogues}
        setValue={setCatalogues}
      />
      <div className={styles.salaryContainer}>
        <NumberInput
          data-elem="salary-from-input"
          label={'Оклад'}
          placeholder={'от'}
          value={params.payment_from}
          onChange={setPaymentFrom}
        />
        <NumberInput
          data-elem="salary-to-input"
          placeholder={'до'}
          value={params.payment_to}
          onChange={setPaymentTo}
        />
      </div>
      <Button fullWidth data-elem="search-button" size={'md'} onClick={handleClickFilter}>
        Применить
      </Button>
    </div>
  )
}

type PropsType = {
  setApplyFilter: (applyFilter: Params) => void
}
