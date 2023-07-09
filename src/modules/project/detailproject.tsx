import React, { use, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { clientInformation, projectInformation, skills } from './constants'
import StarIcon from '@/icons/star-icon'
import LinkIcon from '@/icons/link-icon'
import Button from '@/components/forms/button'
import useSyncLocalStorage from '@/hooks/use-sync-localstorage'
import {
  LOCAL_STORAGE_KEY_PROFILE,
  ProfileType,
} from '@/components/themes/header'
import { useSession } from 'next-auth/react'
import { useModalContext } from '@/hooks/use-modal-context'

const DetailProject = () => {
  const { data: user }: any = useSession()
  const { setOpenBind } = useModalContext()

  return (
    <div className="flex flex-col lg:flex-row px-[50px] overflow-y-auto  h-[850px] lg:h-[750px] xl:h-[650px] pb-[50px]">
      <div className="w-full lg:w-[30%]">
        <div>
          <div className="text-[#022DB0] font-medium text-[20px] leading-[30px] mb-6">
            Project information
          </div>
          <div className="mb-[68px]">
            {Object.entries(projectInformation).map(([key, value]) => {
              return (
                <div key={uuidv4()} className="grid grid-cols-2 mb-8">
                  <div className="text-[#B6B6B6] font-normal text-base capitalize">
                    {key}
                  </div>
                  <div className="text-[#0D0434] font-normal text-base">
                    {value}
                  </div>
                </div>
              )
            })}
          </div>
          {user?.user?.typeUser === 'seller' && (
            <div>
              <div className="text-[#022DB0] font-medium text-[20px] leading-[30px] mb-6">
                Client information
              </div>
              {Object.entries(clientInformation).map(([key, value], idx) => {
                console.log(Object.keys(clientInformation), idx)

                return (
                  <div key={uuidv4()} className="grid grid-cols-2 mb-8">
                    <div className="text-[#B6B6B6] font-normal text-base capitalize">
                      {key}
                    </div>
                    <div className="text-[#0D0434] font-normal text-base flex items-center gap-1">
                      {value}{' '}
                      {Object.keys(clientInformation).length === idx + 1 ? (
                        <div className="flex items-center gap-1">
                          <StarIcon /> (98)
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
      <div className="w-full lg:w-[70%] px-[50px] ">
        <div className="text-[#0D0434] text-2xl font-medium mb-8">
          Graphics & Icons for simpleshow videos & <br /> PowerPoint
        </div>
        <div className="text-[#0D0434] text-base font-normal pb-16 border-b border-[#E7E7E7]">
          Hi, we are looking for graphics to use for Simpleshow videos &
          PowerPoints among others.The graphics should illustrate the following
          themes:
          <br /> - Roof/house with PV system & once the house with scaffolding
          and an advertising banner with our logo.
          <br /> - PV module- inverter
          <br /> - PV The graphics should be based on the style of Simpleshow.
          Ideally, however, it can also be used as a PowerPoint icon at the same
          time.
        </div>
        <div className="flex gap-2 mt-12 border-b border-[#E7E7E7] pb-8 mb-8">
          <div className="text-base font-normal text-[#3B3B3B]">Category</div>
          <div className="text-[#0D0434] text-base font-medium">
            Graphics & Design/Design
          </div>
        </div>
        <div className="border-b border-[#E7E7E7] pb-8 mb-8">
          <div className="text-base font-normal text-[#3B3B3B] mb-4">Skill</div>
          <div className="flex items-start flex-wrap gap-2">
            {skills.map((item) => {
              return (
                <div
                  className="text-[#022DB0] font-medium text-xs px-2 py-1 bg-[#E6EAF8] rounded-full "
                  key={uuidv4()}
                >
                  {item}
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex gap-2 border-b border-[#E7E7E7] pb-8 mb-8">
          <div className="text-base font-normal text-[#3B3B3B] mb-4">Level</div>
          <div className="text-[#0D0434] text-base font-medium">Expert</div>
        </div>
        <div className="mb-[60px]">
          <div className="text-base font-normal text-[#3B3B3B] mb-4">
            Attachments
          </div>
          <div className="bg-[#E6EAF8] rounded flex items-center px-[15px] py-[18px] gap-3 mb-3">
            <div>
              <LinkIcon />
            </div>
            <div>kickstar_brief.docs</div>
          </div>
          <div className="bg-[#E6EAF8] rounded flex items-center px-[15px] py-[18px] gap-3 ">
            <div>
              <LinkIcon />
            </div>
            <div>kickstar_brief.docs</div>
          </div>
        </div>
        {user?.user ? (
          user?.user?.typeUser === 'seller' ? (
            <div className="grid grid-cols-2 gap-6 mb-[50px]">
              <Button
                rounded="default"
                variant="outline"
                className="w-full h-14"
              >
                Save project
              </Button>
              <Button rounded="default" onClick={() => setOpenBind(true)}>
                Bid now
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-6 mb-[50px]">
              <Button
                rounded="default"
                variant="outline"
                className="w-full h-14"
              >
                Edit project
              </Button>
              <Button rounded="default">See all bids</Button>
            </div>
          )
        ) : (
          ''
        )}

        <div className="h-[50px]" />
      </div>
    </div>
  )
}

export default DetailProject
