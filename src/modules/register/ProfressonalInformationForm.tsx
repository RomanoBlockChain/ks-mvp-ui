import UploadButton from '@/components/commons/uploadButton'
import Button from '@/components/forms/button'
import Input from '@/components/forms/input'
import Select from '@/components/forms/select'
import Textarea from '@/components/forms/textarea'
import AddIcon from '@/icons/add-icon'
import DeleteIcon from '@/icons/delete-icon'
import URLIcon from '@/icons/url-icon'
import { yupResolver } from '@hookform/resolvers/yup'
import clsx from 'clsx'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

export interface ProfessonalInformation {
  occupation: string
  description: string
  portfolio: string
  experience: any
  skill: any
  education: any
  certificate: any
}
const experience = [
  { name: '1-2 years', value: '0' },
  { name: '2-3 years', value: '1' },
]
const skill = [
  { name: 'Design', value: '0' },
  { name: 'Code', value: '1' },
]
const level = [
  { name: 'Intermediate', value: '0' },
  { name: 'Advanced', value: '1' },
]

const professonalInfoSchema = Yup.object().shape({
  occupation: Yup.string().required('Occupation is required'),
})
const ProfressonalInformationForm = ({
  onContinue,
  isShow,
  setPostData,
  postData,
}: any) => {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(professonalInfoSchema),
  })
  const onSubmit = (data: any) => {
    setPostData({
      ...postData,
      professonalInfo: {
        ...professonalInfo,
        ...data,
        fileupload: file,
      },
    })
    onContinue()
  }

  const [professonalInfo, setProfessonalInfo] =
    useState<ProfessonalInformation>({
      occupation: '',
      description: '',
      portfolio: '',
      experience: null as any,
      skill: [] as any,
      education: [] as any,
      certificate: [] as any,
    })

  const handleChangeProfesonalInfo = (
    field: keyof ProfessonalInformation,
    value: ProfessonalInformation[keyof ProfessonalInformation]
  ) => {
    setProfessonalInfo({ ...professonalInfo, [field]: value })
  }
  const [skillRows, setSkillRows] = useState(1)
  const [educationRows, setEducationRows] = useState(1)
  const [certificateRows, setCertificateRows] = useState(1)
  const [file, setFile] = useState<any>(null)

  const handleFile = (file: any) => {
    setFile(file)
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={clsx('w-full', isShow || 'hidden')}
      noValidate
    >
        <div className='w-full pl-0 lg:pl-[60px] xl:pl-[120px]'>
        <div className='font-medium text-[#022DB0] text-xl mb-1'>About</div>
        <Input
          placeholder="Occupation*"
          id="occupation"
          {...register('occupation')}
          onChange={(e: any) => setValue('occupation', e.target.value)}
        />
        <p
          className={clsx(
            'text-red-400 text-sm mt-3',
            errors?.occupation || 'invisible'
          )}
        >
          {errors?.occupation?.message?.toString()}
        </p>
        <Textarea
          className="h-[120px]"
          placeholder="Description"
          value={professonalInfo.description}
          onChange={(e: any) =>
            handleChangeProfesonalInfo('description', e.target.value)
          }
        />
        <div className="flex justify-between items-center w-full mt-12">
          <div className="font-medium text-[#022DB0] text-xl my-4">
            Portfolio
          </div>
          <UploadButton file={file} onChange={handleFile} limit={5} />
        </div>
        <div className="font-medium text-[#022DB0] text-xl mb-1 mt-12">
          Experience
        </div>
        <Select
          placeholder="Experience"
          className="my-4"
          options={experience}
          onChange={(option) => {
            handleChangeProfesonalInfo('experience', option)
          }}
          selected={professonalInfo.experience}
        />
        <div className='flex justify-between items-center w-full mt-12 mb-2'>
          <div className='font-medium text-[#022DB0] text-xl my-4'>Skill</div>
          <Button
            className='bg-[#E6EAF8] w-[150px] text-[#022DB0]  h-[44px] text-sm rounded-full flex items-center'
            size='large'
            rounded='default'
            variant='outline'
            type='button'
            onClick={() => {
              setSkillRows(skillRows + 1)
            }}
            icon={<AddIcon className="w-[20px] h-[20px]" />}
          >
            <AddIcon className='w-[20px] h-[20px] inline-block mr-1 mb-1' /> Add
          </Button>
        </div>
        {Array.from(Array(skillRows).keys()).map(
          (item: number, index: number) => (
            <div className='block lg:grid  grid-cols-delete gap-3' key={item}>
              <Select
                placeholder="Skill"
                className="my-4"
                options={skill}
                onChange={(option) => {
                  const skills: any = [...professonalInfo.skill]
                  skills[index] = {
                    ...skills[index],
                    skill: option,
                  }
                  handleChangeProfesonalInfo('skill', skills)
                }}
                selected={professonalInfo.skill[index]?.skill}
              />
              <Select
                placeholder="Level"
                className="my-4"
                options={level}
                onChange={(option) => {
                  const skills: any = [...professonalInfo.skill]
                  skills[index] = {
                    ...skills[index],
                    level: option,
                  }
                  handleChangeProfesonalInfo('skill', skills)
                }}
                selected={professonalInfo.skill[index]?.level}
              />
              <div className="flex items-center justify-end pr-2 cursor-pointer">
                <DeleteIcon
                  onClick={() => {
                    setSkillRows(skillRows - 1)
                    const skills: any = [...professonalInfo.skill].filter(
                      (_, i) => i !== index
                    )
                    handleChangeProfesonalInfo('skill', skills)
                  }}
                />
              </div>
            </div>
          )
        )}

        <div className='flex justify-between items-center w-full mt-12 mb-2'>
          <div className='font-medium text-[#022DB0] text-xl my-4'>
            Education
          </div>
          <Button
            className='bg-[#E6EAF8] w-[150px] text-[#022DB0]  h-[44px] text-sm rounded-full flex items-center'
            size='large'
            rounded='default'
            variant='outline'
            type='button'
            onClick={() => {
              setEducationRows(educationRows + 1)
            }}
            icon={<AddIcon className="w-[20px] h-[20px]" />}
          >
            <AddIcon className='w-[20px] h-[20px]  inline-block mr-1 mb-1' />{' '}
            Add
          </Button>
        </div>
        {Array.from(Array(educationRows).keys()).map(
          (item: number, index: number) => (
            <div
              className='grid grid-cols-delete gap-3 gap-y-[10px]'
              key={item}
            >
              <Input
                placeholder='School'
                className='mb-[20px]'
                value={professonalInfo?.education[index]?.school}
                onChange={(e: any) => {
                  const educations: any = [...professonalInfo.education]
                  educations[index] = {
                    ...educations[index],
                    school: e.target.value,
                  }
                  handleChangeProfesonalInfo('education', educations)
                }}
              />
              <Input
                placeholder='Major'
                className='mb-[20px]'
                value={professonalInfo?.education[index]?.major}
                onChange={(e: any) => {
                  const educations: any = [...professonalInfo.education]
                  educations[index] = {
                    ...educations[index],
                    major: e.target.value,
                  }
                  handleChangeProfesonalInfo('education', educations)
                }}
              />
              <div className="flex items-center justify-end pr-2 cursor-pointer">
                <DeleteIcon
                  onClick={() => {
                    setEducationRows(educationRows - 1)
                    const educations: any = [
                      ...professonalInfo.education,
                    ].filter((_, i) => i !== index)
                    handleChangeProfesonalInfo('education', educations)
                  }}
                />
              </div>
            </div>
          )
        )}

        <div className='flex justify-between items-center w-full mt-12 mb-2'>
          <div className='font-medium text-[#022DB0] text-xl my-4'>
            Certificate
          </div>
          <Button
            className='bg-[#E6EAF8] w-[150px] text-[#022DB0]  h-[44px] text-sm rounded-full flex items-center'
            size='large'
            rounded='default'
            variant='outline'
            type='button'
            onClick={() => {
              setCertificateRows(certificateRows + 1)
            }}
            icon={<AddIcon className="w-[20px] h-[20px]" />}
          >
            <AddIcon className='w-[20px] h-[20px]  inline-block mr-1 mb-1' />{' '}
            Add
          </Button>
        </div>
        {Array.from(Array(certificateRows).keys()).map(
          (item: number, index: number) => (
            <div className="grid grid-cols-delete gap-3" key={item}>
              <Input
                placeholder='Certificate or Award'
                className=' mb-[20px]'
                value={professonalInfo?.certificate[index]?.cow}
                onChange={(e: any) => {
                  const certificates: any = [...professonalInfo.certificate]
                  certificates[index] = {
                    ...certificates[index],
                    cow: e.target.value,
                  }
                  handleChangeProfesonalInfo('certificate', certificates)
                }}
              />
              <Input
                placeholder='From'
                className=' mb-[20px]'
                value={professonalInfo?.certificate[index]?.from}
                onChange={(e: any) => {
                  const certificates: any = [...professonalInfo.certificate]
                  certificates[index] = {
                    ...certificates[index],
                    from: e.target.value,
                  }
                  handleChangeProfesonalInfo('certificate', certificates)
                }}
                suffix={<URLIcon className="absolute top-[1rem] right-3" />}
              />
              <div className="flex items-center justify-end pr-2 cursor-pointer">
                <DeleteIcon
                  onClick={() => {
                    setCertificateRows(certificateRows - 1)
                    const certificates: any = [
                      ...professonalInfo.certificate,
                    ].filter((_, i) => i !== index)
                    handleChangeProfesonalInfo('certificate', certificates)
                  }}
                />
              </div>
            </div>
          )
        )}
      </div>
      <div className='flex justify-center lg:justify-end mt-36'>
        <Button type='submit' className='w-[280px] h-[50px] rounded-md'>
          Continue
        </Button>
      </div>
    </form>
  )
}

export default ProfressonalInformationForm
