import Button from '@/components/forms/button'
import Input from '@/components/forms/input'
import MetamaskIcon from '@/icons/metamask-icon'
import { useEthers } from '@usedapp/core'
import clsx from 'clsx'
import { useEffect, useState } from 'react'

const WalletInformationForm = ({ setWallet, wallet, isShow, data }: any) => {
  const [clickConnect, setClickConnect] = useState(false)
  const { account, chainId, activateBrowserWallet, deactivate } = useEthers()
  useEffect(() => {
    if (account && clickConnect) setWallet(account)
  }, [account, clickConnect])
  useEffect(() => {
    setWallet(
      data?.data?.profile[data?.data?.profile?.length - 1]?.addresWallet
    )
  }, [data])
  return (
    <div
      className={clsx(
        'w-full pl-0 lg:pl-[60px] xl:pl-[120px]',
        isShow || 'hidden'
      )}
    >
      <div className='font-medium text-[#022DB0] text-xl mb-1'>
        Wallet Information
      </div>
      <Input
        placeholder='Wallet address*'
        value={wallet}
        onChange={(e: any) => setWallet(e.target.value)}
      />
      <div className='my-4'>or</div>
      <Button
        className='bg-[#E6EAF8] w-full text-[#022DB0] h-[44px] text-sm relative'
        size='large'
        rounded='default'
        variant='outline'
        onClick={() => {
          if (account) setWallet(account)
          else {
            activateBrowserWallet()
            setClickConnect(true)
          }
        }}
      >
        <MetamaskIcon className='w-[20px] h-[20px] absolute left-4 top-3' />{' '}
        Connect with Metamask wallet
      </Button>
    </div>
  )
}

export default WalletInformationForm
