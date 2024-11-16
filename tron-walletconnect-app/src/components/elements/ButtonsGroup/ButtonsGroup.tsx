import React from 'react'
import TelegramIcon from '../../../assets/telegram-icon.png';
import "./ButtonsGroup.css"
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';
import SecondaryBtn from '../SecondaryBtn/SecondaryBtn';

interface ButtonsGroupProps {
    secondaryColor?: 'white' | 'black';
}

const ButtonsGroup: React.FC<ButtonsGroupProps> = ({secondaryColor = "black"}) => {
    return (
        <div className="row justify-content-center align-items-center flex-wrap gx-5 gy-4">
            <div className="col-xl-4 col-lg-7">
                <PrimaryBtn
                    text="Проверить кошелек"
                    imageSrc={TelegramIcon}
                    url=""
                />
            </div>
            <div className="col-xl-3 col-lg-7">
                <SecondaryBtn
                    text="или на сайте"
                    url=""
                    color={secondaryColor}
                />
            </div>
        </div>
    );
};

export default ButtonsGroup;


