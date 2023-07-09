import MenuIcon from '@/icons/menu-icon'
import clsx from 'clsx'
import Image from 'next/image'
import React, { useState } from 'react'
import Dropdown from '../forms/dropdown'
import { langueConfig, tokenConfig } from '@/constants/header'
import NotificationIcon from '@/icons/noti-icon'
import MessageIcon from '@/icons/message-icon'
import ProfileIcon from '@/icons/profile-icon'
import Button from '../forms/button'
import useSyncLocalStorage from '@/hooks/use-sync-localstorage'
import { LOCAL_STORAGE_KEY_PROFILE, ProfileType } from './header'
import CloseIcon from '@/icons/close-icon'

const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const [profile, setProfile] = useSyncLocalStorage<ProfileType | undefined>(
    LOCAL_STORAGE_KEY_PROFILE,
    undefined
  )

  const onChange = () => {}

  const onSignUp = () => {
    setProfile({ name: 'My', role: 'client' })
  }

  return (
    <div>
      <div className="justify-between flex items-center ">
        <div>
          <Image src="/images/logo.png" alt="" width={200} height={75} />
        </div>
        <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
          <MenuIcon />
        </div>

        <div
          className={clsx(
            'fixed overflow-hidden z-10 bg-gray-200 bg-opacity-90 inset-0 transform ease-in-out ',
            !isOpen
              ? '-translate-x-[1000px]  transition-all duration-500 opacity-0'
              : 'translate-x-0 transition-opacity opacity-100 duration-500'
          )}
        >
          <div className="bg-white absolute top-0 left-0 bottom-0 w-[80%] z-50 delay-400 duration-500 ease-in-out transition-all transform">
            <div className="flex justify-between items-center mb-4 mt-[27px] px-[20px]">
              <div>
                <Image src="/images/logo.png" alt="" width={200} height={75} />
              </div>
              <div
                className="cursor-pointer pr-3"
                onClick={() => setIsOpen(false)}
              >
                <CloseIcon fill="black" />
              </div>
            </div>
            <div className="flex gap-[40px] flex-col sm:flex-row justify-center items-center">
              <div className="flex justify-end gap-4">
                <Dropdown
                  option={tokenConfig[0]}
                  options={tokenConfig}
                  onChange={onChange}
                />
                <Dropdown
                  option={langueConfig[0]}
                  options={langueConfig}
                  onChange={onChange}
                />
              </div>
              <div>
                {profile ? (
                  <div className="flex gap-6 items-center">
                    <div>
                      <NotificationIcon />
                    </div>
                    <div>
                      <MessageIcon />
                    </div>
                    <div className="text-[#0D0434] text-base font-medium">
                      {profile?.name}
                    </div>
                    <div>
                      <ProfileIcon />
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <Button variant="solid">Sign in</Button>
                    <Button variant="outline" onClick={onSignUp}>
                      Sign up
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderMobile
