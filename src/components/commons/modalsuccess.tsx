import React, { Fragment, ReactElement, ReactNode } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import CheckCircle from '@/icons/check-circle'
import Button from '../forms/button'

type ActiveType = 'post' | 'update'

type ModalSuccessPropsType = {
  isOpen: boolean
  onClose: (boolean: boolean) => void
  title: string
  active?: ActiveType
  onClick?: () => void
  footer?: ReactElement
}

const ModalSuccess = ({
  isOpen,
  onClose,
  title,
  active = 'post',
  footer,
  onClick,
}: ModalSuccessPropsType) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-[604px]   transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className=" py-[50px] w-full  px-[60px]">
                  <div className="mb-[21px] text-center flex justify-center">
                    <CheckCircle className="w-[60px] h-[60px]" />
                  </div>
                  <div className="text-[#050544] font-semibold text-xl mb-[32px] flex justify-center text-center">
                    {title}
                  </div>
                  {active !== 'post' ? (
                    <div>{footer}</div>
                  ) : (
                    <div className="flex justify-center " onClick={onClick}>
                      <Button className="w-[80%] h-[56px]" rounded="default">
                        View detail
                      </Button>
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default ModalSuccess
