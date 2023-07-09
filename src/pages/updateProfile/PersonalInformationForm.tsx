import Button from '@/components/forms/button'
import Input from '@/components/forms/input'
import Select from '@/components/forms/select'
import AddIcon from '@/icons/add-icon'
import DeleteIcon from '@/icons/delete-icon'
import NotVerifiedIcon from '@/icons/not-verified-icon'
import VerifiedIcon from '@/icons/verified-icon'
import { yupResolver } from '@hookform/resolvers/yup'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
const language = [
  { name: 'Vietnamese', value: '0' },
  { name: 'French', value: '1' },
]
const level = [
  { name: 'Native', value: '0' },
  { name: 'Advanced', value: '1' },
]
const nation = [
  { name: 'Vietnam', value: '0' },
  { name: 'America', value: '1' },
]
const city = [
  { name: 'Ho Chi Minh', value: '0' },
  { name: 'London', value: '1' },
]
export interface PersonalInformation {
  firstName: string
  lastName: string
  phone: string
  email: string
  verifyType?: 0 | 1
  isVerify: boolean
  language: any
  location: any
}

const personalInfoSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First Name is required')
    .min(1, 'First Name is required'),
  lastName: Yup.string()
    .required('Last Name is required')
    .min(1, 'Last Name is required'),
  phone: Yup.string().matches(/^\d{10}$/, 'Phone number must be 10 digits'),
  email: Yup.string()
    .required('Email is required')
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      'Invalid email address'
    ),
})
const PersonalInformationForm = ({
  onContinue,
  isShow,
  setPostData,
  postData,
  data,
}: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(personalInfoSchema),
  })

  const onSubmit = (data: any) => {
    onContinue()
    setPostData({
      ...postData,
      personalInfo: {
        ...personalInfo,
        ...data,
      },
    })
  }

  const [personalInfo, setPersonalInfo] = useState<PersonalInformation>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    verifyType: undefined,
    isVerify: true,
    language: [] as any,
    location: [] as any,
  })
  const handleChangePersonalInfo = (
    field: keyof PersonalInformation,
    value: PersonalInformation[keyof PersonalInformation]
  ) => {
    setPersonalInfo({ ...personalInfo, [field]: value })
  }
  const [languageRows, setLanguageRows] = useState(1)
  useEffect(() => {
    setValue(
      'firstName',
      data?.data?.profile[data?.data?.profile?.length - 1]?.firstName
    )
    setValue(
      'lastName',
      data?.data?.profile[data?.data?.profile?.length - 1]?.lastName
    )
    setValue(
      'phone',
      data?.data?.profile[data?.data?.profile?.length - 1]?.phone
    )
    setValue(
      'email',
      data?.data?.profile[data?.data?.profile?.length - 1]?.email
    )
    setPersonalInfo({
      ...personalInfo,
      language: [
        {
          language: {
            name: data?.data?.profile[data?.data?.profile?.length - 1]
              ?.language,
          },
          level: {
            name: data?.data?.profile[data?.data?.profile?.length - 1]
              ?.levelLanguage,
          },
        },
      ],
      location: [
        {
          nation: {
            name: data?.data?.profile[data?.data?.profile?.length - 1]?.nation,
          },
          city: {
            name: data?.data?.profile[data?.data?.profile?.length - 1]?.city,
          },
        },
      ],
    })
  }, [data])
  console.log({ personalInfo })
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={clsx('w-full', isShow || 'hidden')}
        noValidate
      >
        <div className='w-full pl-0 lg:pl-[60px] xl:pl-[120px]'>
          <div className='font-medium text-[#022DB0] text-xl mb-1'>Name</div>
          <div className='block lg:grid grid-cols-2 gap-3'>
            <Input
              placeholder='First name*'
              id='firstName'
              {...register('firstName')}
              onChange={(e: any) => setValue('firstName', e.target.value)}
              className='mb-4 lg:mb-0'
            />
            <p
              className={clsx(
                'text-red-400 text-sm mt-3',
                errors?.firstName || 'invisible',
                'block lg:hidden  mt-0 mb-3 lg:mt-3 lg:mb-0'
              )}
            >
              {errors?.firstName?.message?.toString()}
            </p>
            <Input
              placeholder='Last name*'
              id='lastName'
              {...register('lastName')}
              onChange={(e: any) => setValue('lastName', e.target.value)}
            />
          </div>
          <div className='block lg:grid grid-cols-2 gap-3'>
            <p
              className={clsx(
                'text-red-400 text-sm',
                errors?.firstName || 'invisible',
                'hidden lg:block mt-0 lg:mt-3'
              )}
            >
              {errors?.firstName?.message?.toString()}
            </p>
            <p
              className={clsx(
                'text-red-400 text-sm mt-3',
                errors?.lastName || 'invisible'
              )}
            >
              {errors?.lastName?.message?.toString()}
            </p>
          </div>

          <div className='font-medium text-[#022DB0] text-xl mb-1 mt-12'>
            Information verification
          </div>
          <Input
            placeholder='Phone number'
            className='mb-1'
            {...register('phone')}
            onChange={(e: any) => setValue('phone', e.target.value)}
            suffix={
              !errors?.phone ? (
                <VerifiedIcon className='absolute top-[15px] right-3' />
              ) : (
                <NotVerifiedIcon className='absolute top-[15px] right-3' />
              )
            }
          />
          <p
            className={clsx(
              'text-red-400 text-sm mt-3 mb-3 lg:mt-0',
              errors?.phone || 'invisible'
            )}
          >
            {errors?.phone?.message?.toString()}
          </p>
          <Input
            placeholder='Email*'
            className='mb-1'
            {...register('email')}
            onChange={(e: any) => setValue('email', e.target.value)}
            suffix={
              !errors?.email ? (
                <VerifiedIcon className='absolute top-[15px] right-3' />
              ) : (
                <NotVerifiedIcon className='absolute top-[15px] right-3' />
              )
            }
          />
          <p
            className={clsx(
              'text-red-400 text-sm mt-3',
              errors?.email || 'invisible'
            )}
          >
            {errors?.email?.message?.toString()}
          </p>
          {personalInfo.isVerify ? (
            <Input
              className='mb-1'
              value='Verified KYC'
              suffix={<VerifiedIcon className='absolute top-[15px] right-3' />}
            />
          ) : (
            <div className='block lg:grid grid-cols-40-40-20 gap-3'>
              <div
                className='flex justify-start items-center border-[#022DB0] border-solid border-[1.5px] pl-3 h-[54px] mt-4 rounded cursor-pointer'
                onClick={() => handleChangePersonalInfo('verifyType', 0)}
              >
                <input
                  type='radio'
                  className='mr-4'
                  checked={personalInfo.verifyType === 0}
                />
                <div className='text-[#3B3B3B] text-sm'>
                  Verify KYC on this device
                </div>
              </div>
              <div
                className='flex justify-start items-center border-[#022DB0] border-solid border-[1.5px] pl-3 h-[54px] mt-4 rounded cursor-pointer'
                onClick={() => handleChangePersonalInfo('verifyType', 1)}
              >
                <input
                  type='radio'
                  className='mr-4'
                  checked={personalInfo.verifyType === 1}
                />
                <div className='text-[#3B3B3B] text-sm'>
                  Verify KYC on others
                </div>
              </div>
              <div className='flex'>
                <Button
                  className='mx-auto bg-[#E6EAF8] w-full text-[#022DB0]  h-[54px] mt-3 text-sm rounded-full'
                  size='large'
                  rounded='default'
                  variant='outline'
                  onClick={() => handleChangePersonalInfo('isVerify', true)}
                >
                  Verify
                </Button>
              </div>
            </div>
          )}

          <div className='flex justify-between items-center w-full mt-12 mb-2'>
            <div className='font-medium text-[#022DB0] text-xl my-4'>
              Language
            </div>
            <Button
              className='bg-[#E6EAF8] w-[150px] text-[#022DB0]  h-[44px] text-sm rounded-full flex items-center'
              size='large'
              rounded='default'
              variant='outline'
              type='button'
              onClick={() => {
                setLanguageRows(languageRows + 1)
              }}
            >
              <AddIcon className='w-[20px] h-[20px] inline-block mr-1 mb-1 ' />{' '}
              Add
            </Button>
          </div>
          {Array.from(Array(languageRows).keys()).map(
            (item: number, index: number) => (
              <div className='grid grid-cols-delete gap-3' key={item}>
                <Select
                  placeholder='Language'
                  className='my-4'
                  options={language}
                  onChange={option => {
                    const languages: any = [...personalInfo.language]
                    languages[index] = {
                      ...languages[index],
                      language: option,
                    }
                    handleChangePersonalInfo('language', languages)
                  }}
                  selected={personalInfo.language[index]?.language}
                />
                <Select
                  placeholder='Level'
                  className='my-4'
                  options={level}
                  onChange={option => {
                    const languages: any = [...personalInfo.language]
                    languages[index] = {
                      ...languages[index],
                      level: option,
                    }
                    handleChangePersonalInfo('language', languages)
                  }}
                  selected={personalInfo.language[index]?.level}
                />
                <div
                  className={clsx(
                    'flex items-center justify-end pr-2 cursor-pointer'
                  )}
                >
                  <DeleteIcon
                    onClick={() => {
                      setLanguageRows(languageRows - 1)
                      const languages: any = [...personalInfo.language].filter(
                        (_, i) => i !== index
                      )
                      handleChangePersonalInfo('language', languages)
                    }}
                  />
                </div>
              </div>
            )
          )}

          <div className='font-medium text-[#022DB0] text-xl mt-12'>
            Location
          </div>
          <div className='grid grid-cols-delete gap-3'>
            <Select
              placeholder='Nation'
              className='my-4'
              options={nation}
              onChange={option => {
                const locations: any = [...personalInfo.location]
                locations[0] = {
                  ...locations[0],
                  nation: option,
                }
                handleChangePersonalInfo('location', locations)
              }}
              selected={personalInfo.location[0]?.nation}
            />
            <Select
              placeholder='City'
              className='my-4'
              options={city}
              onChange={option => {
                const locations: any = [...personalInfo.location]
                locations[0] = {
                  ...locations[0],
                  city: option,
                }
                handleChangePersonalInfo('location', locations)
              }}
              selected={personalInfo.location[0]?.city}
            />
            <div className='flex items-center justify-end pr-2'>
              <DeleteIcon />
            </div>
          </div>
        </div>
        <div className='flex justify-center lg:justify-end mt-36'>
          <Button type='submit' className='w-[280px] h-[50px] rounded-md'>
            Continue
          </Button>
        </div>
      </form>
    </>
  )
}

export default PersonalInformationForm
