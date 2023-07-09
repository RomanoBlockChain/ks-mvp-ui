import React, { useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import SearchIcon from '@/icons/search-icon'
import RefreshIcon from '@/icons/refresh-icon'
import Button from '@/components/forms/button'
import Dropdown from '@/components/forms/dropdown'

type SearchFilterPropsType = {
  onChangeSearch: (keySearch: string) => void
  recent?: string[]
  filters?: any
}

const SearchFilter = ({
  recent,
  onChangeSearch,
  filters,
}: SearchFilterPropsType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const textInput: any = useRef(null)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeSearch(event.target.value)
  }

  const onClick = () => {
    setIsOpen(!isOpen)
    textInput.current.focus()
  }

  const onChangeFilter = () => {}

  return (
    <div
      className="w-[636px] relative shadow-custom bg-white h-[56px] rounded border-[1.5px]  border-[#E7E7E7] cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center h-full px-[20px]">
        <SearchIcon />
        <input
          ref={textInput}
          onChange={onChange}
          type="text"
          className="h-full bg-white outline-none pl-3 w-full text-[#B6B6B6]"
        />
      </div>
      {isOpen && (
        <div className="absolute px-8 z-20 w-full bg-white shadow-custom ">
          <div className="flex   py-4 gap-6  border-b border-[#E7E7E7]">
            <div className="text-[#3B3B3B] text-xs font-medium">Recent</div>
            {recent?.map((ele) => (
              <div className="text-[#022DB0] text-xs " key={uuidv4()}>
                {ele}
              </div>
            ))}
          </div>
          <div>
            <div className="flex justify-between items-center py-5">
              <div className="text-[#3B3B3B] text-xs font-medium">Filter</div>
              <div className="flex items-center gap-5">
                <div>
                  <RefreshIcon />
                </div>
                <Button variant="solid">Apply</Button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2 mb-8">
              {Object.values(filters)?.map((item: any) => {
                return (
                  <div key={uuidv4()} className="mb-4">
                    <Dropdown
                      classNameListbox="border rounded p-2"
                      classNameTextName="text-base text-[#3B3B3B] font-normal"
                      onChange={onChangeFilter}
                      option={item[0]}
                      options={item}
                      className="h-[34px] w-[120px]"
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchFilter
