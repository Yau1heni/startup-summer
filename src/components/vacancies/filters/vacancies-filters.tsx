import { Dropdown } from '@/components/ui/dropdown/dropdown'
import styles from './vacancies-filters.module.css'
import { Button, Loader, NumberInput, SelectItem } from '@mantine/core'
import { useQuery } from 'react-query'
import { cataloguesService } from '@/services/catalogues-service'
import { noRefetch } from '@/utils/no-refetch'
import { initialState, Params, useFilterParamsStore } from '@/store/useFilterParamsStore'
import { FC } from 'react'
import close from 'public/close.svg'
import Image from 'next/image'
import { useBurgerStore } from '@/store/useBurgerStore'

export const VacanciesFilters: FC<PropsType> = ({ params, setApplyFilter }) => {
  const { setCatalogues, setPaymentTo, setPaymentFrom, clearState } = useFilterParamsStore()

  const opened = useBurgerStore((state) => state.opened)

  const { isLoading, data } = useQuery({
    queryKey: 'getCatalogues',
    queryFn: cataloguesService.getCatalogues,
    retry: 2,
    ...noRefetch,
  })

  if (isLoading) {
    return <Loader />
  }

  const handleClickFilter = () => {
    setApplyFilter(params)
  }

  const handleClickResetFilter = () => {
    clearState()
    setApplyFilter(initialState)
  }

  const catalogues = data?.map((el) => ({
    value: el.key,
    label: el.title,
  })) as SelectItem[]

  return (
    <>
      {opened && (
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            <div className={styles.titleText}>Фильтры</div>
            <div onClick={handleClickResetFilter} className={styles.resetContainer}>
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
      )}
    </>
  )
}

type PropsType = {
  params: Params
  setApplyFilter: (applyFilter: Params) => void
}
