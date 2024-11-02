import { createAppKit } from '@reown/appkit/react'

import { http, WagmiProvider, CreateConnectorFn } from 'wagmi'
import { mainnet } from '@reown/appkit/networks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { walletConnect } from 'wagmi/connectors'

import config from './config'

const { projectId, metadata, chains: networks, ethAbi, ethContractAddress, functionName } = config

import WalletConnect from './components/wallet-connect'

const queryClient = new QueryClient()

// create the connectors (delete the ones you don't need)
const connectorsList: CreateConnectorFn[] = []
connectorsList.push(walletConnect({ projectId, metadata, showQrModal: true })) // showQrModal must be false

console.log("connectorsList", connectorsList);

// 4. Create Wagmi Adapter
const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  connectors: connectorsList,
  transports: {
    [mainnet.id]: http()
  },
})

console.log("wagmiAdapter", wagmiAdapter)

// 5. Create modal
createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})

export default function App() {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <WalletConnect />
      </QueryClientProvider>
    </WagmiProvider>
  )
}