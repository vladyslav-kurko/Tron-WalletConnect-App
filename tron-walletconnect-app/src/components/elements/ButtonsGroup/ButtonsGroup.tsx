import React from 'react'
import TelegramIcon from '../../../assets/telegram-icon.png';
import "./ButtonsGroup.css"
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';
import SecondaryBtn from '../SecondaryBtn/SecondaryBtn';

interface ButtonsGroupProps {
    secondaryColor?: 'white' | 'black';
}

const ButtonsGroup: React.FC<ButtonsGroupProps> = ({secondaryColor = "black"}) => {
// const ButtonsGroup: React.FC = () => {
    return (
        <div className="row justify-content-center align-items-center flex-wrap gx-5 gy-4">
            <div className="col-xl-4 col-lg-7">
                <PrimaryBtn
                    text="Проверить кошелек"
                    imageSrc={TelegramIcon}
                />
            </div>
            <div className="col-xl-4 col-lg-7">
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


