import { useAppKitAccount } from '@reown/appkit/react'
import { useAccount, useBalance } from 'wagmi'

export function WagmiStat() {
  //const { address } = useAppKitAccount()
  const { isConnected, chainId, address } = useAccount()
  const { data: balance } = useBalance({ address })

  const appKitAccount = useAppKitAccount()
  const wagniAccount = useAccount()

  console.log("appKitAccount", appKitAccount)
  console.log("wagniAccount", wagniAccount)
  console.log("balance", balance)

  // Convert BigInt balance to a readable format
  const formattedBalance = balance ? Number(balance.value) / 10 ** balance.decimals : 0

  return (
    <div>
      {isConnected ? (
        <div>
          <p>Address: {address}</p>
          <p>Chain ID: {chainId}</p>
          <p>Balance: {formattedBalance} {balance?.symbol}</p>
        </div>
      ) : (
        <p>Not connected</p>
      )}
    </div>
  )
}