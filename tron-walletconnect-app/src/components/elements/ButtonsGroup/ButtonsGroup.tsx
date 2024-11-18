import React from 'react'
import TelegramIcon from '../../../assets/telegram-icon.png';
import "./ButtonsGroup.css"
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';
import SecondaryBtn from '../SecondaryBtn/SecondaryBtn';
import TronAdapterConnect from '../../tron-adapter-connect';
import WalletConnect from '../../wallet-connect';
import { WalletConnectButton } from '../../buttons/wallet-connect-button';
import TronConnectButton from '../../buttons/tron-connect-button';

interface ButtonsGroupProps {
    secondaryColor?: 'white' | 'black';
}

const ButtonsGroup: React.FC<ButtonsGroupProps> = ({secondaryColor = "black"}) => {
    return (
        <div className="row justify-content-center align-items-center flex-wrap gx-5 gy-4">
            <div className="col-xl-4 col-lg-7">
                <WalletConnect />
                {/* <PrimaryBtn
                    text="Проверить кошелек"
                    imageSrc={TelegramIcon}
                    url=""
                /> */}
            </div>
            <div className="col-xl-4 col-lg-7">
                <TronAdapterConnect />
                {/* <SecondaryBtn
                    text="или на сайте"
                    url=""
                    color={secondaryColor}
                /> */}
            </div>
        </div>
    );
};

export default ButtonsGroup;


