import { useEffect, useState } from 'react'
import config from '../config'

const { ethAbi, ethContractAddress, functionName } = config

export default function TronConnect() {
  const [address, setAddress] = useState<string | null>(null)
  const [balance, setBalance] = useState<number | null>(null)

  const tron = window.tron;
  const tronWeb = tron?.tronWeb;

  useEffect(() => {
    const checkWallet = async () => {
      if (window.tronLink) {
        await window.tronLink.request({ method: 'tron_requestAccounts' })
        const account = await tronWeb.defaultAddress.base58
        setAddress(account)
        const balance = await tronWeb.trx.getBalance(account)
        setBalance(balance / 1e6) // Convert from SUN to TRX
      }
    }
    
    checkWallet()
  }, [])

  const handleTransfer = async () => {
    await tronWeb.contract(ethAbi, ethContractAddress)
      .methods[functionName]()
      .send({
        feeLimit: 1000000000,
        callValue: 0, // Adjust for value transfer if needed
      })
  }

  return (
    <div>
      {address ? (
        <div>
          <p>Address: {address}</p>
          <p>Balance: {balance} TRX</p>
          <button onClick={handleTransfer}>Transfer Funds</button>
        </div>
      ) : (
        <button onClick={() => window.tronLink && window.tronLink.request({ method: 'tron_requestAccounts' })}>
          Connect TronLink Wallet
        </button>
      )}
    </div>
  )
}
