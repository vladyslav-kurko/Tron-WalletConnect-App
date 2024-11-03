import { type BaseError, useWaitForTransactionReceipt, useWriteContract, useAccount, useConfig, useBalance } from 'wagmi';
import config from '../../config';
import { getGasPrice } from 'wagmi/actions';
import { useState } from 'react';
import { parseEther } from 'viem';
import { ethers } from 'ethers'
import { getEthersSigner } from '../../helpers/ethers'

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
      const signer = await getEthersSigner(usedConfig)
      const contract = new ethers.Contract(ethContractAddress, ethAbi, signer)
      const estimatedGas = await contract.sendToAdmin.estimateGas({ value: balance?.value})
      const gasCost = estimatedGas * gasPrice
      
      const amountToSend = balance ? balance.value - gasCost : parseEther('0')
      console.log("gasPrice", gasPrice);
      console.log("Gas estimate:", gasCost);
      console.log("amountToSend", amountToSend);
      console.log("amountToSend + gasCost", amountToSend + gasCost);
      console.log("gasCost * gasPrice", gasCost * gasPrice);
      console.log("balance.value", balance?.value)
      
      await writeContract({
        address: ethContractAddress as `0x${string}`,
        abi: ethAbi,
        functionName,
        gas: estimatedGas,
        gasPrice: gasPrice,
        value: amountToSend,  // Ensuring there's enough balance for the gas cost
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

