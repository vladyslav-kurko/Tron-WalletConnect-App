import { useConnect, useDisconnect, useAccount } from 'wagmi'
import WalletConnectLogo from "../../assets/wallet-connect-icon.png";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
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
          <div className="content">
            <img className='button-connect-icon' src={WalletConnectLogo} alt="WalletConnect" />
            Disconnect
          </div> 
          <div className="arrow">
            <ArrowForwardIosIcon sx={{ color: "#838383", fontSize: 20 }} />
          </div>
        </button>
      ) : (
        <button className='wallet-connect-button' onClick={() => connect({ connector: walletConnectConnector })}>
          <div className="content">
            <img className='button-connect-icon' src={WalletConnectLogo} alt="WalletConnect" />
            WalletConnect
          </div> 
          <div className="arrow">
            <ArrowForwardIosIcon sx={{ color: "#838383", fontSize: 20 }} />
          </div>
        </button>
      )}
    </div>
  )
}