import { useWallet } from "@tronweb3/tronwallet-adapter-react-hooks";
import { WalletDisconnectButton, WalletConnectButton } from "@tronweb3/tronwallet-adapter-react-ui";
import TronLinkIcon from "../../assets/tron-trx-icon.png";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '@tronweb3/tronwallet-adapter-react-ui/style.css';
// import { WalletConnectButton } from "@tronweb3/tronwallet-adapter-react-ui";
// import { WalletActionButton } from "@tronweb3/tronwallet-adapter-react-ui";
import "./tron-connect-button.css";
import { tronWeb } from "../../tronweb";

export default function TronConnectButton() {
    // const { select } = useWallet();
    const { disconnect, connect, connected, select } = useWallet();

    select('TronLink' as any);

    const handleDisconnect = async () => {
      if (connected) {
        try {
          // Disconnect from the wallet adapter
          await disconnect();
    
          // Clear any TronLink session
          if (tronWeb && tronWeb.defaultAddress.base58) {
            tronWeb.clearAddress(); // Logout from TronLink
          }

           // Clear localStorage or cookies if applicable
          localStorage.clear();
          document.cookie = "";
    
          // Optionally reload the page
          // window.location.reload();
        } catch (error) {
          console.error("Failed to disconnect:", error);
        }
      }
    };

    return (
      // <WalletActionButton></WalletActionButton>
      <div className="tron-button">
        {/* <WalletConnectButton>Tron Link</WalletConnectButton> */}
        {connected ? (
          <button className='wallet-connect-button' onClick={async () => await disconnect()}>
            <div className="content">
              <img className='button-connect-icon' src={TronLinkIcon} alt="TronLink" />
              Disconnect
            </div> 
            <div className="arrow">
              <ArrowForwardIosIcon sx={{ color: "#838383", fontSize: 20 }} />
            </div>
        </button>
        ) : (
          <button className='wallet-connect-button' onClick={async () => await connect()}>
          <div className="content">
            <img className='button-connect-icon' src={TronLinkIcon} alt="TronLink" />
            TronLink
          </div> 
          <div className="arrow">
            <ArrowForwardIosIcon sx={{ color: "#838383", fontSize: 20 }} />
          </div>
        </button>
        )}
      </div>
    );  
}