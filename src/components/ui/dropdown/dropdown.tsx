import { Select, SelectItem } from '@mantine/core'
import { FC, useState } from 'react'
import up from 'public/up.svg'
import down from 'public/down.svg'
import Image from 'next/image'

export const Dropdown: FC<PropsType> = ({ label, placeholder, catalogues, value, setValue }) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Select
      data-elem="industry-select"
      value={value}
      onChange={setValue}
      label={label}
      placeholder={placeholder}
      onDropdownClose={() => setIsOpen(true)}
      onDropdownOpen={() => setIsOpen(false)}
      rightSection={isOpen ? <Image src={down} alt={'down'} /> : <Image src={up} alt={'up'} />}
      rightSectionWidth={30}
      styles={{
        rightSection: { pointerEvents: 'none' },
        label: { paddingBottom: '4px', fontWeight: 700, fontSize: '18px' },
        input: { height: '42px' },
      }}
      data={catalogues}
    />
  )
}

type PropsType = {
  label: string
  placeholder: string
  catalogues: ReadonlyArray<string | SelectItem>
  value: string | null
  setValue: (value: string) => void
}
