import { useWallet } from '@tronweb3/tronwallet-adapter-react-hooks';
// import { WalletActionButton } from '@tronweb3/tronwallet-adapter-react-ui';
import '@tronweb3/tronwallet-adapter-react-ui/style.css';
import { useState, useEffect } from 'react';
import { tronWeb } from '../tronweb';

import TronConnectButton from './Tron/tron-connect-button'
import TronTransferFundsButton from './Tron/TronTransferFundsButton';



export default function TronAdapterConnect() {
    return (
      <>
          <h1>Tron Connect</h1>
          <TronConnectButton></TronConnectButton>
          <Profile></Profile>
          <TronTransferFundsButton onTransactionSuccess={() => {}}>Trasfer Funds</TronTransferFundsButton>
      </>
    );
}

function Profile() {
 const { address, connected, wallet } = useWallet();
 const [balance, setBalance] = useState(null); // State to store the balance

  useEffect(() => {
    async function fetchBalance() {
      if (tronWeb && address) {
        try {
          const balanceInSun = await tronWeb.trx.getBalance(address); // Fetch balance in SUN (Tron’s smallest unit)
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