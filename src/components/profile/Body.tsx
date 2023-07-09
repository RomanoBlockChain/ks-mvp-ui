import { getProfileAPI } from '@/apis/user'
import dynamic from 'next/dynamic'
import { styled } from 'styled-components'
import useSWR from 'swr'

const AsideModule = dynamic(
  () => {
    return import('@/components/profile/Aside')
  },
  { ssr: false }
)
const MainModule = dynamic(
  () => {
    return import('@/components/profile/Main')
  },
  { ssr: false }
)

const BodyStyled = styled.section`
  display: flex;
  gap: 24px;
  @media (max-width: 1023px) {
    display: block;
  }
  aside {
    width: 384px;
    @media (max-width: 1023px) {
      width: auto;
    }
  }
  main {
    flex: 1;
  }
`

const Body = () => {
  // useEffect(() => {
  //   let token = ''
  //   if (typeof window !== 'undefined') {
  //     token = JSON.parse(localStorage.getItem('user') || '')?.token
  //   }
  //   setBearerToken(token)
  // }, [])
  const fetchProfileData = async () => {
    // let token = ''
    // if (typeof window !== 'undefined') {
    //   token = JSON.parse(localStorage.getItem('user') || '')?.token
    // }
    try {
      const response = await getProfileAPI()
      return response.data
    } catch (error: any) {
      throw error.response.data
    }
  }
  const { data, error } = useSWR('profileData', fetchProfileData)
  return (
    <BodyStyled>
      <AsideModule data={data}></AsideModule>
      <MainModule></MainModule>
    </BodyStyled>
  )
}

export default Body
