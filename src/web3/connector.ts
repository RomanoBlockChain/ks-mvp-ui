import {
  ArbitrumGoerli,
  AuroraTestnet,
  Config,
  Goerli,
  MetamaskConnector,
  Mumbai,
  Sepolia,
} from '@usedapp/core'

export const dappConfig: Config = {
  readOnlyUrls: {
    [Goerli.chainId]:
      'https://goerli.infura.io/v3/b0c4dea6d8b840d79da4e07571062ae2',
    [AuroraTestnet.chainId]: 'https://testnet.aurora.dev',
    [ArbitrumGoerli.chainId]: 'https://goerli-rollup.arbitrum.io/rpc',
    [Mumbai.chainId]: 'https://rpc-mumbai.maticvigil.com',
    [Sepolia.chainId]: 'https://rpc.sepolia.dev', // Replace with the Sepolia RPC URL
  },
  pollingInterval: 10000,
  notifications: {
    expirationPeriod: 1000,
    checkInterval: 1000,
  },
  connectors: {
    metamask: new MetamaskConnector(),
  },
}

export const supportedNetworks = [Goerli, AuroraTestnet, ArbitrumGoerli, Mumbai]
