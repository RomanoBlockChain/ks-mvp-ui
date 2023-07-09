import Button from '@/components/forms/button'
import DoneIcon from '@/icons/done-icon'
import Link from 'next/link'

const RegisterSuccess = () => {
  return (
    <div className='mx-[33px] mt-[80px] md:mx-[60px] mb-[100px] text-center'>
      <div className='text-center'>
        <DoneIcon className='mx-auto' />
      </div>
      <div className='text-[#050544] text-[20px] mt-3 mb-7 font-medium'>
        All done!
      </div>
      <Link href={'/'}>
        <Button
          className='mb-3 mx-auto  text-white w-[280px] lg:w-384 relative '
          size='large'
          rounded='default'
          variant='solid'
        >
          Find a job
        </Button>
      </Link>
    </div>
  )
}

export default RegisterSuccess
