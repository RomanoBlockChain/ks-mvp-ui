import ModalSuccess from '@/components/commons/modalsuccess'
import Button from '@/components/forms/button'
import LinkIcon from '@/icons/link-icon'
import clsx from 'clsx'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const generateMessage = () => {
  const words = [
    'The sky',
    'above',
    'the port',
    'was',
    'the color of television',
    'tuned',
    'to',
    'a dead channel',
    '.',
    'All',
    'this happened',
    'more or less',
    '.',
    'I',
    'had',
    'the story',
    'bit by bit',
    'from various people',
    'and',
    'as generally',
    'happens',
    'in such cases',
    'each time',
    'it',
    'was',
    'a different story',
    '.',
    'It',
    'was',
    'a pleasure',
    'to',
    'burn',
  ]
  const text = []
  let x = 7
  while (--x) text.push(words[Math.floor(Math.random() * words.length)])
  return text.join(' ')
}

const Submission = () => {
  const messageEl: any = useRef(null)
  const [messages, setMessages] = useState('')
  const [status, setStatus] = useState<string>('')
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    if (messageEl) {
      messageEl.current.addEventListener('DOMNodeInserted', (event: any) => {
        const { currentTarget: target } = event
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' })
      })
    }
  }, [])

  // useEffect(() => {
  //   const generateDummyMessage = () => {
  //     setInterval(() => {
  //       setMessages((prevMsg) => [...prevMsg, generateMessage()] as any)
  //     }, 2000)
  //   }
  //   generateDummyMessage()
  // }, [])

  const onAccept = (string: string) => {
    setStatus(string)
    setCount(count + 1)
  }

  const handleDone = () => {
    setCount(0)
    setMessages('Your project is done.')
  }

  return (
    <div className="flex  flex-col lg:flex-row gap-6 overflow-hidden">
      <div className="h-[600px]  w-full lg:w-[25%] relative  border-[#E7E7E7] rounded-lg border-[1.5px] p-6">
        <div>
          <div className="text-[#0D0434] font-medium text-2xl mb-[20px]">
            Payment information
          </div>
          <div className="flex">
            <div className="text-[#B6B6B6] text-sm mb-3 w-[75px]">Price</div>
            <div className="text-[#022DB0] font-medium text-sm">$2500</div>
          </div>
          <div className="flex mb-8">
            <div className="text-[#B6B6B6] text-sm mb-3 w-[75px]">Deposit</div>
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
        <div className="h-[500px] overflow-y-auto">
          <div className="text-sm text-[#0D0434] mb-8 ">
            Build the website for an angel investment company. Scope includes
            Website design. I will provide the content, logo etc Hi, we are
            looking for graphics to use for Simpleshow videos & PowerPoints
            among others.The graphics should illustrate the following themes: -
            Roof/house with PV system & once the house with scaffolding and an
            advertising banner with our logo. - PV module- inverter - PV The
            graphics should be based on the style of Simpleshow. Ideally,
            however, it can also be used as a PowerPoint icon at the same time.
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
            <div
              className={clsx(
                ' p-6  rounded mb-[30px]',
                status === 'accept' ? 'bg-[#E7E7E7]' : 'bg-[#E6EAF8]'
              )}
            >
              <div className="flex justify-between items-center mb-3">
                <div className="text-[#0D0434] text-[18px] leading-normal font-medium">
                  Submission 1-1st
                </div>
                <div className="gap-2 flex">
                  <Button className="bg-[#FF5520] w-[90px] !font-normal">
                    Reject
                  </Button>
                  <Button
                    className="!bg-[#00BE90] w-[90px] !font-normal"
                    onClick={() => onAccept('accept')}
                    disabled={status === 'accept'}
                  >
                    Accept
                  </Button>
                </div>
              </div>
              <div className="text-[#0D0434] text-sm mb-3">
                Hi, there, this is 1st round proposal, please see attachment
              </div>
              <div className="flex gap-4 items-center">
                <LinkIcon className="w-[20px] h-[20px]" />
                <div className="text-[#0D0434] text-base">plan.docs</div>
              </div>
            </div>

            <div
              className={clsx(
                ' p-6  rounded mb-[50px]',
                status === 'accept2' ? 'bg-[#E7E7E7]' : 'bg-[#E6EAF8]'
              )}
            >
              <div className="flex justify-between items-center mb-3">
                <div className="text-[#0D0434] text-[18px] leading-normal font-medium">
                  Submission 1-2nd
                </div>
                <div className="gap-2 flex">
                  <Button className="bg-[#FF5520] w-[90px] !font-normal">
                    Reject
                  </Button>
                  <Button
                    className="!bg-[#00BE90] w-[90px] !font-normal"
                    onClick={() => onAccept('accept2')}
                    disabled={status === 'accept2'}
                  >
                    Accept
                  </Button>
                </div>
              </div>
              <div className="text-[#0D0434] text-sm mb-3">
                Hi, there, this is 1st round proposal, please see attachment
              </div>
              <div className="flex gap-4 items-center">
                <LinkIcon className="w-[20px] h-[20px]" />
                <div className="text-[#0D0434] text-base">plan.docs</div>
              </div>
            </div>
            <div className="text-[#00BE90] text-center text-xs">
              {messages && messages}
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full lg:w-[35%] h-[600px] border-[#E7E7E7]  rounded-lg border-[1.5px] p-6">
        <div className="text-[#0D0434] font-medium text-2xl mb-[20px]">
          Chat
        </div>
        <div className="chat h-[400px]">
          <div className="flex gap-5 " ref={messageEl}>
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

      <ModalSuccess
        title="Confirm your project completed successfully, pay fully for your seller"
        isOpen={count === 2}
        onClose={() => setCount(0)}
        active="update"
        footer={
          <div className="w-full flex flex-col gap-3">
            <Button
              className="w-full h-[56px]"
              rounded="default"
              onClick={handleDone}
            >
              Yes, everything is good
            </Button>
            <Button
              onClick={handleDone}
              className="w-full h-[56px]"
              rounded="default"
              variant="outline"
            >
              Cancel
            </Button>
          </div>
        }
      />
    </div>
  )
}

export default Submission
