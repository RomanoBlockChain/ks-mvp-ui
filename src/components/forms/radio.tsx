import CheckRadio from '@/icons/check-radio'
import CheckedRadio from '@/icons/checked-radio'
import React, { useState } from 'react'

type RadioPropsType = {
  checked: boolean
  onChange: (checked: boolean) => void
  title?: string
}

const Radio = ({ checked, onChange, title }: RadioPropsType) => {
  const onCheck = () => {
    onChange(!checked)
  }

  return (
    <div className="flex items-center gap-3 cursor-pointer" onClick={onCheck}>
      <div className="cursor-pointer">
        {checked ? <CheckedRadio /> : <CheckRadio />}
      </div>
      <div className="text-[#0D0434] text-base">{title}</div>
    </div>
  )
}

export default Radio
