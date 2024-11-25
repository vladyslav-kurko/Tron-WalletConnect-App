import React from 'react';
import './Features.css';
import SearchImage from '../../assets/search.png';
import ConnectionsImage from '../../assets/connections.png';
import SecurityImage from '../../assets/security.png';
import { useTranslation } from 'react-i18next';

const Features: React.FC = () => {
  const { t } = useTranslation(); 

  const featuresData = [
    {
      icon: SearchImage, // Placeholder icon; replace with an actual image if needed
      title: t('features.suspiciousTransactions.title'),
      description: t('features.suspiciousTransactions.description'),
    },
    {
      icon: ConnectionsImage, // Placeholder icon; replace with an actual image if needed
      title: t('features.investigations.title'),
      description: t('features.investigations.description'),
    },
    {
      icon: SecurityImage, // Placeholder icon; replace with an actual image if needed
      title: t('features.addressTracking.title'),
      description: t('features.addressTracking.description'),
    },
  ];

  return (
    <div className="features-container wrapper-overflow section">
      <div className="container">
        <div className="row equal-height-row d-flex flex-wrap gx-2">
          {featuresData.map((feature, index) => (
            <div className="col-md-4 d-flex flex-column" key={index}>
              <div className="feature-card">
                <div className="container">
                  <div className="row">
                    <div className="col-2 image-col">
                      <img src={feature.icon} className="feature-card-icon" />
                    </div>
                    <div className="col-md-12 col-10">
                      <h3 className="feature-title">{feature.title}</h3>
                      <p className="feature-description">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;