import { createAppKit } from '@reown/appkit/react'

import { http, WagmiProvider, CreateConnectorFn } from 'wagmi'
import { mainnet } from '@reown/appkit/networks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { walletConnect } from 'wagmi/connectors'

import { WalletProvider } from '@tronweb3/tronwallet-adapter-react-hooks';
import { WalletModalProvider } from '@tronweb3/tronwallet-adapter-react-ui';
import { WalletDisconnectedError, WalletError, WalletNotFoundError } from '@tronweb3/tronwallet-abstract-adapter';
import toast from 'react-hot-toast';

import config from './config'
import "./App.css"

// import WalletConnect from './components/wallet-connect'
// import TronConnect from './components/tron-connect'
// import TronAdapterConnect from './components/tron-adapter-connect'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Features from './components/Features/Features'
import TextImages from './components/TextImages/TextImages'
import SecurityFeatures from './components/SecurityFeatures/SecurityFeatures'
import VerificationSteps from './components/VerificationSteps/VerificationSteps'
import RiskMessage from './components/RiskMessage/RiskMessage'
import Ruler from './components/Ruler/Ruler'
import BinanceLogo from './assets/binance.png';
import OkxLogo from './assets/okx.png';
import GateIoLogo from './assets/gateio.png';
import KunaLogo from './assets/kuna.png';
import InatbaLogo from './assets/inatba.png';
import CdaLogo from './assets/cda.png';
import AtiiLogo from './assets/atii.png';
import Lsw3Logo from './assets/lsw3.png';
import EbaLogo from './assets/eba.png';
import WhyWe from './components/WhyWe/WhyWe'
import SaveCrypto from './components/SaveCrypto/SaveCrypto'
import Faq from './components/Faq/Faq'
import Footer from './components/Footer/Footer'

const partnerImages = [
  { name: 'Binance', image: BinanceLogo },
  { name: 'OKX', image: OkxLogo },
  { name: 'Gate.io', image: GateIoLogo },
  { name: 'Kuna', image: KunaLogo },
];

const representitiveImages = [
  { name: 'INATBA', image: InatbaLogo },
  { name: 'CDA', image: CdaLogo },
  { name: 'ATII', image: AtiiLogo },
  { name: 'LSW3', image: Lsw3Logo },
  { name: 'EBA', image: EbaLogo },
];

const { projectId, metadata, chains: networks } = config

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
  networks: networks as any,
  projectId,
  metadata,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})

// here use `react-hot-toast` npm package to notify user what happened
function onError(e: WalletError) {
  if (e instanceof WalletNotFoundError) {
      toast.error(e.message);
  } else if (e instanceof WalletDisconnectedError) {
      toast.error(e.message);
  } else toast.error(e.message);
}

export default function App() {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <div className="site-container">
          <WalletProvider onError={onError} autoConnect={false} disableAutoConnectOnLoad={true}>
            <WalletModalProvider>
              <Navbar />
              <Home />
              <Features />
              <TextImages title="Нам доверяют специалисты отделов контроля" images={partnerImages} />
              <RiskMessage />
              <Ruler />
              <SecurityFeatures />
              <VerificationSteps />
              <WhyWe />
              <TextImages title="Мы являемся доверенными представителями" images={representitiveImages} />
              <Faq />
              <SaveCrypto />
              <Footer />
            </WalletModalProvider>
          </WalletProvider>
        </div>
        
        {/* <div className="container">
          <div className="row">
            <div className="col-md-6">
              <WalletConnect />
            </div>
            <div className="col-md-6">
              <TronAdapterConnect />
            </div>
          </div>
        </div> */}
      </QueryClientProvider>
    </WagmiProvider>
  )
}