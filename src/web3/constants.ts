import {
  ArbitrumGoerli,
  AuroraTestnet,
  Goerli,
  Mumbai,
  Sepolia,
} from '@usedapp/core'

export const ChainIdToBlockChainName = {
  [Goerli.chainId]: 'Ethereum',
  [Mumbai.chainId]: 'Polygon',
  [AuroraTestnet.chainId]: 'Aurora',
  [ArbitrumGoerli.chainId]: 'Arbitrum',
  [Sepolia.chainId]: 'Sepolia',
}

export const KS_SERVICE_ADDRESS = '0xBE29066a70c8945024092FD35dffE9b162B35aFC'
export const USDT_ADDRESS = '0xA53053e9713a60f97dB4cdE367c43dE679136430'