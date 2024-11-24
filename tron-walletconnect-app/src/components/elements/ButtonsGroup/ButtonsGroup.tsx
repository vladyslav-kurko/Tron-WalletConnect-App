import React from 'react'
import TelegramIcon from '../../../assets/telegram-icon.png';
import "./ButtonsGroup.css"
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';
import SearchIcon from '../../../assets/search-icon.png';
import { useTranslation } from 'react-i18next';
// import SecondaryBtn from '../SecondaryBtn/SecondaryBtn';

import linksConfig from '../../../linksConfig';

interface ButtonsGroupProps {
    secondaryColor?: 'white' | 'black';
    rightButtonBorder?: boolean;
}

const ButtonsGroup: React.FC<ButtonsGroupProps> = ({ rightButtonBorder = false }) => { //{secondaryColor = "black"}
// const ButtonsGroup: React.FC = () => {
    const { t } = useTranslation();
    
    return (
        <div className="row justify-content-center align-items-center flex-wrap gx-5 gy-4">
            <div className="col-xl-5 col-lg-7">
                <PrimaryBtn
                    text={t('buttonsGroup.telegramButtonLabel')}
                    imageSrc={TelegramIcon}
                    url={linksConfig.telegramBot}
                />
            </div>
            <div className="col-xl-5 col-lg-7">
                <PrimaryBtn
                    text={t('buttonsGroup.websiteButtonLabel')}
                    imageSrc={SearchIcon}
                    style='white'
                    border={rightButtonBorder}
                />
                {/* <SecondaryBtn
                    text="Проверить кошелек"
                    url=""
                    color={secondaryColor}
                /> */}
            </div>
        </div>
    );
};

export default ButtonsGroup;
