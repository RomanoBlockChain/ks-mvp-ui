import { OptionType } from '@/components/forms/dropdown'

export const level = [
  { name: 'Basic', value: 'basic' },
  { name: 'Intermediate', value: 'intermediate' },
  { name: 'Advance', value: 'advance' },
  { name: 'Expert', value: 'expert' },
]

export const categories: OptionType[] = [
  {
    name: 'Programming & Tech',
    value: 'programming & tech',
    children: [
      { name: 'Basic', value: 'basic' },
      { name: 'Intermediate', value: 'intermediate' },
      { name: 'Advance', value: 'advance' },
      { name: 'Expert', value: 'expert' },
    ],
  },
  {
    name: 'Programming & Tech2',
    value: 'programming & tech',
    children: [
      { name: 'Basic', value: 'basic' },
      { name: 'Intermediate', value: 'intermediate' },
      { name: 'Advance', value: 'advance' },
      { name: 'Expert', value: 'expert' },
    ],
  },
]

export interface TagsOption {
  readonly value: string
  readonly label: string
}

export const tags: TagsOption[] = [
  {
    label: 'Cryptocurrency Forking',
    value: 'cryptocurrency_forking',
  },
  {
    label: 'Initial Coin Offering',
    value: 'initial_coin_offering',
  },
  {
    label: 'Security Token Development',
    value: 'security_token_development',
  },
  {
    label: 'Smart Contract',
    value: 'smart_contract',
  },
  {
    label: 'Stablecoin Development',
    value: 'stablecoin_development',
  },
  {
    label: 'Bitcoin',
    value: 'bitcoin',
  },
  {
    label: 'Chainalysis KYT',
    value: 'chainalysis_kyt',
  },
  {
    label: 'Corda',
    value: 'corda',
  },
  {
    label: 'Ethereum',
    value: 'ethereum',
  },
  {
    label: 'Hyperledger Fabric',
    value: 'hyperledger_fabric',
  },
  {
    label: 'IBM Blockchain',
    value: 'IBM_blockchain',
  },
  {
    label: 'MultiChain Platform',
    value: 'multiChain_platform',
  },
  {
    label: '3D Avata',
    value: '3D_avata',
  },
  {
    label: 'Blockchain Architecture',
    value: 'blockchain_architecture',
  },
  {
    label: 'Blockchain Development',
    value: 'blockchain_development',
  },
  {
    label: 'Blockchain Platform',
    value: 'blockchain_platform',
  },
  {
    label: 'Blockchain Security',
    value: 'blockchain_security',
  },
  {
    label: 'Crypto Exchange Platform',
    value: 'crypto_exchange_platform',
  },
  {
    label: 'DApp Development',
    value: 'dapp_development',
  },
  {
    label: 'Discord Bot Development',
    value: 'discord_bot_development',
  },
  {
    label: 'Initial Coin Offering',
    value: 'initial_coin_offering',
  },
  {
    label: 'Layer 2 Blockchain',
    value: 'layer_2_blockchain',
  },
  {
    label: 'NFT',
    value: 'NFT',
  },
  {
    label: 'NFT Minting',
    value: 'NFT_minting',
  },
  {
    label: 'Crypto Wallet Development',
    value: 'crypto_wallet_development',
  },
  {
    label: 'Desktop Wallet',
    value: 'desktop wallet',
  },

  {
    label: 'Hardware Wallet',
    value: 'hardware_wallet',
  },
  {
    label: 'Mobile Wallet',
    value: 'mobile_wallet',
  },
  {
    label: 'Paper Wallet',
    value: 'paper_wallet    ',
  },
  {
    label: 'Web Wallet',
    value: 'web_wallet',
  },
]

export const type = [
  {
    name: 'Fixed',
    value: 'fixed',
  },
]

export const unit = [
  {
    name: 'USDT',
    value: 'USDT',
  },
]
