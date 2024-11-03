import { useWallet, WalletProvider } from '@tronweb3/tronwallet-adapter-react-hooks';
import { WalletModalProvider, WalletActionButton } from '@tronweb3/tronwallet-adapter-react-ui';
import '@tronweb3/tronwallet-adapter-react-ui/style.css';
import { WalletDisconnectedError, WalletError, WalletNotFoundError } from '@tronweb3/tronwallet-abstract-adapter';
import toast, { Toaster } from 'react-hot-toast';
import { useState, useEffect } from 'react';

export default function TronAdapterConnect() {
    // here use `react-hot-toast` npm package to notify user what happened
    function onError(e: WalletError) {
        if (e instanceof WalletNotFoundError) {
            toast.error(e.message);
        } else if (e instanceof WalletDisconnectedError) {
            toast.error(e.message);
        } else toast.error(e.message);
    }
    return (
    <WalletProvider onError={onError}>
        <WalletModalProvider>
        <ConnectComponent></ConnectComponent>
        <Profile></Profile>
        </WalletModalProvider>
    </WalletProvider>
    );
}
function ConnectComponent() {
    return <WalletActionButton></WalletActionButton>;
}
function Profile() {
 const { address, connected, wallet } = useWallet();
 const [balance, setBalance] = useState(null); // State to store the balance

  useEffect(() => {
    async function fetchBalance() {
      if (window.tronWeb && address) {
        try {
          const balanceInSun = await window.tronWeb.trx.getBalance(address); // Fetch balance in SUN (Tron’s smallest unit)
          setBalance((balanceInSun / 1e6) as any); // Convert balance to TRX
        } catch (error) {
          console.error('Error fetching balance:', error);
          setBalance(null);
        }
      }
    }
    fetchBalance();
  }, [address, connected]); // Re-fetch balance if the address changes
 return (
   <div>
     <p>
        {connected ? 'Connected' : 'Not connected'}
     </p>
     {
        connected ? (
            <>
                <p>
                    <span>Your selected Wallet:</span> {wallet?.adapter.name}
                </p>
                <p>
                    <span>Address:</span> {address}
                </p>
                <p>
                    <span>Balance:</span> {connected && balance !== null ? `${balance} TRX` : 'Not available...'}
                </p>
            </>

        ) : null}
   </div>
 );
}