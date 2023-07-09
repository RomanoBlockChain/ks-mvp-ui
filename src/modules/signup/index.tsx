import Link from 'next/link'
import { useForm } from 'react-hook-form'

import { Register, SignUpApi } from '@/apis/signup'
import Button from '@/components/forms/button'
import Input from '@/components/forms/input'
import { LOCAL_STORAGE_KEY_PROFILE } from '@/components/themes/header'
import useSyncLocalStorage from '@/hooks/use-sync-localstorage'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import FormLogin from '../signin/form'
import setAuthToken from '@/apis'
import { signIn } from 'next-auth/react'

let error: string

const SignUpModule = () => {
  const {
    register: registerOtp,
    handleSubmit: handleSubmitOtp,
    formState: { errors: errorsOtp },
  } = useForm<{ opt: string }>()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ password: string; retypePassword: string }>()

  const [step, setStep] = React.useState(0)
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const [user, setUser] = useState<Register>({
    username: '',
    password: '',
    avatar: '',
    email: '',
    facebook: '',
    gmail: '',
    typeUser: '',
    token: 'USDT',
    status: 'string',
  })

  const handleEmail = async ({ email }: any) => {
    setLoading(true)
    try {
      if (email) {
        setUser({ ...user, email })
        const result = await SignUpApi.getOTP(email)
        setStep(step + 1)
        setLoading(false)
        console.log(result)
      }
    } catch (error) {
      setLoading(false)
    }
  }

  const handleOtp = (otp: any) => {
    setStep(step + 1)
  }

  const handlePassword = (value: {
    password: string
    retypePassword: string
  }) => {
    if (value?.password !== value?.retypePassword) {
      error = 'Password and retype password  do not match'
      return
    }
    setUser({ ...user, password: value?.password })
    setStep(step + 1)
    return
  }

  const handleRole = async (role: string) => {
    try {
      const { data } = await SignUpApi.register({ ...user, typeUser: role })
      if (data?.isSucceeded) {
        await signIn('credentials', {
          email: user?.email,
          password: user.password,
        })
        return
      }
    } catch (error) {}
  }

  return (
    <div className="mt-[84px]">
      {step === 0 && (
        <FormLogin loading={loading} handleContinue={handleEmail} />
      )}
      {step === 1 && (
        <section className="text-center max-w-xl m-auto p-6">
          <h1 className="text-4xl font-semibold my-5">Sign up to Kickstar</h1>
          <div className="mb-3">
            <Input
              type="text"
              placeholder="OTP"
              {...registerOtp('opt', { required: 'This field is required' })}
              error={errorsOtp?.opt?.message}
            />
          </div>
          <Button
            className="w-full"
            size="large"
            rounded="default"
            onClick={handleSubmitOtp(handleOtp)}
          >
            Continue
          </Button>
          <p className="my-7 text-xs text-[#050544]">
            Haven’t received? <span className="text-[#022DB0]"></span>
            <Link href={'/forgot-password'}>Resend OTP</Link>
          </p>
        </section>
      )}
      {step === 2 && (
        <section className="text-center max-w-xl m-auto p-6">
          <h1 className="text-4xl font-semibold my-5">Sign up to Kickstar</h1>
          <div className="mb-3">
            <Input
              id="password"
              type="password"
              placeholder="Password"
              {...register('password', {
                required: 'This field is required',
                maxLength: {
                  value: 50,
                  message: 'No more than 50 characters ',
                },
              })}
              error={errors?.password?.message}
            />
          </div>
          <div className="mb-3">
            <Input
              type="password"
              id="Retype password"
              placeholder="Retype password"
              {...register('retypePassword', {
                required: 'This field is required',
                maxLength: {
                  value: 50,
                  message: 'No more than 50 characters ',
                },
              })}
              error={errors?.retypePassword?.message || error}
            />
          </div>
          <Button
            className="w-full"
            size="large"
            rounded="default"
            onClick={handleSubmit(handlePassword)}
          >
            Confirm
          </Button>
        </section>
      )}
      {step === 3 && (
        <section className="text-center max-w-xl m-auto p-6">
          <h1 className="text-[20px] font-semibold my-2 text-[#050544]">
            Create account successfully!
          </h1>
          <p className="text-[14px] my-2 text-[#050544]">Continue as a</p>
          <Button
            variant="outline"
            className="w-full my-5"
            size="large"
            rounded="default"
            onClick={() => handleRole('buyer')}
          >
            Buyer
          </Button>
          <Button
            variant="outline"
            className="w-full my-5"
            size="large"
            rounded="default"
            onClick={() => handleRole('seller')}
          >
            Seller
          </Button>
        </section>
      )}
    </div>
  )
}

export default SignUpModule
