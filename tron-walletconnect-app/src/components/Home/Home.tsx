import React from 'react'
import EnergyIcon from '../../assets/home-energy.png'
import "./Home.css"
import ButtonsGroup from '../elements/ButtonsGroup/ButtonsGroup';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="home-bg">
        <div className="content wrapper-overflow section">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>Защита ваших кошельков <br /> от грязных денег</h1>
              </div>
            </div>
            <div className="row text-center text-lg-start justify-content-center description gy-4">
              <div className="col-lg-2 ">
                <img src={EnergyIcon} alt="72%" />
              </div>
              <div className="col-lg-5">
                <p className="subheading">
                  Получение средств незаконного <br /> происхождения может привести к <br /> заморозке ваших средств
                </p>
              </div>
            </div>
            <ButtonsGroup rightButtonBorder={true}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
