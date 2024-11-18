import React from 'react';
import './Features.css';
import SearchImage from '../../assets/search.png';
import ConnectionsImage from '../../assets/connections.png';
import SecurityImage from '../../assets/security.png';

const featuresData = [
  {
    icon: SearchImage, // Placeholder icon; replace with an actual image if needed
    title: 'Подозрительные транзакции',
    description: 'Выявление активов, связанных с незаконной деятельностью, включая мошенничество, терроризм, вымогательство и другие преступления.',
  },
  {
    icon: ConnectionsImage, // Placeholder icon; replace with an actual image if needed
    title: 'Расследования',
    description: 'Просматривайте прямые и косвенные связи между заданным адресом и выявленными кластерами, общую сумму, отправленную на/из целевого кошелька, и расстояние до него.',
  },
  {
    icon: SecurityImage, // Placeholder icon; replace with an actual image if needed
    title: 'Отслеживание адреса',
    description: 'Отслеживание в реальном времени всех транзакций, связанных с указанным адресом блокчейна, получение мгновенных уведомлений о входящих и исходящих транзакциях.',
  },
];

const Features: React.FC = () => {
  return (
    <div className="features-container wrapper-overflow section">
      <div className="container">
        <div className="row equal-height-row d-flex flex-wrap gx-2">
          {featuresData.map((feature, index) => (
            <div className="col-md-4 d-flex flex-column">
              <div className="feature-card" key={index}>
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