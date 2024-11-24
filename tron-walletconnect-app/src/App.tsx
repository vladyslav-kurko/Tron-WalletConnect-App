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

import i18n from './i18n';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams, Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'
import HomePage from './pages/HomePage'
import MiniAppPage from './pages/MiniAppPage'

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

// LanguageWrapper component
const LanguageWrapper: React.FC = () => {
  const { lng } = useParams<{ lng: string }>();

  useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng]);

  // Render nested routes using Outlet
  return <Outlet />;
};

export default function App() {
  

  return (
    <I18nextProvider i18n={i18n}>
      <WagmiProvider config={wagmiAdapter.wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <WalletProvider onError={onError} autoConnect={false} disableAutoConnectOnLoad={true}>
            <WalletModalProvider>
              <Router>
                <Routes>
                  {/* Redirect root path to default language */}
                  <Route path="/" element={<Navigate to={"/en"} replace />} />

                  {/* Redirect non-language paths to default language */}
                  <Route path="/miniapp" element={<Navigate to="/en/miniapp" replace />} />

                  {/* Language-specific routes */}
                  <Route path="/:lng" element={<LanguageWrapper />}>
                    <Route index element={<HomePage />} />
                    <Route path="miniapp" element={<MiniAppPage />} />
                  </Route>

                  {/* Catch-all fallback to redirect to default language */}
                  <Route path="*" element={<Navigate to="/en" replace />} />
                </Routes>
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
              </Router>
            </WalletModalProvider>
          </WalletProvider>
        </QueryClientProvider>
      </WagmiProvider>
      
    </I18nextProvider>
  )
}