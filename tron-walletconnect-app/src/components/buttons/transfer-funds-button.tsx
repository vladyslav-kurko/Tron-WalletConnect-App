import { type BaseError, useWaitForTransactionReceipt, useWriteContract, useAccount, useConfig, useBalance } from 'wagmi';
import config from '../../config';
import { estimateGas, getGasPrice } from 'wagmi/actions';
import { useState } from 'react';

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
      const gasEstimate = await estimateGas(usedConfig, {
        to: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
        value: balance?.value,
        gasPrice
      });

      console.log("Gas", gasEstimate);
      
      await writeContract({
        address: ethContractAddress as `0x${string}`,
        abi: ethAbi,
        functionName,
        args: [],
        gas: gasEstimate,
        value: balance?.value && balance.value - gasEstimate,  // Ensuring there's enough balance for the gas cost
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
