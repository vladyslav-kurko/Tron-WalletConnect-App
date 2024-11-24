import React from 'react';
// import WalletConnect from '../components/wallet-connect'
// import TronConnect from '../components/tron-connect'
// import TronAdapterConnect from '../components/tron-adapter-connect'
import Navbar from '../components/Navbar/Navbar'
import Home from '../components/Home/Home'
import Features from '../components/Features/Features'
import TextImages from '../components/TextImages/TextImages'
import SecurityFeatures from '../components/SecurityFeatures/SecurityFeatures'
import VerificationSteps from '../components/VerificationSteps/VerificationSteps'
import RiskMessage from '../components/RiskMessage/RiskMessage'
import Ruler from '../components/Ruler/Ruler'
import BinanceLogo from '../assets/binance.png';
import OkxLogo from '../assets/okx.png';
import GateIoLogo from '../assets/gateio.png';
import KunaLogo from '../assets/kuna.png';
import InatbaLogo from '../assets/inatba.png';
import CdaLogo from '../assets/cda.png';
import AtiiLogo from '../assets/atii.png';
import Lsw3Logo from '../assets/lsw3.png';
import EbaLogo from '../assets/eba.png';
import WhyWe from '../components/WhyWe/WhyWe'
import SaveCrypto from '../components/SaveCrypto/SaveCrypto'
import Faq from '../components/Faq/Faq'
import Footer from '../components/Footer/Footer'
import { useTranslation } from 'react-i18next';

const partnerImages = [
    { name: 'Binance', image: BinanceLogo },
    { name: 'OKX', image: OkxLogo },
    { name: 'Gate.io', image: GateIoLogo },
    { name: 'Kuna', image: KunaLogo },
  ];
  
  const representitiveImages = [
    { name: 'INATBA', image: InatbaLogo },
    { name: 'CDA', image: CdaLogo },
    { name: 'ATII', image: AtiiLogo },
    { name: 'LSW3', image: Lsw3Logo },
    { name: 'EBA', image: EbaLogo },
  ];


const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
        <Navbar />
        <Home />
        <Features />
        <TextImages title={t('partners.title')} images={partnerImages} />
        <RiskMessage />
        <Ruler />
        <SecurityFeatures />
        <VerificationSteps />
        <WhyWe />
        <TextImages title={t('representatives.title')} images={representitiveImages} />
        <Faq />
        <SaveCrypto />
        <Footer />
    </>
  ); // This component doesn't render anything itself
};

export default HomePage;
