import { SubmitHandler, useForm } from 'react-hook-form'
import React, { useEffect, useState } from 'react'

import UploadFile from '@/components/commons/uploadfile'
import Input from '@/components/forms/input'
import Select from '@/components/forms/select'
import Textarea from '@/components/forms/textarea'
import { type, unit } from './constants'
import Button from '@/components/forms/button'
import ModalSuccess from '@/components/commons/modalsuccess'
import { OptionType } from '@/components/forms/dropdown'
import { useRouter } from 'next/router'
import { useModalContext } from '@/hooks/use-modal-context'

type FormBindType = {
  title: string
  cover_letter: string
  type: OptionType
  amount: string
  unit: OptionType
  times: string
  additional: string
}

const PostBind = () => {
  const [files, setFile] = useState<any[]>([])
  const [openMessage, setOpenMessage] = useState<boolean>(false)
  const router = useRouter()
  const { setOpenBind } = useModalContext()

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    getValues,
    formState: { errors },
  } = useForm<FormBindType>()

  const handleFile = (files: any) => {
    setFile([...files])
  }

  const handleUnit = (unit: OptionType) => {
    setValue('unit', unit)
    clearErrors('unit')
  }

  const handleType = (type: OptionType) => {
    setValue('type', type)
    clearErrors('type')
  }

  useEffect(() => {
    register('type', { required: 'This field is required' })
    register('unit', { required: 'This field is required' })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // c573b1d1-4b18-4ca2-8f8d-bf5a2332ea44
  const onSubmit: SubmitHandler<FormBindType> = (data) => {
    setOpenBind(false)
    setOpenMessage(true)
  }

  return (
    <div className="grid grid-cols-1 overflow-y-auto xl:grid-cols-2 gap-10 p-[50px] h-[700px] lg:h-[750px] xl:h-[650px]">
      <div>
        <div className="text-[#022DB0] mb-[20px] font-medium text-[20px] leading-[30px]">
          Bid information
        </div>
        <div>
          <div className="mb-[20px]">
            <Input
              placeholder="Title"
              {...register('title', {
                required: 'This field is required',
                maxLength: { value: 50, message: 'No more than 50 characters' },
              })}
              error={errors?.title?.message}
            />
          </div>
          <div className="mb-[20px]">
            <Textarea
              placeholder="Cover letter"
              rows={5}
              {...register('cover_letter', {
                required: 'This field is required',
                maxLength: {
                  value: 500,
                  message: 'No more than 500 characters',
                },
              })}
              error={errors?.cover_letter?.message}
            />
          </div>
          <div className="mb-[20px]">
            <UploadFile files={files} onChange={handleFile} limit={5} />
          </div>
        </div>
      </div>
      <div>
        <div className="text-[#022DB0] mb-[20px] font-medium text-[20px] leading-[30px]">
          Price
        </div>
        <div className="grid grid-cols-3 gap-5 mb-[50px]">
          <div>
            <Select
              options={type}
              selected={getValues('type') as any}
              placeholder="Type"
              onChange={handleType}
            />
            {errors && (
              <div className="text-sm text-red-600 mt-2">
                {errors.type?.message}
              </div>
            )}
          </div>
          <div>
            <Input
              placeholder="Amount"
              {...register('amount', {
                required: 'This field is required',
                maxLength: { value: 50, message: 'No more than 50 characters' },
              })}
            />
          </div>
          <div>
            <Select
              options={unit}
              selected={getValues('unit')}
              placeholder="Unit"
              onChange={handleUnit}
            />
            {errors && (
              <div className="text-sm text-red-600 mt-2">
                {errors.unit?.message}
              </div>
            )}
          </div>
        </div>
        <div className="lg:mb-[100px] mb-3">
          <div className="text-[#022DB0] mb-[20px] font-medium text-[20px] leading-[30px]">
            Revise
          </div>
          <div className="mb-[30px]">
            <Input
              placeholder="Times"
              {...register('times', {
                required: 'This field is required',
                maxLength: { value: 2, message: 'No more than 2 characters' },
              })}
              error={errors?.times?.message}
            />
          </div>
          <div className="mb-[20px]">
            <Input
              placeholder="Additional"
              {...register('additional', {
                required: 'This field is required',
                maxLength: { value: 2, message: 'No more than 2 characters' },
              })}
              error={errors?.additional?.message}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            rounded="default"
            onClick={handleSubmit(onSubmit)}
            className="h-[56px] w-full lg:w-[282px]"
          >
            Send
          </Button>
        </div>
      </div>
      <ModalSuccess
        isOpen={openMessage}
        onClick={() => {
          router.push('project-detail')
          setOpenMessage(false)
        }}
        onClose={() => setOpenMessage(false)}
        title="Send bid successfully!"
      />
    </div>
  )
}

export default PostBind
