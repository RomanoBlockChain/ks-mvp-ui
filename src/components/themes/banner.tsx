import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Swiper, SwiperSlide } from 'swiper/react'
import clsx from 'clsx'
import Link from 'next/link'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
// import required modules
import { Pagination } from 'swiper'

import KickstarIcon from '@/icons/kickstar-icon'
import StarIcon from '@/icons/star-icon'
import Button from '../forms/button'
import CloseIcon from '@/icons/close-icon'
import Image from 'next/image'
import useSyncLocalStorage from '@/hooks/use-sync-localstorage'
import { Register } from '@/apis/signup'
import { LOCAL_STORAGE_KEY_PROFILE } from './header'

export type ContentBannerType = {
  title: string
  description: string
  level?: string
  quantity?: number
  other?: string[]
  url_image?: string
  sub_title?: string
}

type BannerPropsType = {
  contentBanner: ContentBannerType[]
}

const Banner = ({ contentBanner }: BannerPropsType) => {
  const [isOpen, setIsOpen] = useState<boolean>(true)

  const [profile, _] = useSyncLocalStorage<Register | undefined>(
    LOCAL_STORAGE_KEY_PROFILE,
    undefined
  )

  const onClose = () => {
    setIsOpen(false)
  }

  return (
    <div
      className={clsx(
        'opacity-100',
        isOpen
          ? ' block duration-500 ease-in-out '
          : 'hidden transition-all duration-500 opacity-0 '
      )}
    >
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={true}
        modules={[Pagination]}
        className="bg-white shadow-custom rounded-[10px]"
      >
        {profile ? (
          <div className="relative">
            {contentBanner?.map((contentBanner) => (
              <SwiperSlide key={uuidv4()}>
                <div className="flex flex-col md:flex-row gap-8 bg-white shadow-custom rounded-[10px] px-[60px] py-[32px]">
                  <div className="md:w-[60%] xl:w-[40%]">
                    <div className="text-[#0D0434] text-base font-medium">
                      {contentBanner?.sub_title}
                    </div>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-3">
                      <div className="text-[#022DB0] font-bold text-[32px] leading-[48px]">
                        {contentBanner?.title}
                      </div>
                      <div className="flex gap-1 items-center p-2 rounded-full bg-green w-[112px] h-[28px]">
                        <div>
                          <KickstarIcon />
                        </div>
                        <div className="text-[#00BE90] text-xs ">
                          Level {contentBanner?.level} KYC
                        </div>
                      </div>
                    </div>
                    <div className="text-[#3B3B3B] text-sm font-normal mb-3">
                      {contentBanner?.description}
                    </div>

                    <div className="gap-6 flex  mb-7">
                      <div className="text-[#0D0434] text-base font-bold flex items-center gap-1">
                        {contentBanner?.quantity || 0}{' '}
                        <div className="font-medium">Project</div>
                      </div>
                      <div className="flex  gap-1">
                        <div className="text-[#0D0434] font-bold text-base">
                          5.0
                        </div>
                        <div>
                          <StarIcon />
                        </div>
                        <div className="text-[#CECECE] text-base">(1347)</div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      {contentBanner?.other?.map((item) => {
                        return (
                          <Button
                            variant="outline"
                            size="small"
                            className=""
                            key={uuidv4()}
                          >
                            {item}
                          </Button>
                        )
                      })}
                    </div>
                  </div>
                  <div className="md:w-[50%] xl:w-[60%]">
                    {contentBanner?.url_image && (
                      <img
                        src={contentBanner?.url_image}
                        className="h-full"
                        alt=""
                      />
                    )}
                  </div>
                </div>
                <div
                  className="cursor-pointer absolute top-4 right-4 z-50"
                  onClick={onClose}
                >
                  <CloseIcon />
                </div>
              </SwiperSlide>
            ))}
          </div>
        ) : (
          <>
            <SwiperSlide>
              <div
                className="cursor-pointer absolute top-4 right-4 z-50"
                onClick={onClose}
              >
                <CloseIcon />
              </div>
              <div className="bg-[#060655] h-[21.8125rem] flex items-center justify-between px-[50px] xl:px-[141px] py-[4.4375rem]">
                <div>
                  <div className="text-[3.5rem] leading-[5.25rem] text-white font-bold mb-2">
                    Hire freelancers
                  </div>
                  <div className="flex gap-1 flex-col lg:flex-col xl:flex-row">
                    <div className="text-[20px] leading-[30px] text-white">
                      Find the perfect freelancers.
                    </div>
                    <Link
                      className="text-[#69CAF7] font-normal text-[20px] leading-[30px] underline"
                      href=""
                    >
                      Post your project
                    </Link>
                  </div>
                </div>
                <div>
                  <Image
                    src="/images/banner-1.png"
                    width={180}
                    height={192}
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="cursor-pointer absolute top-4 right-4 z-50"
                onClick={onClose}
              >
                <CloseIcon />
              </div>
              <div className="bg-[#022DB0] h-[349px] flex items-center justify-center px-[50px]  xl:px-[141px] xl:py-[71px]">
                <div className="relative w-full ">
                  <img src="/images/banner-2.png" className="w-full " alt="" />
                  <div className="absolute  top-0 md:top-10 w-full  ">
                    <div className="text-[3.5rem] flex justify-center leading-[5.25rem] text-white font-bold mb-2">
                      Find a job
                    </div>
                    <div className="flex justify-center flex-col sm:flex-row md:flex-row gap-1">
                      <div className="text-[1.25rem] leading-[1.875rem] text-white">
                        Discover new jobs,
                      </div>
                      <Link
                        className="text-[#69CAF7] font-normal text-[1.25rem] leading-[1.875rem] underline"
                        href=""
                      >
                        add your service
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </>
        )}
      </Swiper>
    </div>
  )
}

export default Banner
