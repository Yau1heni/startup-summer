import search from 'public/search.svg'
import { Button, TextInput } from '@mantine/core'
import Image from 'next/image'

export const SearchInput = () => {
  return (
    <TextInput
      data-elem="search-input"
      size={'lg'}
      placeholder={'Введите название вакансии'}
      icon={<Image src={search} alt={'search'} />}
      rightSection={<Button size={'xs'}>Поиск</Button>}
      styles={{ rightSection: { marginRight: '20px' } }}
    />
  )
}
