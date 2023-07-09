import React from 'react'

import Button from '@/components/forms/button'
import Input from '@/components/forms/input'
import GoogleIcon from '@/icons/google-icon'
import FacebookIcon from '@/icons/facebook-icon'
import { useForm } from 'react-hook-form'

type FormLoginProps = {
  loading?: boolean
  handleContinue: (value: any) => void
  onGoogle?: () => void
  onFaceBook?: () => void
}

const FormLogin = ({
  handleContinue,
  onGoogle,
  onFaceBook,
  loading,
}: FormLoginProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>()

  return (
    <section className="text-center max-w-xl m-auto p-6">
      <div>
        <h1 className="text-4xl font-semibold my-5">Welcome to Kickstar</h1>
        <div className="mb-3">
          <Input
            placeholder="Email"
            {...register('email', {
              required: 'This field is required',
              maxLength: { value: 50, message: 'No more than 50 characters ' },
            })}
            error={errors?.email?.message}
          />
        </div>
        <Button
          onClick={handleSubmit((d) => handleContinue(d))}
          className="w-full"
          size="large"
          rounded="default"
          isLoading={loading}
        >
          Continue
        </Button>
      </div>
      <div className="text-[#0D0434] font-normal text-sm py-4 flex justify-center">
        or
      </div>
      <div className="flex flex-col gap-4">
        <Button
          onClick={onGoogle}
          variant="outline"
          rounded="default"
          className="w-full"
          size="large"
          icon={<GoogleIcon />}
        >
          Continue with Google
        </Button>
        <Button
          onClick={onFaceBook}
          variant="outline"
          rounded="default"
          className="w-full"
          size="large"
          icon={<FacebookIcon fill="#1877F2" className="w-6 h-6" />}
        >
          Continue with Facebook
        </Button>
      </div>
    </section>
  )
}

export default FormLogin
