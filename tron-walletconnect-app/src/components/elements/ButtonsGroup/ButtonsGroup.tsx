import React from 'react'
import TelegramIcon from '../../../assets/telegram-icon.png';
import "./ButtonsGroup.css"
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';
import SearchIcon from '../../../assets/search-icon.png';
// import SecondaryBtn from '../SecondaryBtn/SecondaryBtn';

interface ButtonsGroupProps {
    secondaryColor?: 'white' | 'black';
    rightButtonBorder?: boolean;
}

const ButtonsGroup: React.FC<ButtonsGroupProps> = ({ rightButtonBorder = false }) => { //{secondaryColor = "black"}
// const ButtonsGroup: React.FC = () => {
    return (
        <div className="row justify-content-center align-items-center flex-wrap gx-5 gy-4">
            <div className="col-xl-5 col-lg-7">
                <PrimaryBtn
                    text="Телеграмм AML BOT"
                    imageSrc={TelegramIcon}
                    url=""
                />
            </div>
            <div className="col-xl-5 col-lg-7">
                <PrimaryBtn
                    text="Проверить кошелек"
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


