import React, { useMemo } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { mockDataProject, mockDataServices } from './constant'
import CardText from './cardtext'
import CardPost from '@/components/commons/cardpost'
import CardImage from './cardimage'
import LinkIcon from '@/icons/link-icon'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useModalContext } from '@/hooks/use-modal-context'
import useSyncLocalStorage from '@/hooks/use-sync-localstorage'
import { useSession } from 'next-auth/react'
import { UserApi } from '@/apis/user'
import useSWRImmutable from 'swr/immutable'

type RenderHomeRoleTypeProps = {
  role?: string
}

const RenderHomeRole = ({ role }: RenderHomeRoleTypeProps) => {
  const router = useRouter()
  const { setOpen, setOpenDetailProject, setOpenBind } = useModalContext()
  const { data }: any = useSession()

  const getProfile = async () => {
    const { data } = await UserApi.getProfile()
    return data.data
  }

  const { data: profile } = useSWRImmutable(
    { key: 'getProfile', token: data?.user?.token },
    data?.user?.token ? getProfile : null
  )

  const onPostProject = () => {
    if (profile?.profile?.length > 0) {
      setOpen(true)
      return
    }
    router.push('/register')
    return
  }

  const title = (title: string, other?: string) => {
    return (
      <div className="flex justify-between items-center">
        <div className="text-[#0A0A0A] text-[32px] leading-[48px] font-normal">
          {title}
        </div>
        <div className="text-[#022DB0] text-base cursor-pointer">{other}</div>
      </div>
    )
  }

  const onDetailProject = () => {
    setOpenDetailProject(true)
  }

  console.log(profile?.profile?.length)

  const onBind = (e: any) => {
    e.stopPropagation()
    if (profile?.profile?.length > 0) {
      setOpenBind(true)
      return
    }
    router.push('/register')
    return
  }

  return !role ? (
    <div>
      <div className="mb-[60px]">
        <div className="mb-8">{title('Opening Projects', 'See more')}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div
            onClick={() => {
              router.push('signin')
            }}
          >
            <CardPost title="Post a project" />
          </div>
          {mockDataProject?.map((item) => {
            return (
              <CardText
                onClick={() => setOpenDetailProject(true)}
                onBind={(e: any) => {
                  e.stopPropagation()
                  router.push('signin')
                }}
                key={uuidv4()}
                item={item}
              />
            )
          })}
        </div>
      </div>
      <div>
        <div className="mb-8">{title('Services', 'See more')}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div>
            <CardPost title="Add a service" />
          </div>
          {mockDataServices?.map((item) => {
            return (
              <CardImage
                onBook={(e: any) => {
                  e.stopPropagation()
                  router.push('signin')
                }}
                key={uuidv4()}
                item={item}
              />
            )
          })}
        </div>
      </div>
    </div>
  ) : role === 'buyer' ? (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
        <CardPost onClick={onPostProject} title="Post a project" />
        <CardPost onClick={onDetailProject} title="Post a prioritize project" />
        <div className="flex items-center gap-2 justify-center border-[1.5px] min-h-[250px]  border-[#E7E7E7] rounded-lg">
          <div>
            <LinkIcon />
          </div>
          <Link href="" className="text-xl font-medium text-[#0A0A0A]">
            Link your project with{' '}
            <div className="text-[#022DB0]">Kickstar Incubator</div>
          </Link>
        </div>
      </div>
      <div className="mb-[60px]">
        <div className="mb-8">{title('Saved', 'See all')}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {mockDataServices?.map((item, idx) => {
            if (idx < 3) {
              return <CardImage key={uuidv4()} item={item} />
            }
          })}
        </div>
      </div>
      <div>
        <div className="mb-8">{title('Services', '')}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {mockDataServices?.map((item, idx) => {
            return <CardImage key={uuidv4()} item={item} />
          })}
        </div>
      </div>
    </div>
  ) : (
    <div>
      <div className="mb-[60px]">
        <div className="mb-8">{title('Your Services', 'See all')}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div>
            <CardPost title="Add service" />
          </div>
          {mockDataServices?.map((item, idx) => {
            if (idx < 2) {
              return (
                <CardImage
                  onBook={(e: any) => {
                    e.stopPropagation()
                    router.push('register')
                  }}
                  key={uuidv4()}
                  item={item}
                />
              )
            }
          })}
        </div>
      </div>
      <div className="mb-[60px]">
        <div className="mb-8">{title('Opening projects', '')}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {mockDataProject?.map((item) => {
            return (
              <CardText
                onClick={onDetailProject}
                onBind={onBind}
                key={uuidv4()}
                item={item}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default RenderHomeRole
