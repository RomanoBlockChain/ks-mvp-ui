import Image from 'next/image'
import React, { useEffect, useMemo, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Button from '@/components/forms/button'
import LinkIcon from '@/icons/link-icon'
import PartyIcon from '@/icons/party-icon'
import StarIcon from '@/icons/star-icon'
import useSWRImmutable from 'swr/immutable'
import { BidBody, ProjectApi, ProjectBody } from '@/apis/project'
import clsx from 'clsx'
import ModalDeposit from '@/components/commons/modaldeposit'
import LocationIcon from '@/icons/location-icon'
import MoneyBagIcon from '@/icons/money-bag-icon'
import KickstarIcon from '@/icons/kickstar-icon'
import Submission from './submission'
import { isEmpty } from '@/utils/helper'
import { mockBid } from '../constants'

type AllBidsPropsType = {
  bids: BidBody[]
}

const AllBids = ({ bids }: AllBidsPropsType) => {
  const [bid, setBid] = useState<BidBody>()
  const [openDeposit, setOpenDeposit] = useState<boolean>(false)
  const [resData, setResData] = useState<boolean>(false)
  const [step, setStep] = useState<number>(0)

  const onDetailBid = (item: BidBody) => {
    setBid(item)
  }

  const onAccept = async () => {
    try {
      if (bid?.projectId && bid.bidID) {
        const { data } = await ProjectApi.approveBid(bid?.projectId, bid.bidID)
        setOpenDeposit(true)
        setResData(data.data)
        setStep(step + 1)
      }
    } catch (error) {}
  }

  const mockBidData = useMemo(() => {
    if (isEmpty(bids)) {
      return mockBid
    }
    return bids
  }, [bids])

  useEffect(() => {
    if (mockBidData) {
      setBid(mockBidData[0])
    }
  }, [mockBidData])

  return (
    <div className="flex flex-col lg:flex-row  gap-6 mb-32 ">
      {step === 0 && (
        <>
          <div className="p-6 border-[1.5px] w-full lg:w-[30%] border-[#E7E7E7] rounded-lg h-auto ">
            <div className="mb-8 flex gap-1 text-[#0D0434] text-2xl font-medium">
              All Bids{' '}
              <div className="text-[#CECECE]">({mockBidData?.length || 0})</div>
            </div>
            <div className="h-[700px] overflow-y-auto">
              {mockBidData?.map((item) => {
                return (
                  <div
                    key={uuidv4()}
                    className={clsx(
                      'cursor-pointer hover:bg-[#E6EAF8] mb-4',
                      bid && bid?.bidID === item?.bidID
                        ? 'bg-[#E6EAF8] rounded-md p-5 '
                        : ' border-[1.5px] border-[#E7E7E7] p-5 rounded-lg'
                    )}
                    onClick={() => onDetailBid(item)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-4 w-fit">
                        <Image
                          width={36}
                          height={36}
                          src="/images/default-avatar.png"
                          alt=""
                        />
                        <div>
                          <div className="text-[#0D0434] text-[18px] leading-[27px] font-medium">
                            Tran Tram
                          </div>
                          <div className="flex gap-1 items-center ">
                            <StarIcon />
                            <div className="text-[#0D0434] text-sm">4.9</div>
                          </div>
                        </div>
                      </div>
                      <div className="text-[#0D0434] text-sm ">
                        ${item.amount}
                      </div>
                    </div>
                    <div className="text-[#0D0434] text-[18px] leading-[27px] font-medium mb-4">
                      {item?.title}
                    </div>
                    <div className="text-[#0D0434] text-sm w-full overflow-hidden inline-block text-ellipsis whitespace-nowrap h-14">
                      {item?.coverLetter}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="w-full lg:w-[70%] p-6 border-[1.5px] h-auto border-[#E7E7E7] rounded-lg">
            {bid && (
              <>
                {' '}
                <div className="flex justify-between items-center">
                  <div className="text-[#0D0434] text-2xl font-medium mb-6">
                    Bid information
                  </div>

                  <div className=" flex gap-4 justify-center">
                    {/* {resData ? (
                  <>
                    <Button disabled={!resData} className="bg-[#FF5520]">
                      Reject
                    </Button>
                    <Button
                      disabled={!resData}
                      className="!bg-[#00BE90]"
                      onClick={onAccept}
                    >
                      Accept
                    </Button>
                  </>
                ) : (
                  <Button className="bg-[#D6F4ED] !text-[#00BE90]">
                    Accepted
                  </Button>
                )} */}
                    <Button className="bg-[#FF5520]">Reject</Button>
                    <Button className="!bg-[#00BE90]" onClick={onAccept}>
                      Accept
                    </Button>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-6">
                  <div className="text-[#0D0434] text-[18px] leading-[27px] font-medium">
                    {bid?.title}
                  </div>
                  <div className="text-[#022DB0] text-[18px] leading-[27px] font-semibold">
                    ${bid?.amount}
                  </div>
                </div>
                <div className="text-[#0D0434] text-base font-normal mb-8">
                  {bid?.coverLetter}
                </div>
                <div className="mb-8">
                  <div className="text-[#0D0434] text-[18px] leading-[27px] font-medium mb-4">
                    Attachment
                  </div>
                  <div className="flex gap-2 items-center mb-4">
                    <LinkIcon className="w-[20px] h-[20px]" />
                    <div className="text-[#0D0434] text-xs">
                      kickstar_brief.docs
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <LinkIcon className="w-[20px] h-[20px]" />
                    <div className="text-[#0D0434] text-xs">
                      kickstar_brief.docs
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <div className="text-[#0D0434] text-[18px] leading-[27px] font-medium mb-4">
                    Revise
                  </div>
                  <div className="text-[#0D0434] text-sm flex gap-1 items-center mb-3">
                    <div className="text-[#022DB0] text-sm">
                      {bid?.timeRevise}
                    </div>{' '}
                    times for 01 submission
                  </div>
                  <div className="text-[#0D0434] text-sm flex gap-1 items-center">
                    <div className="text-[#022DB0] text-sm">
                      ${bid?.additional}/time{' '}
                    </div>
                    when exceeding the number of revise times
                  </div>
                </div>
                <div className="border-t-[1.5px] border-[#E7E7E7] ">
                  <div className="text-[#0D0434] text-[18px] leading-[27px] font-medium mb-8 pt-8">
                    About Seller
                  </div>
                  <div className="flex gap-8">
                    <div className="w-fit h-fit">
                      <Image
                        src="/images/profile/profile-avatar.png"
                        width={80}
                        height={80}
                        alt=""
                      />
                    </div>
                    <div className="w-full">
                      <div className="flex justify-between mb-6">
                        <div className="text-[#0D0434] text-[26px] leading-normal font-medium">
                          Duc Anh Duong
                        </div>
                        <Button>Chat</Button>
                      </div>
                      <div className="grid  grid-cols-1 mb-4 lg:mb-0 lg:grid-cols-2">
                        <div>
                          <div className="text-[#0D0434] text-base font-medium mb-4">
                            Graphic Designer
                          </div>
                          <div className="bg-[#00BE9029] rounded-full py-1 mb-4 px-2 flex gap-1 w-fit items-center">
                            <KickstarIcon />
                            <div className="text-[10px] leading-5 text-[#00BE90]">
                              KYC level 3
                            </div>
                          </div>
                          <div className="flex gap-1 items-center mb-4">
                            <StarIcon />
                            <div className="text-[#0D0434] text-sm">4.9</div>
                            <div className="text-[#B6B6B6] text-sm">(219)</div>
                          </div>
                          <div className="flex gap-1 items-center mb-4">
                            <LocationIcon />
                            <div className="text-[#0D0434] text-sm">
                              Ho Chi Minh, Vietnam
                            </div>
                          </div>
                          <div className="flex gap-1 items-center mb-4">
                            <MoneyBagIcon />
                            <div className="text-[#0D0434] text-sm">
                              $120,984
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="flex gap-2 mb-4 ">
                            <div className="text-[#B6B6B6] text-sm w-[100px]">
                              Level
                            </div>
                            <div className="text-[#0D0434] text-sm">
                              3-5 years of experience
                            </div>
                          </div>
                          <div className="flex gap-2 mb-4 ">
                            <div className="text-[#B6B6B6] text-sm w-[100px] ">
                              Language
                            </div>
                            <div className="text-[#0D0434] text-sm">
                              Vietnamese, English
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <div className="text-[#B6B6B6] text-sm w-[100px]">
                              Skill
                            </div>
                            <div className="text-[#022DB0] font-bold text-sm">
                              Design
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      )}

      {step === 1 && <Submission />}
      <ModalDeposit
        // onClick={onClick}
        isOpen={openDeposit}
        onClose={() => setOpenDeposit(false)}
      />
    </div>
  )
}

export default AllBids
