import Container from '@/components/themes/container'

import Footer from '@/components/themes/footer'
import HeaderMobile from '@/components/themes/headermobile'
import clsx from 'clsx'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { PropsWithChildren } from 'react'
import Drawer from './drawer'

const Header = dynamic(
  () => {
    return import('@/components/themes/header')
  },
  { ssr: false }
)

const Layout = ({ children }: PropsWithChildren<any>) => {
  const router = useRouter()

  const isHiddenFooter = [
    '/signin',
    '/signup',
    '/forgot-password',
    '/project-detail',
    '/register',
  ].includes(router.route)

  return (
    <>
      <Container>
        <>
          <div className="hidden lg:block">
            <Header />
          </div>
          <div className="block lg:hidden">
            <HeaderMobile />
          </div>
          <main>
            {children} <Drawer />
          </main>
          {!isHiddenFooter && (
            <div className={clsx('hidden md:block')}>
              <Footer />
            </div>
          )}
        </>
      </Container>
    </>
  )
}

export default Layout
