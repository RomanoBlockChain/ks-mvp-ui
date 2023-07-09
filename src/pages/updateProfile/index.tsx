import { RegisterAPI } from '@/apis/register'
import { Register } from '@/apis/signup'
import { getProfileAPI } from '@/apis/user'
import Button from '@/components/forms/button'
import { LOCAL_STORAGE_KEY_PROFILE } from '@/components/themes/header'
import useSyncLocalStorage from '@/hooks/use-sync-localstorage'
import BackIcon from '@/icons/back-icon'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { toast } from 'react-toastify'
import useSWR from 'swr'
import PersonalInformationForm from './PersonalInformationForm'
import ProfressonalInformationForm from './ProfressonalInformationForm'
import RegisterSuccess from './RegisterSuccess'
import WalletInformationForm from './WalletInformationForm'

const UpdateProfile = () => {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [wallet, setWallet] = useState('')
  const [postData, setPostData] = useState({} as any)
  const fetchProfileData = async () => {
    try {
      const response = await getProfileAPI()
      return response.data
    } catch (error: any) {
      throw error.response.data
    }
  }
  const { data, error } = useSWR('profileData', fetchProfileData)

  const [profile, _] = useSyncLocalStorage<Register | undefined>(
    LOCAL_STORAGE_KEY_PROFILE,
    undefined
  )
  const handlePost = async () => {
    const { professonalInfo, personalInfo } = postData

    const body = {
      username: profile?.username,
      email: profile?.email,
      addresWallet: wallet,
      // fileupload:' professonalInfo?.fileupload',
      // createdDate: 'd',
      typeProfile: '0',
      firstName: personalInfo?.firstName,
      lastName: personalInfo?.lastName,
      phone: personalInfo?.phone,
      language: personalInfo?.language[0]?.language?.name,
      levelLanguage: personalInfo?.language[0]?.level?.name,
      nation: personalInfo?.location[0]?.nation?.name,
      city: personalInfo?.location[0]?.city?.name,
      ocupation: professonalInfo?.occupation,
      description: professonalInfo?.description,
      experience: professonalInfo?.experience?.name,
      education: professonalInfo?.education[0]?.school,
      major: professonalInfo?.education[0]?.major,
      certificate: professonalInfo?.certificate[0]?.cow,
      certificateOrigin: professonalInfo?.certificate[0]?.from,
      // //MOCK DATA
      // avatar: 'a',
      // earned: 'a',
      // profileID: 'a',
      // projectDone: 'a',
      // rateDoneBuyer: 'a',
      // rateDoneProjectSeller: 'a',
      // ratingBuyer: 'a',
      // totalComon: 'a',
    }
    const formData = new FormData()
    for (const [key, value] of Object.entries(body)) {
      // if(key === 'fileupload') {
      //   formData.append(key,value,value.name)
      //     console.log(value,value.name)
      // }
      // else
      formData.append(key, value)
    }

    const { data } = await RegisterAPI.register(body)
    if (data.isSucceeded) {
      toast.success('Update profile successfully')
      router.push('/')
    }
  }

  return (
    <>
      {step !== 0 && step !== 4 && (
        <div className="mx-[33px] mt-[60px] md:mx-[60px] mb-[100px]">
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold mb-8">
              {' '}
              {profile?.typeUser === 'buyer' ? 'Buyer' : 'Seller'} information
            </h1>
            <div
              className="text-sm cursor-pointer hidden md:block"
              onClick={() => setStep(step + 1)}
            >
              Skip
            </div>
          </div>
          <div className="block lg:flex ">
            <div className="mb-5 lg:mb-0">
              <div
                onClick={() => setStep(1)}
                className={clsx(
                  'text-sm py-3  w-[280px] min-[1025px]:w-384 pl-7 border-solid border-l-4 border-[transparent] cursor-pointer',
                  step === 1
                    ? 'bg-[#E6EAF8] text-[#022DB0] font-medium border-[#022DB0!important] '
                    : 'text-[#b6b6b6]'
                )}
              >
                1. Add personal information
              </div>
              <div
                onClick={() => setStep(2)}
                className={clsx(
                  'text-sm py-3 w-[280px] min-[1025px]:w-384 pl-7 border-solid border-l-4 border-[transparent] cursor-pointer',
                  step === 2
                    ? 'bg-[#E6EAF8] text-[#022DB0] font-medium border-[#022DB0!important] '
                    : 'text-[#b6b6b6]'
                )}
              >
                2. Add professional information{' '}
              </div>
              <div
                onClick={() => setStep(3)}
                className={clsx(
                  'text-sm py-3 w-[280px] min-[1025px]:w-384 pl-7 border-solid border-l-4 border-[transparent] cursor-pointer',
                  step === 3
                    ? 'bg-[#E6EAF8] text-[#022DB0] font-medium border-[#022DB0!important] '
                    : 'text-[#b6b6b6]'
                )}
              >
                3. Add wallet information
              </div>
            </div>
            <PersonalInformationForm
              onContinue={() => setStep(step + 1)}
              isShow={step === 1}
              setPostData={setPostData}
              postData={postData}
              data={data}
            />
            <ProfressonalInformationForm
              onContinue={() => setStep(step + 1)}
              isShow={step === 2}
              setPostData={setPostData}
              postData={postData}
              data={data}
            />
            <WalletInformationForm
              data={data}
              isShow={step === 3}
              wallet={wallet}
              setWallet={setWallet}
            />
          </div>

          {step === 3 && (
            <div className="flex justify-center lg:justify-end mt-36">
              <Button
                type="submit"
                className="w-[280px] h-[50px] rounded-md"
                onClick={() => {
                  handlePost()
                }}
              >
                Continue
              </Button>
            </div>
          )}
          <div
            className=" hidden lg:flex mt-[-40px] cursor-pointer"
            onClick={() => setStep(step - 1)}
          >
            <BackIcon className="mr-4" />
            Back
          </div>
        </div>
      )}

      {step === 4 && <RegisterSuccess />}
    </>
  )
}

export default UpdateProfile
