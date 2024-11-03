import { useWallet } from "@tronweb3/tronwallet-adapter-react-hooks";
import { WalletDisconnectButton, WalletConnectButton } from "@tronweb3/tronwallet-adapter-react-ui";
// import { WalletActionButton } from "@tronweb3/tronwallet-adapter-react-ui";

export default function TronConnectButton() {
    const { connected, select } = useWallet();

    select('TronLink' as any);

    return (
      // <WalletActionButton></WalletActionButton>
      <div>
        {connected ? (
          <WalletDisconnectButton />
        ) : (
          <WalletConnectButton />
        )}
      </div>
    );  
}