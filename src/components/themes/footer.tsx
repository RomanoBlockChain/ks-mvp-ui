import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import { listMenuFooter } from '@/constants/footer'
import FacebookIcon from '@/icons/facebook-icon'
import InstagramIcon from '@/icons/instagram-icon'
import TelegramIcon from '@/icons/telegram-icon'
import TwitterIcon from '@/icons/twitter-icon'

const Footer = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-7 mb-20">
      <div className="flex flex-col justify-between">
        <Link href="">
          <Image src="/images/logo.png" width={128} height={48} alt="" />
        </Link>
        <div className="flex gap-4">
          <Link href="">
            <FacebookIcon />
          </Link>
          <Link href="">
            <InstagramIcon />
          </Link>
          <Link href="">
            <TelegramIcon />
          </Link>
          <Link href="">
            <TwitterIcon />
          </Link>
        </div>
      </div>
      {Object.entries(listMenuFooter).map(([key, value]) => {
        return (
          <div key={uuidv4()} className="flex flex-col items-end">
            <div className="mb-4 text-[#0A0A0A] font-medium text-xs">{key}</div>
            <>
              {value.map((item) => {
                return (
                  <Link
                    className="text-[#0A0A0A] font-normal text-xs mb-2"
                    key={uuidv4()}
                    href={item?.url}
                  >
                    {item?.name}
                  </Link>
                )
              })}
            </>
          </div>
        )
      })}
    </div>
  )
}

export default Footer
