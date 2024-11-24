import React from 'react'
import EnergyIcon from '../../assets/home-energy.png'
import "./Home.css"
import ButtonsGroup from '../elements/ButtonsGroup/ButtonsGroup';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      <div className="home-bg">
        <div className="content wrapper-overflow section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-11">
                <h1>{t('homeBanner.title')}</h1>
              </div>
            </div>
            <div className="row text-center text-lg-start justify-content-center description gy-4">
              <div className="col-lg-2 ">
                <img src={EnergyIcon} alt="72%" />
              </div>
              <div className="col-9 col-lg-4">
                <p className="subheading">
                  {t('homeBanner.subtitle')}
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
