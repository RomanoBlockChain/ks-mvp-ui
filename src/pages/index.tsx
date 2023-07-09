import HomeLayout from '@/layouts/homelayout'
import dynamic from 'next/dynamic'

const HomeModule = dynamic(
  () => {
    return import('@/modules/home')
  },
  { ssr: false }
)

export default function Home() {
  return (
    <HomeLayout
      siteSettings={{
        seo: {
          title: 'Home',
          description: '',
          favicon: '',
          keywords: '',
          ogImage: '',
        },
        urlRedirect: {
          from: '',
          to: '',
        },
      }}
    >
      <HomeModule />
    </HomeLayout>
  )
}
