import Image from 'next/image'
import React, { useState } from 'react'

import Button from '@/components/forms/button'
import KickstarIcon from '@/icons/kickstar-icon'
import StarIcon from '@/icons/star-icon'
import BookmarkIcon from '@/icons/bookmark-icon'
import clsx from 'clsx'

export type CardImageType = {
  title?: string
  description?: string
  price: number
  symbol: string
  author?: string
  status?: boolean
  url_image?: string
}

type CardImageTypeProps = {
  item: CardImageType
  onBook?: (e: any) => void
}

const CardImage = ({ item, onBook }: CardImageTypeProps) => {
  const [isShown, setIsShown] = useState<boolean>(false)

  return (
    <div
      className={clsx(
        'cursor-pointer hadow-custom rounded-lg p-[32px]',
        isShown ? 'shadow-custom' : 'border-[1.5px] border-[#E7E7E7]'
      )}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <div
        className={clsx(
          'flex justify-end cursor-pointer',
          isShown ? 'visible' : 'invisible'
        )}
      >
        <BookmarkIcon />
      </div>
      <div className="text-[#0A0A0A] text-xl font-medium mb-2">
        {item?.title}
      </div>
      <div className="flex items-center gap-1 mb-6">
        <div className="text-[#022DB0] text-xs font-normal">{item?.author}</div>
        <div>
          <div className="bg-green w-fit py-1 px-2 rounded-full flex  gap-1">
            <KickstarIcon />
            <div className="text-[#00BE90] text-[10px] leading-5 font-normal">
              KYC level 3
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#0A0A0A] text-sm font-normal mb-6">
        {item?.description}
      </div>
      <div className="mb-7">
        {item?.url_image && (
          <Image src={item?.url_image} alt="" width={350} height={110} />
        )}
      </div>
      <div className="flex justify-between items-center h-10">
        <div className="flex gap-1 items-center">
          <div className="text-[#0D0434] text-base font-normal">5.0</div>
          <div>
            <StarIcon />
          </div>
          <div className="text-[#CECECE] text-base font-normal">(219)</div>
        </div>
        <div>
          {isShown ? (
            <Button variant="solid" onClick={onBook}>
              Book
            </Button>
          ) : (
            <div className="flex gap-2 items-center text-[#0A0A0A]">
              <div className="text-xs font-normal ">from</div>
              <div className="flex gap-1 text-base font-medium">
                {item?.price} <div className="font-normal">{item?.symbol}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CardImage
