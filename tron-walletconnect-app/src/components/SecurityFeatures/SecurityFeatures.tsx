import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FeatureCard from './FeatureCard/FeatureCard';
import './SecurityFeatures.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RiskScoreImage from '../../assets/risk-score-feature.png'
import BoostSecurityImage from '../../assets/boost-security-feature.png'
import LowImage from '../../assets/low-feature.png'
import ButtonsGroup from '../elements/ButtonsGroup/ButtonsGroup';

const features = [
  {
    title: 'Защита от приостановки счета на платформе CEX',
    description: 'Регулярная проверка ваших криптокошельков и транзакций может значительно снизить риск заморозки ваших активов на биржах.',
    image: RiskScoreImage,
    background: "",
  },
  {
    title: 'Усиление безопасности',
    description: 'Выявляйте и устраняйте потенциальные угрозы безопасности для защиты ваших инвестиций и активов.',
    image: BoostSecurityImage ,
    background: "",
    imageOnLeft: true,
  },
  {
    title: 'Оставайтесь в рамках закона и избегайте неприятностей',
    description: 'Соблюдайте действующие правила и избегайте штрафов. Регулярные проверки помогут вам придерживаться требований законодательства, избегая штрафов и юридических проблем.',
    image: LowImage,
    background: "", 
  }
];

const SecurityFeatures: React.FC = () => {
  return (
    <div className="secutity-features-container wrapper-overflow section">
        <Container className="features-section">
            <Row className="text-center">
                <Col>
                    <h2 className="features-title">Обеспечьте безопасность ваших криптовалют</h2>
                    <p className="features-subtitle">Выявление потенциальных рисков</p>
                </Col>
            </Row> 
        </Container>
        {features.map((feature) => (
            <FeatureCard
              title={feature.title}
              description={feature.description}
              image={feature.image}
              background={feature.background}
              imageOnLeft={feature.imageOnLeft ?? false}
            />
        ))}
        <Container>
          <ButtonsGroup />
        </Container>
    </div>
  );
};

export default SecurityFeatures;