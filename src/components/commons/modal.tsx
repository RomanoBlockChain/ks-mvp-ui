import clsx from 'clsx'
import React, { ReactNode, useRef } from 'react'

import CloseIcon from '@/icons/close-icon'
import { useOnClickOutside } from '@/hooks/use-onclick-outside'

interface IModalProps {
  isOpen?: boolean
  onClose?: () => void
  header?: ReactNode
  footer?: ReactNode
  children: JSX.Element
}

const Modal = ({ isOpen, onClose, header, children, footer }: IModalProps) => {
  return (
    <div
      className={clsx(
        'fixed overflow-hidden z-[10] bg-[#0A0A0A] bg-opacity-25 inset-0 transform ease-in-out cursor-pointer',
        isOpen
          ? '-translate-y-0  duration-500 ease-in-out'
          : 'translate-y-[1000px] transition-all duration-500 opacity-0 '
      )}
    >
      <div className="bg-white mt-10 lg:m-[50px] xl:m-[120px] rounded-lg">
        <div className="flex justify-between items-center p-3">
          <div />
          <div className="text-[#0D0434] font-semibold text-[40px] leading-[60px]">
            {header && header}
          </div>
          <div onClick={onClose} className=" cursor-pointer">
            <CloseIcon />
          </div>
        </div>
        <div>{children}</div>
        <div className="mb-[50px]">{footer}</div>
      </div>

      <section
        className=" w-screen h-full cursor-pointer "
        onClick={onClose}
      ></section>
    </div>
  )
}

export default Modal
