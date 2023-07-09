import React, { useState } from 'react'

import BookmarkIcon from '@/icons/bookmark-icon'
import CheckCircle from '@/icons/check-circle'
import StarIcon from '@/icons/star-icon'
import clsx from 'clsx'
import Button from '@/components/forms/button'

export type ItemCardType = {
  title: string
  description?: string
  price: number
  symbol?: string
  author: string
  time: string
  quantity?: number
}

type CardTextPropsType = {
  item: ItemCardType
  onClick?: () => void
  onBind?: (e: any) => void
}

const CardText = ({ item, onClick, onBind }: CardTextPropsType) => {
  const [isShown, setIsShown] = useState<boolean>(false)

  return (
    <div
      onClick={onClick}
      className={clsx(
        'p-[32px]  rounded-lg cursor-pointer',
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
      <div className="flex justify-between mb-6">
        <div className="flex gap-4">
          <div className="flex items-center gap-[5px]">
            <div className="text-[#022DB0] font-medium text-xs">
              {item?.author}
            </div>
            <div>
              <CheckCircle />
            </div>
          </div>
          <div className="flex items-center gap-[5px]">
            <div className="text-[#0D0434] font-normal text-[10px] leading-3">
              5.0
            </div>
            <div>
              <StarIcon />
            </div>
          </div>
        </div>
        <div className="text-[#666666] text-xs font-normal">{item?.time}</div>
      </div>
      <div className="text-[#0A0A0A] text-sm font-normal mb-6">
        {item?.description}
      </div>
      <div className="flex justify-between items-center h-10">
        <div className="text-[#0A0A0A] text-base font-normal">
          {item?.quantity} Bids
        </div>
        <div>
          {isShown ? (
            <Button onClick={onBind}>Bid now</Button>
          ) : (
            <div className="text-base font-medium text-[#0A0A0A] flex gap-2">
              {item?.price} <div className="font-normal">{item?.symbol}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CardText
