import React from 'react';
import './VerificationSteps.css';
import PrimaryBtn from '../elements/PrimaryBtn/PrimaryBtn';
import TelegramBlue from '../../assets/telegram-blue.png';
import TelegramWhite from '../../assets/telegram-icon.png';
// import SecondaryBtn from '../elements/SecondaryBtn/SecondaryBtn';

import linksConfig from '../../linksConfig';
import { useTranslation } from 'react-i18next';

const VerificationSteps: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className='verification-steps-section section'>
      <div className="wide-wrapper">
        <div className="verification-steps-container">
          <div className="verification-steps-content">
            <div className="row align-items-top gx-5 gy-4">
              <div className="col-xl-3 col-lg-6 col-md-12 title-section">
                <h2>{t('verificationSteps.title')}</h2>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-12 first-step">
                <div className="step">
                  <div className="step-title step-one">
                    <h4>{t('verificationSteps.firstStep.title')}</h4>
                  </div>
                  <div className="step-content">
                    <p>
                      {t('verificationSteps.firstStep.description')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-12 first-mobile-button">
                  <PrimaryBtn text={t('verificationSteps.telegramButton')}  imageSrc={TelegramBlue} url="" style='white' />
              </div>
              <div className="col-xl-3 col-lg-6 col-md-12 second-step">
                <div className="step">
                  <div className="step-title step-two">
                    <h4>{t('verificationSteps.secondStep.title')}</h4>
                  </div>
                  <div className="step-content">
                    <p>
                      {t('verificationSteps.secondStep.description')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-12 buttons">
                  <PrimaryBtn text={t('verificationSteps.telegramButton')} imageSrc={TelegramBlue} url="" style='white' />
                  <div className="separator">
                    <span className="separator-text">{t('verificationSteps.or')}</span>
                  </div>
                  <PrimaryBtn text={t('verificationSteps.supportButton')}  imageSrc={TelegramWhite} url={linksConfig.support}/>
                  {/* <SecondaryBtn
                    text='Тех. поддержка'
                    url=""
                    justifyContent='space-between'
                    size='small'
                  /> */}
              </div>
              <div className="col-xl-3 col-lg-6 col-md-12 second-mobile-button">
                <PrimaryBtn text={t('verificationSteps.supportButton')}  imageSrc={TelegramWhite} url={linksConfig.support}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerificationSteps;