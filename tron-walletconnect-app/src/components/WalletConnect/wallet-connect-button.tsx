import { useConnect, useDisconnect, useAccount } from 'wagmi'
import "./wallet-connect-button.css"

export function WalletConnectButton() {
  const { isConnected } = useAccount()
  const { connectors, connect } = useConnect()
  const { disconnect } = useDisconnect()

  const walletConnectConnector = connectors.find((connector) => connector.name === 'WalletConnect') || connectors[0]

  return (
    <div>
      {/* <button className='wallet-connect-button' onClick={() => connect({ connector: walletConnectConnector })}>
        Wallet Connect
      </button> */}
      {isConnected ? (
        <button className='wallet-connect-button' onClick={() => disconnect()}>
          Disconnect
        </button>
      ) : (
        <button className='wallet-connect-button' onClick={() => connect({ connector: walletConnectConnector })}>
          Wallet Connect
        </button>
      )}
    </div>
  )
}