import MetamaskIcon from '@/icons/metamask-icon'
import { useRouter } from 'next/router'
import { styled } from 'styled-components'
import Button from '../forms/button'

const AvatarStyled = styled.div`
  margin: auto;
  background: url('/images/profile/profile-avatar.png');

  border-radius: 999px;
  width: 160px;
  height: 160px;
  margin-bottom: 24px;
  position: absolute;
  left: 0;
  right: 0;
  top: -75px;
`

const InformationStyled = styled.div`
  .name {
    justify-content: center;
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 39px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #0d0434;
  }
  .id {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #0d0434;
  }
  .tag {
    margin-top: 16px;
    margin-bottom: 16px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px 8px;
    gap: 5px;
    width: 100px;
    height: 20px;
    background: rgba(0, 190, 144, 0.16);
    border-radius: 1000px;
    span {
      padding-left: 12px;
      padding-right: 12px;
      font-weight: 400;
      font-size: 10px;
      line-height: 20px;
      text-align: center;
      color: #00be90;
    }
  }
  .major {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #0d0434;
  }
  .description {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #0d0434;
  }
`

const ProfileButtonStyled = styled.div`
  display: flex;
  justify-content: center;
`

const AboutStyled = styled.div`
  .about {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #022db0;
  }
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 48px;
    label {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #b6b6b6;
    }
    p {
      text-align: end;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #0d0434;
    }
  }
  .skills {
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: 8px;
  }
  .tag-skill {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 8px;
    width: 74px;
    height: 36px;
    background: #e6eaf8;
    border-radius: 1000px;
    span {
      padding-left: 12px;
      padding-right: 12px;
      font-weight: 500;
      font-size: 12px;
      line-height: 20px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #022db0;
    }
  }
`
const ProjectStyled = styled.div`
  .project {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #022db0;
  }
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    label {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #b6b6b6;
    }
    p {
      text-align: end;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #0d0434;
    }
  }
  .skills {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .tag-skill {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 8px;
    width: 74px;
    height: 36px;
    background: #e6eaf8;
    border-radius: 1000px;
    span {
      font-weight: 500;
      font-size: 12px;
      line-height: 20px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #022db0;
    }
  }
`

const AsideStyled = styled.aside`
  padding-top: 100px;
  padding-bottom: 50px;
  padding-left: 34px;
  padding-right: 34px;
  background: #ffffff;
  border: 1.5px solid #e7e7e7;
  border-radius: 0px 0px 12px 12px;
  position: relative;
  border-top: transparent;
  height: fit-content;
`

export const Aside = ({ data }: any) => {
  const profile = data?.data?.profile[data?.data?.profile?.length - 1]
  const router = useRouter()
  return (
    <AsideStyled>
      <section>
        <AvatarStyled></AvatarStyled>

        <InformationStyled>
          <p className='name'>
            {profile?.firstName} {profile?.lastName}
          </p>
          <p className='id'>ID: {data?.data?.id}</p>
          <p className='tag'>
            <span>KYC level 3</span>
          </p>
          <p className='major'>{profile?.ocupation}</p>
          <p className='description my-5'>{profile?.description}</p>
        </InformationStyled>
        <ProfileButtonStyled className='my-5'>
          <Button variant='outline'>
            {' '}
            {profile?.firstName} {profile?.lastName}’s Porfolio
          </Button>
        </ProfileButtonStyled>
      </section>

      <AboutStyled>
        <div className='about'>About</div>
        <section>
          <div className='row my-5'>
            <label>Email</label>
            <p>{profile?.email}</p>
          </div>
          <div className='row my-5'>
            <label>Phone</label>
            <p>{profile?.phone}</p>
          </div>
          <div className='row my-5'>
            <label>Wallet</label>
            <p className='flex items-center'>
              <MetamaskIcon className='mr-2' />{' '}
              {profile?.addresWallet?.slice(0, 8)}...
              {profile?.addresWallet?.slice(36, 42)}
            </p>
          </div>
          <div className='row my-5'>
            <label>Location</label>
            <p>
              {profile?.city}, {profile?.nation}
            </p>
          </div>
          <div className='row my-5'>
            <label>Language</label>
            <p>
              {profile?.language} - {profile?.levelLanguage}
            </p>
          </div>
          <div className='row my-5'>
            <label>Education</label>
            <p>
              {profile?.major}, {profile?.education}
            </p>
          </div>
          <div className='row my-5'>
            <label>Experience</label>
            <p> {profile?.experience}</p>
          </div>
          <div className='row my-5'>
            <label>Skill</label>
            <div className='skills'>
              <div className='tag-skill'>
                <span>Design</span>
              </div>
              <div className='tag-skill'>
                <span>Illustration</span>
              </div>
            </div>
          </div>
          <div className='row my-5'>
            <label>Certificate</label>
            <p>
              {profile?.certificate} of {profile?.certificateOrigin}
            </p>
          </div>
        </section>
      </AboutStyled>

      <ProjectStyled>
        <div className='project'>Projects</div>
        <section>
          <div className='row my-5'>
            <label>Earned</label>
            <p>${profile?.earned || 0}</p>
          </div>
          <div className='row my-5'>
            <label>Done</label>
            <p>{profile?.projectDone || 0}</p>
          </div>
          <div className='row my-5'>
            <label>Rating</label>
            <p className='flex'>
              {profile?.ratingBuyer || 0}{' '}
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-yellow-300'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Fifth star</title>
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
              </svg>
            </p>
          </div>
          <div className='row my-5'>
            <label>Done rate</label>
            <p>{profile?.rateDoneProjectSeller || 0}%</p>
          </div>
        </section>
        <Button
          className='mx-auto bg-[#E6EAF8] w-full text-[#022DB0]  h-[54px] mt-3 text-sm '
          size='large'
          rounded='default'
          variant='outline'
          onClick={() => router.push('/updateProfile')}
        >
          Edit Profile
        </Button>
      </ProjectStyled>
    </AsideStyled>
  )
}

export default Aside
