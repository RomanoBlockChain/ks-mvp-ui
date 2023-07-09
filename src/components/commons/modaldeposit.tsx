import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Button from '../forms/button'
import Image from 'next/image'

type ModalDepositPropsType = {
  isOpen: boolean
  onClose: (boolean: boolean) => void
  onClick?: () => void
}

const ModalDeposit = ({ isOpen, onClose, onClick }: ModalDepositPropsType) => {
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
              <Dialog.Panel className="w-fit   transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className=" py-[50px] w-full  px-[100px]">
                  <div className="text-[#0D0434] font-semibold text-[40px] leading-[60px] mb-6">
                    Deposit information
                  </div>
                  <div className="text-[#050544] text-[20px] leading-[24px] flex gap-1">
                    You need to deposit{' '}
                    <div className="text-[#022DB0] font-semibold">$1000</div> to
                    start your project.
                  </div>
                  <div className="text-center text-[#050544] text-[20px] leading-[24px] mb-7">
                    Pay through this QR code
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src="/images/qr.png"
                      width={230}
                      height={231}
                      alt=""
                    />
                  </div>
                  <div className="text-[#050544] text-xl mb-6 text-center">
                    or
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button
                      onClick={onClick}
                      rounded="default"
                      variant="outline"
                      className="w-full h-[56px]"
                      icon={
                        <Image
                          src={'/images/image-18.png'}
                          width={24}
                          height={24}
                          alt=""
                        />
                      }
                    >
                      Connect with Metamask wallet
                    </Button>
                    <Button
                      onClick={onClick}
                      rounded="default"
                      variant="outline"
                      className="w-full h-[56px]"
                      icon={
                        <Image
                          src={'/images/image-18.png'}
                          width={24}
                          height={24}
                          alt=""
                        />
                      }
                    >
                      Connect with Trustwallet
                    </Button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default ModalDeposit
