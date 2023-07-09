import CheckCircle from '@/icons/check-circle'
import React, { ReactNode, memo, useEffect, useState } from 'react'

interface IInputProps {
  icon?: ReactNode
  title: string
  checked: boolean
  onChange: () => void
  className?: string
}

const Checkbox = ({
  checked,
  icon,
  className,
  title,
  onChange,
}: IInputProps) => {
  return (
    <div
      className="p-[13px] border-[1.5px] rounded border-[#022DB0]"
      onClick={onChange}
    >
      <label className="cbx flex items-center" htmlFor="cbx">
        {checked ? (
          <CheckCircle fill="#022DB0" className="w-[28px] h-[28px]" />
        ) : (
          <div className="w-[28px] h-[28px] rounded-full  border-[2px] hover:border-[#022DB0]" />
        )}
        <span className="text-[#0D0434] text-sm font-normal">{title}</span>
      </label>
    </div>
  )
}

export default memo(Checkbox)
