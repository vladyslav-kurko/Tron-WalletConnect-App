import React from 'react';
import './VerificationSteps.css';
import PrimaryBtn from '../elements/PrimaryBtn/PrimaryBtn';
import TelegramBlue from '../../assets/telegram-blue.png';
import TelegramWhite from '../../assets/telegram-icon.png';
// import SecondaryBtn from '../elements/SecondaryBtn/SecondaryBtn';

import linksConfig from '../../linksConfig';

const VerificationSteps: React.FC = () => {
  return (
    <section className='verification-steps-section section'>
      <div className="wide-wrapper">
        <div className="verification-steps-container">
          <div className="verification-steps-content">
            <div className="row align-items-top gx-5 gy-4">
              <div className="col-xl-3 col-lg-6 col-md-12 title-section">
                <h2>Как проверить свой адрес?</h2>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-12 first-step">
                <div className="step">
                  <div className="step-title step-one">
                    <h4>Телеграмм бот</h4>
                  </div>
                  <div className="step-content">
                    <p>
                      Достаточно  перейти в Telegram бот и нажать кнопку [ AML ], 
                      чтобы инициировать комплексную проверку вашего криптокошелька. 
                      Это удобный вариант для пользователей, предпочитающих анонимность и безопасность.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-12 first-mobile-button">
                  <PrimaryBtn text="Телеграмм AML bot" imageSrc={TelegramBlue} url="" style='white' />
              </div>
              <div className="col-xl-3 col-lg-6 col-md-12 second-step">
                <div className="step">
                  <div className="step-title step-two">
                    <h4>Вебсайт</h4>
                  </div>
                  <div className="step-content">
                    <p>
                      Воспользуйтесь нашим удобным веб-сайтом для проверки вашего криптокошелька. 
                      Простой и интуитивно понятный интерфейс позволяет быстро получить результаты AML-проверки. 
                      Если у вас возникнут вопросы или сложности, наша техподдержка всегда готова прийти на помощь и оперативно решить вашу проблему.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-12 buttons">
                  <PrimaryBtn text="Телеграмм AML bot" imageSrc={TelegramBlue} url="" style='white' />
                  <div className="separator">
                    <span className="separator-text">ИЛИ</span>
                  </div>
                  <PrimaryBtn text="Тех. поддержка" imageSrc={TelegramWhite} url={linksConfig.support}/>
                  {/* <SecondaryBtn
                    text='Тех. поддержка'
                    url=""
                    justifyContent='space-between'
                    size='small'
                  /> */}
              </div>
              <div className="col-xl-3 col-lg-6 col-md-12 second-mobile-button">
                <PrimaryBtn text="Тех. поддержка" imageSrc={TelegramWhite} url={linksConfig.support}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerificationSteps;