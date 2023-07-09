import clsx from 'clsx'
import Button from '../forms/button'
import Link from 'next/link'

export const Card = ({ className }: any) => {
  return (
    <div
      className={clsx(
        className,
        'bg-white border border-[#e7e7e7]-200 rounded-lg shadow p-[30px] w-full mb-4 lg:mb-0'
      )}
    >
      <div className='text-[20px] text-bold'>
        <Link href={'/project-detail'}>Graphic Design </Link>
      </div>
      <div className='my-6 text-[12px] lg:text-[14px]'>
        Yield Guild Games (YGG) is a decentralized autonomous organization (DAO)
        that invests in NFTs used in virtual worlds and blockchain-based
        games...
      </div>

      <a href='#'>
        <img
          className='w-full h-[160px]'
          src='https://edison365.com/wp-content/uploads/2022/03/How-do-hackathons-work.png'
          alt='product image'
        />
      </a>
      <div className='mt-6'>
        <div className='flex items-center justify-between'>
          <div className='flex text-[12px] lg:text-[14px]'>
            5.0
            <svg
              aria-hidden='true'
              className='w-5 h-5 text-yellow-300 ml-1'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>First star</title>
              <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
            </svg>
            <div className='text-[#cecece] ml-1'>(219)</div>
          </div>
          <div className='flex items-center'>
            <div className='text-[12px]'>from</div>
            <div className=' text-[12px] lg:text-[16px] ml-2'> 2,000 USDT</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card
