import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Tags, { MultiValue } from 'react-select'

import Input from '@/components/forms/input'
import Checkbox from '@/components/forms/checkbox'
import InformationIcon from '@/icons/information-icon'
import Textarea from '@/components/forms/textarea'
import Select from '@/components/forms/select'
import UploadFile from '@/components/commons/uploadfile'
import Radio from '@/components/forms/radio'
import { timeline } from './constants'
import Calendar from '@/components/forms/calendar'
import Button from '@/components/forms/button'
import ModalSuccess from '@/components/commons/modalsuccess'
import {
  TagsOption,
  categories,
  level,
  tags,
  type,
  unit,
} from '@/constants/project'
import { SubmitHandler, useForm } from 'react-hook-form'
import { OptionType } from '@/components/forms/dropdown'
import { useRouter } from 'next/router'
import { useModalContext } from '@/hooks/use-modal-context'
import { ProjectApi, ProjectBody } from '@/apis/project'
import useSWRImmutable from 'swr/immutable'

interface IFormPostProject {
  project_title: string
  description: string
  amount: string
  duration: number
  level: OptionType
  category: OptionType
  skill: MultiValue<TagsOption>
  type: OptionType
  unit: OptionType
  timeLine: any
}

// eslint-disable-next-line react/display-name
const PostProject = React.forwardRef(() => {
  const [files, setFiles] = useState<any[]>([])
  const [openSuccess, setOpenSuccess] = useState<boolean>(false)
  const router = useRouter()
  const { setOpen } = useModalContext()
  const [calendar, setCalendar] = useState<string>()
  const { data: profile } = useSWRImmutable('getProfile')
  const [projectId, setProjectId] = useState<string>()

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    getValues,
    formState: { errors },
  } = useForm<IFormPostProject>()

  const handleCategories = (category: OptionType) => {
    setValue('category', category)
    clearErrors('category')
  }

  useEffect(() => {
    register('category', { required: 'This field is required' })
    register('level', { required: 'This field is required' })
    register('type', { required: 'This field is required' })
    register('unit', { required: 'This field is required' })
    register('timeLine', { required: 'This field is required' })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleFiles = (files: any[]) => {
    setFiles(files)
  }
  const onHandleChecked = (check: boolean, item: any) => {
    setValue('timeLine', { ...item, checked: check })
    clearErrors('timeLine')
  }

  const handleSkill = (skill: MultiValue<TagsOption>) => {
    console.log(skill)

    setValue('skill', skill)
    clearErrors('skill')
  }

  const handleLevel = (level: OptionType) => {
    setValue('level', level)
    clearErrors('level')
  }

  const handleType = (type: OptionType) => {
    setValue('type', type)
    clearErrors('type')
  }

  const handleUnit = (unit: OptionType) => {
    setValue('unit', unit)
    clearErrors('unit')
  }

  const handleCalender = (e: any) => {
    setCalendar(e.target.value)
  }

  const onSubmit: SubmitHandler<IFormPostProject> = async (data) => {
    try {
      const newData = new FormData()
      newData.append('projectTitle', data?.project_title)
      newData.append('userid', profile?.userId)
      newData.append('priority', 'checked')
      newData.append('description', data?.description)
      newData.append('category', data?.category.value)
      data?.skill.forEach((item) => newData.append('skill', item.value))
      newData.append('level', data?.level?.value)
      newData.append('typeTimeline', data?.timeLine?.name)
      newData.append('timeline', calendar as string)
      newData.append('unit', data?.unit.value)
      newData.append('budgetType', data?.type.value)
      newData.append('amount', data.amount)

      for (const file of files) {
        newData.append('fileUpload', file)
      }
      const { data: res } = await ProjectApi.postProject(newData)
      setProjectId(res.data)

      setOpenSuccess(true)
    } catch (error) {}
  }

  const onViewDetail = () => {
    router.push(`/project-detail?projectId=${projectId}`)
    setOpen(false)
    setOpenSuccess(false)
  }

  return (
    <div className="overflow-y-auto h-[850px] lg:h-[750px] xl:h-[650px]">
      <div className="px-[50px] grid grid-cols-1 lg:grid-cols-2 gap-[50px] mb-11 lg:mb-0 ">
        <div>
          <div className="text-[#022DB0] font-medium text-[20px] leading-[30px]">
            Brief
          </div>
          <div className="mb-[20px]">
            <Input
              placeholder="Project tittle"
              id="project_tittle"
              {...register('project_title', {
                required: 'This field is required',
                maxLength: { value: 50, message: 'No more than 50 characters' },
              })}
              error={errors?.project_title?.message}
            />
          </div>
          <div>
            <div className="mb-1">
              <Checkbox
                onChange={() => {}}
                checked={false}
                title="Post a as prioritize project"
              />
            </div>
            <div className="flex gap-1 items-center">
              <InformationIcon />
              <div className="text-[#0D0434] text-[10px] leading-5 font-normal">
                Prioritize project is bla bla bla bla bla bla bla bla, expense
              </div>
            </div>
          </div>
          <div className="mb-[20px]">
            <Textarea
              placeholder="Description"
              id="description"
              rows={8}
              {...register('description', {
                required: 'This field is required',
                maxLength: {
                  value: 2000,
                  message: 'No more than 50 characters',
                },
              })}
              error={errors?.description?.message}
            />
          </div>
          <div className="mb-[20px]">
            <Select
              options={categories}
              selected={getValues('category')}
              placeholder="Category"
              onChange={handleCategories}
              type="parent"
            />
            {errors && (
              <div className="text-sm text-red-600 mt-2">
                {errors.category?.message}
              </div>
            )}
          </div>
          <div className="mb-[20px] border-[#022DB0] border-[1.5px] rounded">
            {!!getValues('skill')?.length && (
              <div className="px-[15px] pt-1 text-[#0D0434] text-sm">Skill</div>
            )}
            <Tags
              value={getValues('skill')}
              isMulti
              options={tags}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  border: 'none',
                }),
              }}
              isSearchable
              onChange={handleSkill}
              placeholder="Skill"
              className=" w-full p-[8px] text-sm font-normal  "
            />
          </div>
          <div className="mb-[20px]">
            <Select
              options={level}
              selected={getValues('level')}
              placeholder="Level"
              onChange={handleLevel}
            />
            {errors && (
              <div className="text-sm text-red-600 mt-2">
                {errors.level?.message}
              </div>
            )}
          </div>
          <div>
            <UploadFile files={files} onChange={handleFiles} limit={5} />
          </div>
        </div>
        <div>
          <div className="text-[#022DB0] font-medium text-[20px] leading-[30px] mb-[20px]">
            Timeline
          </div>
          <div className="grid grid-cols-2">
            <div>
              {timeline?.map((item, idx) => {
                return (
                  <div key={uuidv4()} className="mb-[42px]">
                    <Radio
                      checked={
                        getValues('timeLine')?.name === item?.name &&
                        getValues('timeLine')?.checked === true
                      }
                      onChange={(checked) => onHandleChecked(checked, item)}
                      title={item?.name}
                    />
                  </div>
                )
              })}
              {errors && (
                <div className="text-sm text-red-600">
                  {errors?.timeLine?.message as string}
                </div>
              )}
            </div>
            <div>
              <div className="mt-[-25px] mb-[20px]">
                <Input
                  placeholder="Input duration"
                  id="input_duration"
                  type="number"
                  {...register('duration', {
                    max: {
                      value: 1000,
                      message: 'No more than 1000 ',
                    },
                  })}
                  error={errors?.duration?.message}
                />
              </div>
              <Calendar onChange={handleCalender} />
            </div>
          </div>
          <div>
            <div className="text-[#022DB0] font-medium text-[20px] leading-[30px] mb-[20px]">
              Budget
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div>
                <Select
                  options={type}
                  selected={getValues('type')}
                  placeholder="Type"
                  onChange={handleType}
                />
                {errors && (
                  <div className="text-sm text-red-600 mt-[6px]">
                    {errors.type?.message}
                  </div>
                )}
              </div>
              <Input
                placeholder="Amount"
                id="Amount"
                {...register('amount', {
                  required: 'This field is required',
                  maxLength: {
                    value: 20,
                    message: 'No more than 20 characters',
                  },
                })}
                error={errors?.amount?.message}
              />
              <div>
                <Select
                  options={unit}
                  placeholder="Unit"
                  selected={getValues('unit')}
                  onChange={handleUnit}
                />
                {errors && (
                  <div className="text-sm text-red-600 mt-2">
                    {errors.unit?.message}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end px-[50px] mb-[50px]">
        <Button
          onClick={handleSubmit(onSubmit)}
          rounded="default"
          className="w-[282px] h-[56px]"
        >
          Post
        </Button>
      </div>
      <ModalSuccess
        title="Post project successfully!"
        isOpen={openSuccess}
        onClose={() => setOpenSuccess(false)}
        onClick={onViewDetail}
      />
    </div>
  )
})

export default PostProject
