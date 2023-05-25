import search from 'public/search.svg'
import { Button, TextInput } from '@mantine/core'
import Image from 'next/image'
import { ChangeEvent, FC } from 'react'
import { Params } from '@/store/useFilterParamsStore'

export const SearchInput: FC<PropsType> = ({ value, onChange, setApplyFilter, params }) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.currentTarget.value)
  }

  const onClickHandler = () => {
    setApplyFilter(params)
  }

  return (
    <TextInput
      value={value}
      onChange={onChangeHandler}
      data-elem="search-input"
      size={'lg'}
      placeholder={'Введите название вакансии'}
      icon={<Image src={search} alt={'search'} />}
      rightSection={
        <Button onClick={onClickHandler} size={'xs'}>
          Поиск
        </Button>
      }
      styles={{ rightSection: { marginRight: '20px' } }}
    />
  )
}

type PropsType = {
  value: string
  onChange: (value: string) => void
  setApplyFilter: (applyFilter: Params) => void
  params: Params
}
