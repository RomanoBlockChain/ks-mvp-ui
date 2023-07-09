import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import useSWRImmutable from 'swr/immutable'

import { langueConfig, tokenConfig } from '@/constants/header'
import Button from '../forms/button'
import { Navigation } from '@/types/navigation'
import NotificationIcon from '@/icons/noti-icon'
import MessageIcon from '@/icons/message-icon'
import ProfileIcon from '@/icons/profile-icon'
import Dropdown from '../forms/dropdown'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { UserApi } from '@/apis/user'
import { useRouter } from 'next/router'

type HeaderProps = {
  logo?: string
  mainNavigation?: Navigation
}

export type ProfileType = {
  name?: string
  role: string
}

export const LOCAL_STORAGE_KEY_PROFILE = 'user'

const Header = () => {
  const { data }: any = useSession()
  const router = useRouter()

  const getProfile = async () => {
    const { data } = await UserApi.getProfile()
    return data.data
  }

  const { data: profile } = useSWRImmutable(
    { key: 'getProfile', token: data?.user?.token },
    data?.user?.token ? getProfile : null
  )

  const onChange = () => {}

  return (
    <div className="flex justify-between items-center mt-[27px] ">
      <div>
        <Link href="/" className="cursor-pointer">
          <Image src="/images/logo.png" alt="" width={200} height={75} />
        </Link>
      </div>
      <div className="flex gap-[30px] items-center">
        <div className="flex gap-2">
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
          {data?.user ? (
            <div className="flex gap-6 items-center">
              <div>
                <NotificationIcon />
              </div>
              <div>
                <MessageIcon />
              </div>
              <div
                className="flex gap-1 items-center cursor-pointer"
                onClick={() => router.push('/profile')}
              >
                <div className="text-[#0D0434] text-base font-medium">
                  {profile?.username || 'Your Project'}
                </div>
                <div>
                  <Link href="/profile">
                    <ProfileIcon />
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex gap-2">
              <Button variant="solid">
                <Link href="/signin">Sign in</Link>
              </Button>
              <Button variant="outline">
                <Link href="/signup">Sign up</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
