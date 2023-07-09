import { Contract, ethers, utils } from 'ethers'
import { toast } from 'react-toastify'
import { ABI, USDT_ABI } from './ABI'
import { KS_SERVICE_ADDRESS, USDT_ADDRESS } from './constants'
export const MAX_UINT256 =
  '115792089237316195423570985008687907853269984665640564039457584007913129639935'
export const getContractWithSigner = () => {
  try {
    const wethInterface = new utils.Interface(ABI)
    const wethContractAddress = KS_SERVICE_ADDRESS
    const provider = new ethers.providers.Web3Provider((window as any).ethereum)
    const signer = provider.getSigner()

    return new Contract(wethContractAddress, wethInterface, signer)
  } catch (error) {
    console.log('Please connect to metamask')
    throw error
  }
}

export const getContractForReadOnly = () => {
  try {
    const wethInterface = new utils.Interface(ABI)
    const wethContractAddress = KS_SERVICE_ADDRESS
    const provider = new ethers.providers.Web3Provider((window as any).ethereum)
    return new Contract(wethContractAddress, wethInterface, provider)
  } catch (error) {
    console.log('Please connect to metamask')
    throw error
  }
}

export const getBalance = async (address: any) => {
  const contract = getContractForReadOnly()
  const balance = 0
  return balance
}

export const deposit = async (amount = 0.001) => {
  const amountEth = ethers.utils.parseEther(amount.toString())

  try {
    const contract = getContractWithSigner()
    if (contract) {
      await contract.callStatic.deposit({ value: amountEth }) // Use callStatic to check error in Metamask
      let tx = await contract.deposit({ value: amountEth })
      const event = await tx.wait()

      return { tx, event }
    }
    console.log('Please connect to metamask')
    throw Error()
  } catch (error) {
    console.log({ error })
  }
}

export const withdraw = async (amount = 0.001) => {
  const amountEth = ethers.utils.parseEther(amount.toString())

  try {
    const contract = getContractWithSigner()
    if (contract) {
      await contract.callStatic.withdraw(amountEth) // Use callStatic to check error in Metamask
      let tx = await contract.withdraw(amountEth)
      const event = await tx.wait()

      return { tx, event }
    }
    console.log('Please connect to metamask')
    throw Error()
  } catch (error) {
    console.log({ error })
  }
}

export interface CreateJobUSDTProps {
  applyAddress: string
  jobName: string
  amountAfter: number
  amountBefore: number
  timeStar: string
  estimate: number
  typeJob: number
  sender: string | undefined
}
export const handleError = (error: any) => {
  console.log(
    '🚀 ~ file: contract.ts:86 ~ handleError ~ error:',
     error?.message
  )
  if (error?.message?.includes('input the price correct')) {
    toast.error('Please input correct price')
    return
  }
  if (error?.message?.includes('invalid address')) {
    toast.error('Invalid address')
    return
  }
  if (error?.message?.includes('transfer amount exceeds balance')) {
    toast.error('Transfer amount exceeds balance')
    return
  }
  if (error?.message?.includes('Job is Close')) {
    toast.error('Job is Close')
    return
  }
  if (error?.message?.includes('user rejected transaction')) {
    toast.error('User rejected transaction')
    return
  }
  if (error?.message?.includes('You not Owner Job')) {
    toast.error('You are not the owner')
    return
  }
  
  toast.error('Something wrong')
}

export const createJobUSDT = async (props: CreateJobUSDTProps) => {
  const {
    applyAddress,
    jobName,
    amountAfter,
    amountBefore,
    timeStar,
    estimate,
    typeJob,
    sender,
  } = props

  try {
    const contract = getContractWithSigner()
    if (contract) {
      const allowance = await getAllowance({
        walletAddress: sender,
        erc20Address: USDT_ADDRESS,
      })
      if (allowance.lt(ethers.BigNumber.from(amountAfter))) {
        console.log('xxx')
        await increaseAllowanceERC20(USDT_ADDRESS, MAX_UINT256)
      }
      await contract.callStatic.CreateJobUSDT(
        applyAddress,
        jobName,
        amountAfter,
        amountBefore,
        timeStar,
        estimate,
        typeJob
      ) // Use callStatic to check error in Metamask
      let tx = await contract.CreateJobUSDT(
        applyAddress,
        jobName,
        amountAfter,
        amountBefore,
        timeStar,
        estimate,
        typeJob
      )
      const event = await tx.wait()

      return { tx, event }
    }
    toast.error('Please connect to metamask')
    throw Error()
  } catch (error) {
    handleError(error)
  }
}

export interface OwnerConfirmJobProps {
  id: number
  ownerComplaint: boolean
}
export const ownerConfirmJob = async (props: OwnerConfirmJobProps) => {
  const { id, ownerComplaint } = props

  try {
    const contract = getContractWithSigner()
    if (contract) {
      await contract.callStatic.OwnerConfirmJob(id, ownerComplaint) // Use callStatic to check error in Metamask
      let tx = await contract.OwnerConfirmJob(id, ownerComplaint)
      const event = await tx.wait()

      return { tx, event }
    }
    toast.error('Please connect to metamask')
    throw Error()
  } catch (error) {
    handleError(error)
  }
}
export const getContractERC20 = (address: string) => {
  try {
    const wethInterface = new utils.Interface(USDT_ABI)
    const wethContractAddress = address
    const provider = new ethers.providers.Web3Provider((window as any).ethereum)
    const signer = provider.getSigner()
    return new Contract(wethContractAddress, wethInterface, signer) as any
  } catch (error) {
    toast.error('Please connect to metamask')
    throw error
  }
}

export const getAllowance = async ({ walletAddress, erc20Address }: any) => {
  const contract = getContractERC20(erc20Address)
  return await contract.allowance(walletAddress, KS_SERVICE_ADDRESS)
}

export const increaseAllowanceERC20 = async (
  erc20Address: any,
  amountApproveToken: any
) => {
  const contract = getContractERC20(erc20Address)
  await contract.callStatic.increaseAllowance(
    KS_SERVICE_ADDRESS,
    amountApproveToken
  )
  let tx = await contract.increaseAllowance(
    KS_SERVICE_ADDRESS,
    amountApproveToken
  )
  let event = await tx.wait()

  return { event, tx }
}
