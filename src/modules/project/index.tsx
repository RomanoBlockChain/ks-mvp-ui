import { v4 as uuidv4 } from 'uuid'

import Button from '@/components/forms/button'
import ChevronLeftIcon from '@/icons/chevron-left-icon'
import React, { useMemo, useState } from 'react'
import { skills } from './constants'
import LinkIcon from '@/icons/link-icon'
import BindInformation from './component/bidinformation'
import AllBids from './component/allbids'
import { ProjectApi, ProjectBody } from '@/apis/project'
import useSWRImmutable from 'swr/immutable'
import { isEmpty } from '@/utils/helper'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { useModalContext } from '@/hooks/use-modal-context'

export type StatusType = 'opening' | 'working' | 'done' | 'waiting'

const ProjectDetailModule = () => {
  const router = useRouter()

  const { data: profile }: any = useSession()
  console.log(profile, 'hihi')

  const { setOpenEditProject, openEditProject } = useModalContext()

  const fetchProjectDetail = async (): Promise<ProjectBody> => {
    const { data } = await ProjectApi.getDetail(
      router.query.projectId as string
    )
    return data.data
  }

  const { data: project } = useSWRImmutable(
    { key: 'fetchProjectDetail', id: router.query.projectId },
    router.query.projectId ? fetchProjectDetail : null
  )

  const projectInformationDetail = useMemo(() => {
    if (isEmpty(project))
      return {
        id: 23649,
        posted: '3 mins ago',
        'bind deadline': '12/07/2023',
        'project deadline': 'Flexible',
        Budget: `$3000`,
      }
    return {
      id: project?.projectID,
      posted: '12/05/2023',
      'bind deadline': project?.timeline,
      'project deadline': project?.typeTimeline,
      Budget: `$${project?.amount}`,
    }
  }, [project])

  const statusRender = useMemo(() => {
    if (project?.status === 'done') {
      return <Button className="bg-[#00be9029] !text-[#00BE90]">Done</Button>
    } else if (project?.status === 'working') {
      return <Button className="bg-[#E6EAF8] !text-[#022DB0]">Working</Button>
    } else if (project?.status === 'waiting') {
      ;<Button className="bg-[#FFB31F] !text-[##FFB31F]">Waiting</Button>
    }
    return <Button className="bg-[#E6EAF8] !text-[#022DB0]">Opening</Button>
  }, [project?.status])

  const onEdit = () => {
    setOpenEditProject(true)
  }

  return (
    <div className="mt-[50px]">
      <div className="flex justify-between items-center mb-6">
        <div
          className="flex gap-2 items-center cursor-pointer"
          onClick={() => router.push('/')}
        >
          <div>
            <ChevronLeftIcon />
          </div>
          <div className="text-[#0D0434] text-[32px] leading-[48px] font-semibold">
            Project detail
          </div>
        </div>
        <div>{statusRender}</div>
      </div>
      <div className=" flex gap-8 flex-col lg:flex-row  border-[1.5px] border-[#E7E7E7] p-[20px] rounded-lg mb-6">
        <div className="w-full lg:w-[25%]">
          <div className="text-[#0D0434] text-2xl font-medium mb-6">
            Project information
          </div>
          {projectInformationDetail &&
            Object.entries(projectInformationDetail)?.map(([key, value]) => {
              return (
                <div key={uuidv4()} className="grid grid-cols-2 mb-8">
                  <div className="text-[#B6B6B6] font-normal text-sm capitalize">
                    {key}
                  </div>
                  <div className="text-[#0D0434] font-normal text-sm">
                    {value}
                  </div>
                </div>
              )
            })}
          <div>
            {profile?.user?.typeUser === 'buyer' && (
              <div className=" flex gap-2">
                <Button
                  variant="outline"
                  className="w-[108px] border-[#FF5520] bg-white !text-[#FF5520]"
                >
                  Cancel
                </Button>
                <Button
                  variant="outline"
                  className="w-[108px]"
                  onClick={onEdit}
                >
                  Edit
                </Button>
              </div>
            )}
          </div>
        </div>
        <div className="w-full lg:w-[50%]">
          <div className="text-[#0D0434] text-2xl font-medium mb-6">
            Graphics & Icons for simpleshow videos & PowerPoint
          </div>
          <div className="text-[#0D0434] text-base font-normal ">
            {project?.description || (
              <>
                Hi, we are looking for graphics to use for Simpleshow videos &
                PowerPoints among others.The graphics should illustrate the
                following themes: - Roof/house with PV system & once the house
                with scaffolding and an advertising banner with our logo. - PV
                module- inverter - PV The graphics should be based on the style
                of Simpleshow. Ideally, however, it can also be used as a
                PowerPoint icon at the same time.
              </>
            )}
          </div>
        </div>
        <div className="w-full lg:w-[25%]">
          <div className="flex gap-2 mb-4">
            <div className="text-[#B6B6B6] font-normal text-sm capitalize">
              Category
            </div>
            <div className="text-[#0D0434] text-sm font-medium">
              {project?.category || 'Graphics & Design/Design'}
            </div>
          </div>
          <div className="flex gap-2">
            <div className="text-[#B6B6B6] font-normal text-sm capitalize mb-4">
              Level
            </div>
            <div className="text-[#0D0434] text-sm font-medium">
              {project?.level || 'Expert'}
            </div>
          </div>
          <div className="mb-4 flex items-end gap-2">
            <div className="text-[#B6B6B6] font-normal text-sm capitalize ">
              Skill
            </div>
            <div className="flex items-start flex-wrap gap-2">
              {project?.skill ? (
                project?.skill?.map((item) => {
                  return (
                    <div
                      className="text-[#022DB0] font-medium text-sm  "
                      key={uuidv4()}
                    >
                      {item?.title}
                    </div>
                  )
                })
              ) : (
                <>
                  <div className="text-[#022DB0] font-medium text-sm  ">
                    Design
                  </div>
                  <div className="text-[#022DB0] font-medium text-sm  ">
                    Illustration
                  </div>
                </>
              )}
            </div>
          </div>
          <div>
            <div className="text-[#B6B6B6] font-normal text-sm capitalize mb-[10px]">
              Project document
            </div>
            <div>
              {project?.fileUpload ? (
                project?.fileUpload?.map((item: string) => {
                  return (
                    <div key={uuidv4()} className="flex gap-2 items-center">
                      <LinkIcon className="w-[20px] h-[20px]" />
                      <div className="text-[#0D0434] text-xs text-ellipsis overflow-hidden w-[150px] inline-block whitespace-nowrap">
                        {item}
                      </div>
                    </div>
                  )
                })
              ) : (
                <>
                  <div className="flex gap-2 items-center mb-4">
                    <LinkIcon className="w-[20px] h-[20px]" />
                    <div className="text-[#0D0434] text-xs text-ellipsis overflow-hidden w-[150px] inline-block whitespace-nowrap">
                      kickstar_brief.docs
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <LinkIcon className="w-[20px] h-[20px]" />
                    <div className="text-[#0D0434] text-xs text-ellipsis overflow-hidden w-[150px] inline-block whitespace-nowrap">
                      kickstar_brief.docs
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* {profile?.user?.typeUser === 'seller' ? (
        <BindInformation />
      ) : (
        <AllBids bids={project?.bids || []} />
      )} */}

      <BindInformation />
    </div>
  )
}

export default ProjectDetailModule
