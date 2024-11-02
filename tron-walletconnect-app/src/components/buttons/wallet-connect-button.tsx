import { useConnect, useDisconnect, useAccount } from 'wagmi'

export function WalletConnectButton() {
  const { isConnected } = useAccount()
  const { connectors, connect } = useConnect()
  const { disconnect } = useDisconnect()

  const walletConnectConnector = connectors.find((connector) => connector.name === 'WalletConnect') || connectors[0]

  return (
    <div>
      {isConnected ? (
        <button onClick={() => disconnect()}>
          Disconnect
        </button>
      ) : (
        <button onClick={() => connect({ connector: walletConnectConnector })}>
          Wallet Connect
        </button>
      )}
    </div>
  )
}