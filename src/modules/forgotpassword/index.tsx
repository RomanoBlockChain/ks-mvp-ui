import { useRouter } from 'next/router'
import React from 'react'

import Button from '@/components/forms/button'
import Input from '@/components/forms/input'
import CheckCircle from '@/icons/check-circle'
import FormLogin from '../signin/form'

const ForgotPasswordModule = () => {
  const [step, setStep] = React.useState(0)
  const router = useRouter()

  return (
    <div className="mt-[84px]">
      {step === 0 && <FormLogin handleContinue={() => setStep(step + 1)} />}
      {step === 1 && (
        <section className="text-center max-w-xl m-auto p-6">
          <h1 className="text-4xl font-semibold my-5">Sign up to Kickstar</h1>
          <Input
            type="password"
            placeholder="OTP"
            style={{ marginBottom: '1rem' }}
          />
          <Button
            className="w-full"
            size="large"
            rounded="default"
            onClick={() => setStep(step + 1)}
          >
            Continue
          </Button>
        </section>
      )}
      {step === 2 && (
        <section className="text-center max-w-xl m-auto p-6">
          <h1 className="text-4xl font-semibold my-5">Sign up to Kickstar</h1>
          <Input
            type="password"
            placeholder="Password"
            style={{ marginBottom: '1rem' }}
          />
          <Input
            type="password"
            placeholder="Retype password"
            style={{ marginBottom: '1rem' }}
          />
          <Button
            className="w-full"
            size="large"
            rounded="default"
            onClick={() => setStep(step + 1)}
          >
            Confirm
          </Button>
        </section>
      )}
      {step === 3 && (
        <section className="text-center max-w-xl m-auto p-6">
          <div className="flex justify-center mb-5">
            <CheckCircle className="w-[60px] h-[60px]" />
          </div>
          <h1 className="text-[20px] font-bold my-5 text-[#050544] mb-[44px]">
            Create account successfully!
          </h1>
          <Button
            className="w-full my-5"
            size="large"
            rounded="default"
            onClick={() => router.push('/signin')}
          >
            Sign In
          </Button>
        </section>
      )}
    </div>
  )
}

export default ForgotPasswordModule
