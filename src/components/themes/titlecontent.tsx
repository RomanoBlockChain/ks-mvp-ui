import Link from 'next/link'
import React from 'react'

type TitleContentProps = {
  title: string
}

const TitleContent = () => {
  return (
    <div className="bg-[#E6EAF8] py-[10px] text-center">
      <div className="text-base font-medium text-[#0A0A0A] ">
        Are you{' '}
        <Link className="text-[#022DB0]" href="">
          builing a project
        </Link>{' '}
        or{' '}
        <Link href="" className="text-[#022DB0]">
          find a job
        </Link>
        ? Join us
      </div>
    </div>
  )
}

export default TitleContent
