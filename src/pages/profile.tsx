import Layout from '@/layouts/Layout'
import dynamic from 'next/dynamic'

const HeroModule = dynamic(
  () => {
    return import('@/components/profile/Hero')
  },
  { ssr: false }
)
const BodyModule = dynamic(
  () => {
    return import('@/components/profile/Body')
  },
  { ssr: false }
)

export const Profile = () => {
  return (
    <Layout>
      <section className=''>
        <HeroModule></HeroModule>
        <BodyModule></BodyModule>
      </section>
    </Layout>
  )
}

export default Profile
