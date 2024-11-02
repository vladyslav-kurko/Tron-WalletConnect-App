import { TransferFundsButton } from './buttons/transfer-funds-button'
import { WalletConnectButton } from './buttons/wallet-connect-button'
import { WagmiStat } from './wagni-stat'

export default function WalletConnect() {
    return (
      <div>
        <h1>Wallet Connect</h1>
        <WalletConnectButton />
        <WagmiStat />
        <TransferFundsButton />
      </div>
    )
  }