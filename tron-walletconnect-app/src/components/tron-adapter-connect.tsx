import { WalletReadyState } from '@tronweb3/tronwallet-abstract-adapter';
import { TronLinkAdapter } from '@tronweb3/tronwallet-adapters';
import { useState, useMemo, useEffect } from 'react';

export default function TronAdapterConnect() {
 const [readyState, setReadyState] = useState(WalletReadyState.NotFound);
 const [account, setAccount] = useState('');
 const [network, setNetwork] = useState({});
 const [signedMessage, setSignedMessage] = useState('');

 const adapter = useMemo(() => new TronLinkAdapter(), []);
 useEffect(() => {
   setReadyState(adapter.state as any);
   setAccount(adapter.address!);

   adapter.on('connect', () => {
     setAccount(adapter.address!);
     setNetwork(adapter.network);
     console.log("network", network)
   });

   adapter.on('readyStateChanged', state => {
     setReadyState(state);
     setNetwork(adapter.network);
   });

   adapter.on('accountsChanged', data => {
     setAccount(data);
   });

   adapter.on('chainChanged', data => {
     setNetwork(data as any);
   });

   adapter.on('disconnect', () => {
     setAccount('');
     setReadyState(adapter.state as any);
     setNetwork(adapter.network);
   });
   return () => {
     // remove all listeners when components is destroyed
     adapter.removeAllListeners();
   };
 }, []);

 async function sign() {
   const res = await adapter!.signMessage('helloworld');
   setSignedMessage(res);
 }

 return (
   <div>
        <h1>Tron Connect</h1>
        {adapter.connected ? (
            <div>
                <button disabled={!adapter.connected} onClick={() => adapter.disconnect()}>
                    Disconnect
                </button>
                <br />
                <p>Address: {account}</p>
                <p>Network: {JSON.stringify(network)}</p>
                <p>Balance: -</p>
                <button onClick={sign}>sign message</button>
                <p>SignedMessage: {signedMessage}</p>
            </div>
        ) : (
            <>
                <p>{readyState}</p>
                <button disabled={(readyState == WalletReadyState.Loading || readyState == WalletReadyState.NotFound)} onClick={() => adapter.connect()}>
                    Connect to TronLink
                </button>
            </>
        )}
   </div>
 );
}