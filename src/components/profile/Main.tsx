import clsx from 'clsx'
import { useState } from 'react'
import { styled } from 'styled-components'
import Button from '../forms/button'
import Card from './Card'
import useSyncLocalStorage from '@/hooks/use-sync-localstorage'
import { LOCAL_STORAGE_KEY_PROFILE } from '../themes/header'
import { Register } from '@/apis/signup'

const CardStyled = styled.section`
  gap: 24px;
  flex-wrap: wrap;
  margin-top: 24px;
  .card {
    width: calc(50% - 12px);
    @media (max-width: 1023px) {
      width: 100%;
    }
  }
`

export default function Main () {
  let [tab, setTab] = useState(0)
  const [profile, _] = useSyncLocalStorage<Register | undefined>(
    LOCAL_STORAGE_KEY_PROFILE,
    undefined
  )
  const classNameStatus = {
    active:
      'inline-block p-0 lg:p-4 mt-4 lg:mt-0 border-b-2 rounded-t-lg dark:border-[#022DB0] border-[#022DB0] text-[#022DB0]',
    default:
      'inline-block  p-0 lg:p-4 mt-4  lg:mt-0 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300',
  }

  return (
    <div className='w-full px-2 lg:py-16 sm:px-0'>
      <section className='gap-2 flex lg:hidden mt-6 mb-2 justify-center'>
        <Button
          className='px-4 h-[48px] mr-2 text-xs w-[110px] lg:text-sm lg:w-[144px]'
          size='small'
          variant='outline'
        >
          Promote
        </Button>
        <Button
          className='px-4 h-[48px] text-xs w-[110px] lg:text-sm lg:w-[144px]'
          size='small'
        >
          Book
        </Button>
      </section>
      <div className='text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 flex justify-between'>
        <ul className='flex mb-px'>
          {(profile?.typeUser == 'buyer'
            ? [
                'Opening (3)',
                'Processing (12)',
                'Closed (2)',
                'Saved (2)',
                'Draft (2)',
              ]
            : ['Service (3)', 'Done (12)', 'Cancel (2)']
          ).map((tabText, index) => {
            return (
              <li
                className='mr-2 text-[10px] md:text-[12px] xl:text-sm'
                onClick={() => setTab(index)}
                key={index}
              >
                <a
                  href='#'
                  className={clsx(
                    index === tab
                      ? classNameStatus.active
                      : classNameStatus.default
                  )}
                >
                  {tabText}
                </a>
              </li>
            )
          })}
        </ul>
        <section className='gap-2 hidden lg:flex'>
          <Button
            className='px-4 h-[48px] mr-2 text-xs w-[110px] lg:text-sm lg:w-[144px]'
            size='small'
            variant='outline'
          >
            Promote
          </Button>
          <Button
            className='px-4 h-[48px] text-xs w-[110px] lg:text-sm lg:w-[144px]'
            size='small'
          >
            Book
          </Button>
        </section>
      </div>
      <CardStyled className='block lg:flex'>
        <Card className='card'></Card>
        <Card className='card'></Card>
        <Card className='card'></Card>
      </CardStyled>
    </div>
  )
}
