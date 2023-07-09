import Image from 'next/image'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import CheckCircle from '@/icons/check-circle'
import LinkIcon from '@/icons/link-icon'
import LocationIcon from '@/icons/location-icon'
import MoneyBagIcon from '@/icons/money-bag-icon'
import StarIcon from '@/icons/star-icon'
import Button from '@/components/forms/button'
import { StatusType } from '..'
import PartyIcon from '@/icons/party-icon'
import ModalDeposit from '@/components/commons/modaldeposit'
import { useModalContext } from '@/hooks/use-modal-context'
import Textarea from '@/components/forms/textarea'
import AddCircle from '@/icons/add-circle'
import useSyncLocalStorage from '@/hooks/use-sync-localstorage'
import { FormSubmissionInformationType } from './formsubmissioninformation'
import DeleteIcon from '@/icons/delete-icon'
import EditIcon from '@/icons/edit-icon'
import Modal from '@/components/commons/modal'
import FormSubmissionInformationEdit from './formsubmissioninformationedit'

type BindInformationPropsType = {
  status?: StatusType
  setStatus?: (status: StatusType) => void
}

const BindInformation = ({ status, setStatus }: BindInformationPropsType) => {
  const { openDeposit, setOpenDeposit, setOpenSubmissionFile } =
    useModalContext()
  const [step, setStep] = useState<number>(0)
  const [dataSubmissionInformation, setDataSubmissionInformation] =
    useSyncLocalStorage<FormSubmissionInformationType[] | any[]>(
      'dataSubmissionInformation',
      []
    )

  const [openFormEdit, setOpenFormEdit] = useState<boolean>(false)
  const [valueEdit, setValueEdit] = useState<FormSubmissionInformationType>()
  const { setOpenEditBid } = useModalContext()

  const onConfirm = () => {
    setOpenDeposit(true)
    setStep(step + 1)
  }

  const onClick = () => {
    setOpenDeposit(false)
    setStatus && setStatus('working')
  }

  const addFileSubmission = () => {
    setOpenSubmissionFile(true)
  }

  const onDelete = (value: FormSubmissionInformationType) => {
    setDataSubmissionInformation(
      dataSubmissionInformation.filter(
        (item: FormSubmissionInformationType) =>
          item.description !== value.description
      )
    )
  }

  const onEdit = (value: FormSubmissionInformationType) => {
    setOpenFormEdit(true)
    setValueEdit(value)
  }

  return (
    <>
      {step === 0 && (
        <>
          <div className="flex flex-col lg:flex-row  gap-6 mb-32">
            <div className="p-6 border-[1.5px] w-full lg:w-[30%] border-[#E7E7E7] rounded-lg">
              <div className="mb-8 text-[#0D0434] text-2xl font-medium">
                About Client
              </div>
              <div className="mb-4">
                <Image
                  src="/images/profile/profile-avatar.png"
                  alt=""
                  width={64}
                  height={64}
                />
              </div>
              <div className="text-[#0D0434] text-base font-medium mb-4">
                John Bao Tran
              </div>
              <div className="bg-[#00be9029] flex items-center rounded-full gap-1 px-2 mb-4 w-fit">
                <CheckCircle />
                <div className="text-[#00BE90] text-[10px] leading-5 ">
                  Payment verified
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
                <div className="text-[#0D0434] text-sm">$120,984</div>
              </div>
            </div>
            <div className="w-full lg:w-[70%] p-6 border-[1.5px] border-[#E7E7E7] rounded-lg">
              <div className="flex justify-between">
                <div className="text-[#0D0434] text-2xl font-medium mb-6">
                  Bid information
                </div>

                {status === 'waiting' ? (
                  <Button className="bg-[#D6F4ED] !text-[#00BE90]">
                    Accepted
                  </Button>
                ) : (
                  <div>
                    {' '}
                    <Button className="bg-[#FFB31F] h-[26px]">Bidding</Button>
                  </div>
                )}
              </div>
              <div className="bg-[#D6F4ED] rounded text-center w-full py-8 mb-[32px]">
                <div className="mb-5 flex justify-center">
                  <PartyIcon />
                </div>
                <div className="text-[#0D0434] text-[18px] leading-[27px] font-medium mb-1">
                  Congratulations
                </div>
                <div className="text-[#0D0434] text-sm mb-5">
                  Congratulations, your bid has been accepted, please confirm
                  cooperation.
                </div>
                <div className=" flex gap-4 justify-center">
                  <Button className="bg-[#FF5520]">Cancel</Button>
                  <Button className="bg-[#00BE90]" onClick={onConfirm}>
                    Confirm
                  </Button>
                </div>
              </div>
              <div className="flex justify-between items-center mb-6">
                <div className="text-[#0D0434] text-[18px] leading-[27px] font-medium">
                  Venom logo design proposal
                </div>
                <div className="text-[#022DB0] text-[18px] leading-[27px] font-semibold">
                  $2500
                </div>
              </div>
              <div className="text-[#0D0434] text-base font-normal mb-8">
                Hi, we are looking for graphics to use for Simpleshow videos &
                PowerPoints among others.The graphics should illustrate the
                following themes:
                <br /> - Roof/house with PV system & once the house with
                scaffolding and an advertising banner with our logo.
                <br /> - PV module- inverter
                <br /> - PV The graphics should be based on the style of
                Simpleshow. Ideally, however, it can also be used as a
                PowerPoint icon at the same time.
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
                  <div className="text-[#022DB0] text-sm">03</div> times for 01
                  submission
                </div>
                <div className="text-[#0D0434] text-sm flex gap-1 items-center">
                  <div className="text-[#022DB0] text-sm">$300/time </div>when
                  exceeding the number of revise times
                </div>
              </div>

              <div className=" flex gap-2 justify-end">
                <Button
                  variant="outline"
                  className="w-[108px] border-[#FF5520] bg-white !text-[#FF5520]"
                >
                  Cancel
                </Button>
                <Button
                  variant="outline"
                  className="w-[108px] "
                  onClick={() => setOpenEditBid(true)}
                >
                  Edit
                </Button>
              </div>
            </div>

            <ModalDeposit
              onClick={onClick}
              isOpen={openDeposit}
              onClose={() => setOpenDeposit(false)}
            />
          </div>
        </>
      )}
      {step === 1 && (
        <div className="flex  flex-col lg:flex-row gap-6 overflow-hidden mb-28">
          <div className="h-[600px]  w-full lg:w-[25%] relative  border-[#E7E7E7] rounded-lg border-[1.5px] p-6">
            <div>
              <div className="text-[#0D0434] font-medium text-2xl mb-[20px]">
                Payment information
              </div>
              <div className="flex">
                <div className="text-[#B6B6B6] text-sm mb-3 w-[75px]">
                  Price
                </div>
                <div className="text-[#022DB0] font-medium text-sm">$2500</div>
              </div>
              <div className="flex mb-8">
                <div className="text-[#B6B6B6] text-sm mb-3 w-[75px]">
                  Deposit
                </div>
                <div className="text-[#022DB0] font-medium text-sm">$2500</div>
              </div>
              <div className="mb-8">
                <div className="text-[#0D0434] font-medium text-2xl mb-3">
                  Revise
                </div>
                <div className="text-[#0D0434] text-sm flex gap-1 items-center mb-3">
                  <div className="text-[#022DB0] text-sm">03</div> times for 01
                  submission
                </div>
                <div className="text-[#0D0434] text-sm flex gap-1 ">
                  <div className="text-[#022DB0] text-sm">$300/time </div>
                  when exceeding the <br /> number of revise times
                </div>
              </div>
            </div>
            <div className=" absolute bottom-6 w-[calc(100%-24px)]">
              <div className="text-[#FF5520] text-center">Cancel project</div>
            </div>
          </div>
          <div className="border-[#E7E7E7]  h-[600px] w-full lg:w-[40%] rounded-lg border-[1.5px] p-6">
            <div className="text-[#0D0434] font-medium text-2xl pb-[24px]">
              Submission
            </div>
            <div className="h-[430px] overflow-y-auto">
              <div className="text-sm text-[#0D0434] mb-8 ">
                Build the website for an angel investment company. Scope
                includes Website design. I will provide the content, logo etc
                Hi, we are looking for graphics to use for Simpleshow videos &
                PowerPoints among others.The graphics should illustrate the
                following themes: - Roof/house with PV system & once the house
                with scaffolding and an advertising banner with our logo. - PV
                module- inverter - PV The graphics should be based on the style
                of Simpleshow. Ideally, however, it can also be used as a
                PowerPoint icon at the same time.
              </div>
              <div className="mb-8">
                <div className="text-[#0D0434] text-[18px] leading-[27px] font-medium mb-4">
                  Attachment
                </div>
                <div className="flex gap-2 items-center mb-4">
                  <LinkIcon className="w-[20px] h-[20px]" />
                  <div className="text-[#0D0434] text-base">
                    kickstar_brief.docs
                  </div>
                </div>
                <div className="flex gap-2 items-center mb-8">
                  <LinkIcon className="w-[20px] h-[20px]" />
                  <div className="text-[#0D0434] text-base">
                    kickstar_brief.docs
                  </div>
                </div>
                {dataSubmissionInformation?.map(
                  (item: FormSubmissionInformationType, index) => {
                    return (
                      <div
                        key={uuidv4()}
                        className=" p-6 bg-[#E6EAF8] rounded mb-6"
                      >
                        <div className="flex justify-between items-center mb-3">
                          <div className="text-[#0D0434] text-[18px] leading-normal font-medium">
                            Submission{' '}
                            {index === 0
                              ? `${index + 1} - ${index + 1}st`
                              : `${index + 1} - ${index + 1}nd`}
                          </div>
                          <div className="flex gap-2 items-center cursor-pointer">
                            <DeleteIcon onClick={() => onDelete(item)} />
                            <EditIcon onClick={() => onEdit(item)} />
                          </div>
                        </div>
                        <div className="text-[#0D0434] text-sm mb-3">
                          {item?.description}
                        </div>
                        <div className="flex gap-4 items-center mb-3">
                          <LinkIcon className="w-[20px] h-[20px]" />
                          <div className="text-[#0D0434] text-base">
                            plan.docs
                          </div>
                        </div>
                        <div className="flex gap-4 items-center">
                          <LinkIcon className="w-[20px] h-[20px]" />
                          <div className="text-[#0D0434] text-base">
                            plan.docs
                          </div>
                        </div>
                      </div>
                    )
                  }
                )}
              </div>
            </div>
            <div
              onClick={addFileSubmission}
              className="flex gap-2 cursor-pointer items-center border-[1.5px] border-dashed  justify-center rounded p-4"
            >
              <div>
                <AddCircle className="w-[20px] h-[20px]" />
              </div>
              <div className="text-[#0A0A0A] text-sm">Add submission file</div>
            </div>
          </div>
          <div className=" w-full lg:w-[35%] h-[600px] border-[#E7E7E7]  rounded-lg border-[1.5px] p-6">
            <div className="text-[#0D0434] font-medium text-2xl mb-[20px]">
              Chat
            </div>
            <div className="chat h-[400px]">
              <div className="flex gap-5 ">
                {/* {messages.map((m, i) => (
                 <div key={i} className="flex flex-col">
                   <div className={`msg${i % 2 !== 0 ? ' dark' : ''}`}>{m}</div>
                   <div className="text-[10px] text-center">
                     10:30, 10/02/2023
                   </div>
                 </div>
               ))} */}
                <Image
                  width={44}
                  height={44}
                  src="/images/default-avatar.png"
                  alt=""
                />
                <div className="text-xs flex items-center text-[#0D0434] px-4 py-1 bg-[#E7E7E7] rounded-[6px] w-fit">
                  Hi
                </div>
              </div>
              <div className="text-[#0D0434] text-[10px] pl-[80px] my-4">
                10:30, 10/02/2023
              </div>
              <div className="flex justify-end gap-5">
                <div className="text-xs flex items-center text-[#0D0434] px-4 py-1 bg-[#E7E7E7] rounded-[6px] w-fit">
                  I need 2 options with green and yellow color
                </div>
                <Image
                  width={44}
                  height={44}
                  src="/images/profile/profile-avatar.png"
                  alt=""
                />
              </div>
              <div className="text-[#0D0434] text-right text-[10px]  my-4 pr-[92px]">
                10:30
              </div>
            </div>
            <div className="footer  text-sm">
              <input
                type="text"
                placeholder="Write a message"
                className="placeholder:text-[#B6B6B6]"
              />
            </div>
          </div>
        </div>
      )}
      {valueEdit && (
        <Modal isOpen={openFormEdit} onClose={() => setOpenFormEdit(false)}>
          <FormSubmissionInformationEdit
            onClose={() => setOpenFormEdit(false)}
            value={valueEdit}
          />
        </Modal>
      )}
    </>
  )
}

export default BindInformation
