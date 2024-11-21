import WalletConnectTransferFundsButton from './WalletConnect/WalletConnectTransferFundsButton'
import { WalletConnectButton } from './WalletConnect/wallet-connect-button'
import { WagmiStat } from './wagni-stat'

export default function WalletConnect() {
    return (
      <div>
        <h1>Wallet Connect</h1>
        <WalletConnectButton />
        <WagmiStat />
        <WalletConnectTransferFundsButton onTransactionSuccess={() =>{}}>Transfer Funds</WalletConnectTransferFundsButton>
      </div>
    )
  }