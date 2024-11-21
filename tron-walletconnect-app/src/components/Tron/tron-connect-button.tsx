import { useWallet } from "@tronweb3/tronwallet-adapter-react-hooks";
import { WalletDisconnectButton, WalletConnectButton } from "@tronweb3/tronwallet-adapter-react-ui";
import '@tronweb3/tronwallet-adapter-react-ui/style.css';
// import { WalletConnectButton } from "@tronweb3/tronwallet-adapter-react-ui";
// import { WalletActionButton } from "@tronweb3/tronwallet-adapter-react-ui";
import "./tron-connect-button.css";

export default function TronConnectButton() {
    // const { select } = useWallet();
    const { connected, select } = useWallet();

    select('TronLink' as any);

    return (
      // <WalletActionButton></WalletActionButton>
      <div className="tron-button">
        {/* <WalletConnectButton>Tron Link</WalletConnectButton> */}
        {connected ? (
          <WalletDisconnectButton />
        ) : (
          <WalletConnectButton />
        )}
      </div>
    );  
}