import clsx from 'clsx'
import React, { useState } from 'react'

import AddCircle from '@/icons/add-circle'

type CardPostPropsType = {
  title?: string
  onClick?: () => void
}

const CardPost = ({ title, onClick }: CardPostPropsType) => {
  const [isShown, setIsShown] = useState(false)
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      className={clsx(
        'cursor-pointer flex gap-4 w-full min-h-[250px] h-full items-center justify-center border-[1.5px]  border-[#E7E7E7] rounded-lg',
        isShown ? 'bg-[#022DB0]' : ''
      )}
    >
      <div>
        <AddCircle fill={isShown ? 'white' : '#022DB0'} />
      </div>
      <div
        className={clsx(
          ' text-xl font-normal ',
          isShown ? 'text-white' : 'text-[#0A0A0A]'
        )}
      >
        {title}
      </div>
    </div>
  )
}

export default CardPost
