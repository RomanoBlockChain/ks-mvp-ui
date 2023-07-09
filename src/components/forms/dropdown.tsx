import React from 'react'
import clsx from 'clsx'
import { v4 as uuidv4 } from 'uuid'

import { Listbox } from '@headlessui/react'
import ArrowDownIcon from '@/icons/arrowdown-icon'

export type OptionType = {
  name: string
  value: string
  children?: OptionType[]
}

type DropdownPropsType = {
  options: OptionType[]
  option: OptionType
  onChange: (value: OptionType) => void
  classNameListbox?: string
  classNameTextName?: string
  className?: string
}

const Dropdown = ({
  options,
  onChange,
  option,
  classNameListbox,
  classNameTextName,
  className,
}: DropdownPropsType) => {
  return (
    <div className={clsx('relative w-[80px] h-[24px]', className)}>
      <div className="absolute w-full">
        <Listbox value={option} onChange={onChange}>
          <Listbox.Button
            className={clsx(
              'flex justify-between items-center w-full',
              classNameListbox
            )}
          >
            <div
              className={clsx(
                'text-[#0D0434] text-sm font-medium  text-ellipsis overflow-hidden w-[50px] whitespace-nowrap',
                classNameTextName
              )}
            >
              {option?.name}
            </div>
            <div className="w-[calc(100%-50px)] flex justify-end">
              <ArrowDownIcon />
            </div>
          </Listbox.Button>
          <Listbox.Options className="bg-slate-100 p-2 rounded-lg">
            {options?.map((option: OptionType) => (
              <Listbox.Option
                key={uuidv4()}
                value={option}
                className="text-[#0D0434] text-sm font-normal mb-2 cursor-pointer"
              >
                {option.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>
    </div>
  )
}

export default Dropdown
