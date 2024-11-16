import React from 'react';
import './VerificationSteps.css';
import PrimaryBtn from '../elements/PrimaryBtn/PrimaryBtn';
import TelegramBlue from '../../assets/telegram-blue.png';
import SecondaryBtn from '../elements/SecondaryBtn/SecondaryBtn';

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
                    <h4>Мессенджеры</h4>
                  </div>
                  <div className="step-content">
                    <p>
                      Достаточно простого сообщения в Telegram или WhatsApp, чтобы инициировать
                      комплексную проверку вашего криптокошелька. Это удобный вариант для пользователей,
                      предпочитающих платформы мгновенного обмена сообщениями.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-12 second-step">
                <div className="step">
                  <div className="step-title step-two">
                    <h4>Вебсайт или приложение</h4>
                  </div>
                  <div className="step-content">
                    <p>
                      Более традиционный способ: войдите в свою учетную запись на нашем сайте. Здесь вы
                      можете приобрести и провести комплексную интерактивную проверку кошелька с
                      подробными инструкциями и поддержкой. Или загрузите наше мобильное приложение для
                      максимального удобства и доступности.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-12 buttons">
                  <PrimaryBtn text="Telegram Bot" imageSrc={TelegramBlue} url="" style='white' />
                  <div className="separator">
                    <span className="separator-text">ИЛИ</span>
                  </div>
                  <SecondaryBtn
                    text='Зарегистрируйтесь для доступа к дополнительным функциям'
                    url=""
                    justifyContent='space-between'
                    size='small'
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerificationSteps;