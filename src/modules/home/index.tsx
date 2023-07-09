import { useSession } from 'next-auth/react'
import clsx from 'clsx'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Banner from '@/components/themes/banner'
import TitleContent from '@/components/themes/titlecontent'

import {
  filters,
  filtersConfig,
  mockDataBanner,
  recentConfig,
} from './constant'
import RenderHomeRole from './renderhomerole'
import SearchFilter from './searchfilter'

const HomeModule = () => {
  const [filter, setFilter] = useState<string>(filters[0])
  const { data: profile }: any = useSession()

  const onChangeSearch = (keySearch: string) => {}

  const onFilter = (value: string) => {
    setFilter(value)
  }

  return (
    <>
      <div className="mb-8">
        <TitleContent />
      </div>
      <div className="mb-20">
        <Banner contentBanner={mockDataBanner} />
      </div>
      <div className="flex justify-center mb-8">
        <SearchFilter
          onChangeSearch={onChangeSearch}
          recent={recentConfig}
          filters={filtersConfig}
        />
      </div>
      <div className="mb-20">
        <div className="flex gap-8 cursor-pointer justify-start overflow-x-auto lg:justify-center ">
          {filters?.map((item) => (
            <div
              className={clsx(
                '  text-base p-4 whitespace-pre',
                filter === item
                  ? 'bg-[#E6EAF8] text-[#022DB0] rounded font-medium'
                  : ' text-[#3B3B3B] font-normal'
              )}
              key={uuidv4()}
              onClick={() => onFilter(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="mb-[240px]">
        <RenderHomeRole role={profile?.user?.typeUser} />
      </div>
    </>
  )
}

export default HomeModule
