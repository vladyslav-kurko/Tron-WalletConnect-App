import React from 'react';
import './RiskMessage.css';
import AttentionImage from '../../assets/attention.png';
import { useTranslation } from 'react-i18next';

const RiskMessage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="risk-message-container wrapper-overflow section">
        <div className="container risk-message-section">
          <div className="row text-center">
              <p className="highlight">
                  {t('riskMessage.title')}
              </p>
          </div>
          <div className="row align-items-center justify-content-center gy-4">
            <div className="col-3 col-lg-1">
              <img src={AttentionImage} className="risk-icon" />
            </div>
            <div className="col-9 col-lg-5">
              <p className="risk-text mb-0 text-muted">
                {t('riskMessage.description')}
              </p>
            </div>
          </div>
        </div>
    </div>
  );
};
  
export default RiskMessage;