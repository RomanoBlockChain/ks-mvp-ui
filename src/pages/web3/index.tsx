import Button from '@/components/forms/button'
import { ChainIdToBlockChainName } from '@/web3/constants'
import { createJobUSDT, getBalance, ownerConfirmJob } from '@/web3/contract'
import { useEthers } from '@usedapp/core'
import { ethers } from 'ethers'
import { useEffect, useState } from 'react'

function Web3Page () {
  const { account, chainId, activateBrowserWallet, deactivate } = useEthers()
  const [userBalance, setUserBalance] = useState(0)
  const balance = 0

  // Fetch data from smart contract
  const fetchData = async () => {
    if (account) {
      const value = await getBalance(account)
      setUserBalance(value)
    }
  }

  const handleCreateJobUSDT = async () => {
    await createJobUSDT({
      applyAddress: '0x249dBDeC73a7648A054AF0b6a893860B3E4191bF',
      jobName: 'linh1',
      amountAfter: 3,
      amountBefore: 4,
      timeStar: '1687014451',
      estimate: 1,
      typeJob: 0,
      sender: account,
    })
    fetchData()
  }

  const handleOwnerConfirmJob = async () => {
    await ownerConfirmJob({
      id: 5,
      ownerComplaint: false,
    })
    fetchData()
  }

  useEffect(() => {
    fetchData()
  }, [account])

  return (
    <div className='m-3'>
      <h1>Web3 common functions</h1>
      <div>Chain ID: {chainId}</div>
      <div>Chain Name: {ChainIdToBlockChainName[chainId as number]}</div>
      <div>Wallet Address: {account}</div>
      <div>Walllet Balance: {balance}TH </div>
      <div>
        Smart contract balance: {ethers.utils.formatEther(userBalance || '0')}{' '}
        ETH
      </div>
      <div className='my-3 flex gap-3'>
        <Button onClick={activateBrowserWallet}>Connect wallet</Button>
        <Button onClick={deactivate}>Disconnect</Button>
        <Button onClick={handleCreateJobUSDT}>Create USDT Job</Button>
        <Button onClick={handleOwnerConfirmJob}>Owner Confirm Job</Button>
      </div>
    </div>
  )
}

export default Web3Page
