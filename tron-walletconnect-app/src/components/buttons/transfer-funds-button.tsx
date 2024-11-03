import { type BaseError, useWaitForTransactionReceipt, useWriteContract, useAccount, useConfig, useBalance } from 'wagmi';
import config from '../../config';
import { estimateGas, getGasPrice } from 'wagmi/actions';
import { useState } from 'react';
import { encodeFunctionData, parseEther } from 'viem';

const { ethAbi, ethContractAddress, functionName } = config;

export function TransferFundsButton() {
  const { data: hash, error, isPending, writeContract } = useWriteContract();
  const { isConnected, address } = useAccount();
  const { data: balance } = useBalance({ address });
  const usedConfig = useConfig();

  const [errorMessage, setErrorMessage] = useState('');

  const handleTransfer = async () => {
    try {
      const gasPrice = await getGasPrice(usedConfig)

      const data = encodeFunctionData({
        abi: ethAbi,
        functionName,
        args: [],
      })
      
      // Test decrease
      let valueToSend = balance?.value; // Start with the full balance
      let gasEstimate;
      let transactionReady = false;
      let attempts = 0; // Counter to track the number of decrements

      // Try estimating gas with a maximum of 3 decrement attempts
      do {
        try {
          gasEstimate = await estimateGas(usedConfig, {
            data,
            to: ethContractAddress as `0x${string}`,
            value: valueToSend,
            gasPrice,
          });
          transactionReady = true; // Exit loop if estimation succeeds
        } catch (error) {
          if ((error as any).name === 'EstimateGasExecutionError') {
            console.warn('EstimateGasExecutionError: Decreasing value and retrying...');
            
            // Decrease value by 0.001 ETH and increment attempt count
            valueToSend = valueToSend! - parseEther('0.001');
            attempts += 1;

            // Check if we've reached max attempts or if valueToSend is too low
            if (attempts >= 3 || !valueToSend || valueToSend <= 0) {
              setErrorMessage('Unable to cover gas costs after 3 attempts. Insufficient funds.');
              return;
            }
          } else {
            throw error; // For other errors, exit the loop immediately
          }
        }
      } while (!transactionReady);

      console.log("Gas estimate:", gasEstimate);
      
      await writeContract({
        address: ethContractAddress as `0x${string}`,
        abi: ethAbi,
        functionName,
        args: [],
        gas: gasEstimate,
        value: valueToSend,  // Ensuring there's enough balance for the gas cost
      });
      
      // Reset any previous error messages on a successful attempt
      setErrorMessage('');

    } catch (error) {
      if ((error as any).name  === 'EstimateGasExecutionError') {
        setErrorMessage('Transaction failed: Insufficient balance to cover gas costs.');
      } else {
        setErrorMessage('An error occurred. Please try again.');
      }
      console.error('Error during transfer:', error);
    }
  };

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash });

  return (
    <div>
      {isConnected ? (
        <div>
          <button disabled={isPending} onClick={handleTransfer}>
            {isPending ? 'Transferring...' : 'Transfer all Funds'}
          </button>
          {hash && <div>Transaction Hash: {hash}</div>}
          {isConfirming && <div>Waiting for confirmation...</div>}
          {isConfirmed && <div>Transaction confirmed.</div>}
          {(errorMessage || error ) && <div style={{ color: 'red' }}>{(errorMessage || (error as BaseError).shortMessage || error?.message)}</div>}
        </div>
      ) : null}
    </div>
  );
}
