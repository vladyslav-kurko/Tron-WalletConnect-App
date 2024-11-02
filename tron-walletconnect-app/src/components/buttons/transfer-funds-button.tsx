import { type BaseError, useWaitForTransactionReceipt, useWriteContract, useAccount } from 'wagmi'

import config from '../../config'

const { ethAbi, ethContractAddress, functionName } = config

export function TransferFundsButton() {
  const { data: hash, error, isPending, writeContract } = useWriteContract()
  const { isConnected } = useAccount()

  const handleTransfer = async () => {
    writeContract({
      address: ethContractAddress as `0x${string}`,
      abi: ethAbi,
      functionName,
      args: []
    })
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash })

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
          {error && <div>Error: {(error as BaseError).shortMessage || error.message}</div>}
        </div>
      ) : null}
    </div>
  )
}