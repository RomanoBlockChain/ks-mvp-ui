import { Listbox, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment } from 'react'
import { v4 as uuidv4 } from 'uuid'

import ArrowDownIcon from '@/icons/arrowdown-icon'
import { OptionType } from './dropdown'
import { isEmpty } from '@/utils/helper'

type SelectProps = {
  placeholder: string
  options: OptionType[]
  selected?: OptionType
  onChange: (selected: OptionType) => void
  type?: string
  className?: string
}

export default function Select({
  placeholder,
  options,
  selected,
  onChange,
  type,
  className,
}: SelectProps) {
  return (
    <div
      className={`border-[1.5px] rounded w-full border-[#022DB0] ${className} `}
    >
      <Listbox value={selected} onChange={onChange}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-pointer rounded h-[45px] bg-white p-[10px] text-left ">
            <span
              className={clsx(
                ' absolute h-full  truncate ',
                !isEmpty(selected?.name)
                  ? 'top-[5px] text-[10px] text-[#0D0434] leading-4 font-normal'
                  : 'text-[#B6B6B6] font-normal text-sm top-[13px]'
              )}
            >
              {placeholder}
              {selected && (
                <div className="text-[#0D0434] text-sm font-medium ">
                  {selected?.name}
                </div>
              )}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ArrowDownIcon fill="#022DB0" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute shadow-custom z-[999] mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {type === 'parent'
                ? options?.map((opt) => {
                    return (
                      <div key={uuidv4()}>
                        <div className="text-[#0D0434] text-sm font-medium p-[10px]">
                          {opt?.name}
                        </div>
                        {opt?.children?.map((item) => {
                          return (
                            <Listbox.Option
                              key={uuidv4()}
                              className={({ active }) =>
                                `relative cursor-pointer p-[10px] ${
                                  active
                                    ? 'bg-[#022DB0] text-white'
                                    : 'text-[#0D0434] text-sm font-medium'
                                }`
                              }
                              value={item}
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      selected ? 'font-medium' : 'font-normal'
                                    }`}
                                  >
                                    {item?.name}
                                  </span>
                                  <div></div>
                                </>
                              )}
                            </Listbox.Option>
                          )
                        })}
                      </div>
                    )
                  })
                : options?.map((opt) => (
                    <Listbox.Option
                      key={uuidv4()}
                      className={({ active }) =>
                        `relative cursor-pointer p-[10px] ${
                          active
                            ? 'bg-[#022DB0] text-white'
                            : 'text-[#0D0434] text-sm font-medium'
                        }`
                      }
                      value={opt}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {opt?.name}
                          </span>
                        </>
                      )}
                    </Listbox.Option>
                  ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
