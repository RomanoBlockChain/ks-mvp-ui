import ModalSuccess from '@/components/commons/modalsuccess'
import Button from '@/components/forms/button'
import useSyncLocalStorage from '@/hooks/use-sync-localstorage'
import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FormSubmissionInformationType } from './formsubmissioninformation'
import UploadFile from '@/components/commons/uploadfile'
import Checkbox from '@/components/forms/checkbox'
import { useModalContext } from '@/hooks/use-modal-context'
import Textarea from '@/components/forms/textarea'

type FormSubmissionInformationEditPropsType = {
  value: FormSubmissionInformationType
  onClose: () => void
}

const FormSubmissionInformationEdit = ({
  value,
  onClose,
}: FormSubmissionInformationEditPropsType) => {
  console.log(value)

  const [checked, setChecked] = useState<boolean>(false)
  const { setOpenSubmissionFile } = useModalContext()
  const [open, setOpen] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    getValues,
    reset,
    formState: { errors },
  } = useForm<FormSubmissionInformationType>()

  const [dataSubmissionInformation, setDataSubmissionInformation] =
    useSyncLocalStorage<any[] | FormSubmissionInformationType[]>(
      'dataSubmissionInformation',
      []
    )

  const handleFiles = (files: any) => {
    setValue('files', files)
    clearErrors('files')
  }

  useEffect(() => {
    register('checked', { required: 'This field is required' })
    setValue('description', value.description)
    register('files', { required: 'This field is required' })
    setValue('files', value.files)
    setValue('checked', value.checked)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleCheckbox = () => {
    setChecked(!checked)
    setValue('checked', !checked)
    clearErrors('checked')
  }

  const onSubmit: SubmitHandler<FormSubmissionInformationType> = (data) => {
    setDataSubmissionInformation(
      dataSubmissionInformation.map((item: FormSubmissionInformationType) => {
        if (JSON.stringify(item) === JSON.stringify(data)) {
          return data
        }
        return item
      })
    )
    onClose()
    setOpen(true)
  }
  return (
    <div className="p-[50px]">
      <div className="mb-6">
        <Textarea
          placeholder="Description"
          rows={4}
          {...register('description', {
            required: 'This field is required',
            maxLength: {
              value: 10000,
              message: 'No more than 10000 characters',
            },
          })}
          error={errors.description?.message}
        />
      </div>
      <div className="mb-6">
        <div className="mb-3">
          <UploadFile files={getValues('files')} onChange={handleFiles} />
        </div>
        <div className="text-sm text-red-600">
          {errors?.files?.message as string}
        </div>
      </div>
      <div className="mb-[90px]">
        <div className="mb-3">
          <Checkbox
            onChange={handleCheckbox}
            checked={getValues('checked')}
            title="Mark as final submission"
          />
        </div>
        <div className="text-sm text-red-600">{errors.checked?.message}</div>
      </div>

      <div className="flex justify-end" onClick={handleSubmit(onSubmit)}>
        <Button rounded="default" className="w-[170px] h-[56px]">
          Submit
        </Button>
      </div>

      <ModalSuccess
        title="Update submission successfully!"
        isOpen={open}
        onClose={() => setOpen(false)}
        active="update"
      />
    </div>
  )
}

export default FormSubmissionInformationEdit
