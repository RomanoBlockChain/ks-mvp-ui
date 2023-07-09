import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

import Button from '@/components/forms/button'
import Input from '@/components/forms/input'
import FormLogin from './form'
import useSyncLocalStorage from '@/hooks/use-sync-localstorage'
import { LOCAL_STORAGE_KEY_PROFILE } from '@/components/themes/header'
import { useForm } from 'react-hook-form'
import { SignInApi } from '@/apis/signin'
import { Register } from '@/apis/signup'
import { toast } from 'react-toastify'
import setAuthToken from '@/apis'
import { getProviders, getSession, signIn } from 'next-auth/react'

const SignInModule = () => {
  const [step, setStep] = useState(0)
  const router = useRouter()
  const [formLogin, setFormLogin] = useState<{
    email: string
    password: string
  }>()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ password: string }>()

  const [_, setProfile] = useSyncLocalStorage<Register | undefined>(
    LOCAL_STORAGE_KEY_PROFILE,
    undefined
  )

  const handleEmail = ({ email }: any) => {
    setFormLogin({ email, password: '' })
    setStep(step + 1)
  }

  const handlePassword = async ({ password }: { password: string }) => {
    signIn('credentials', {
      email: formLogin?.email,
      password,
    })
  }

  return (
    <div className="mt-[84px]">
      {step === 0 && <FormLogin handleContinue={handleEmail} />}
      {step === 1 && (
        <section className="text-center max-w-xl m-auto p-6">
          <h1 className="text-4xl font-semibold mb-5">Sign up to Kickstar</h1>
          <div className="mb-3">
            <Input
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
          <Button
            className="w-full"
            size="large"
            rounded="default"
            onClick={handleSubmit(handlePassword)}
          >
            Continue
          </Button>
          <p className="my-7 text-xs text-[#050544]">
            <Link href={'/forgot-password'}>Forgot password</Link>
          </p>
        </section>
      )}
    </div>
  )
}

export default SignInModule
