import React from 'react';
import './RiskMessage.css';
import AttentionImage from '../../assets/attention.png';

const RiskMessage: React.FC = () => {
    return (
      <div className="risk-message-container wrapper section">
          <div className="container risk-message-section">
            <div className="row text-center">
                <p className="highlight">
                    23% кошельков хранят рискованные активы,
                    в результате чего пользователи уязвимы для
                    мошенничества, обмана или действий
                    недобросовестных лиц.
                </p>
            </div>
            <div className="row align-items-center justify-content-center gy-4">
              <div className="col-3 col-lg-1">
                <img src={AttentionImage} className="risk-icon" />
              </div>
              <div className="col-9 col-lg-5">
                <p className="risk-text mb-0 text-muted">
                    Оценка рисков AMLBot основана на данных из многочисленных источников, что гарантирует наличие у нас самых надежных данных в отрасли
                </p>
              </div>
            </div>
          </div>
      </div>
    );
  };
  
  export default RiskMessage;