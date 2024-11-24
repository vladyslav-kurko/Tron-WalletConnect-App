import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FeatureCard from './FeatureCard/FeatureCard';
import './SecurityFeatures.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RiskScoreImage from '../../assets/risk-score-feature.png'
import BoostSecurityImage from '../../assets/boost-security-feature.png'
import LowImage from '../../assets/low-feature.png'
import ButtonsGroup from '../elements/ButtonsGroup/ButtonsGroup';
import { useTranslation } from 'react-i18next';

const SecurityFeatures: React.FC = () => {
  const { t } = useTranslation(); 

  const features = [
    {
      title: t('secutityFeatures.features.protection.title'),
      description: t('secutityFeatures.features.protection.description'),
      image: RiskScoreImage,
      background: "",
    },
    {
      title: t('secutityFeatures.features.strengtheningSecurity.title'),
      description: t('secutityFeatures.features.strengtheningSecurity.description'),
      image: BoostSecurityImage ,
      background: "",
      imageOnLeft: true,
    },
    {
      title: t('secutityFeatures.features.stayWithinLaw.title'),
      description: t('secutityFeatures.features.stayWithinLaw.description'),
      image: LowImage,
      background: "", 
    }
  ];

  return (
    <div className="secutity-features-container wrapper-overflow section">
        <Container className="features-section">
            <Row className="text-center">
                <Col>
                    <h2 className="features-title">{t('secutityFeatures.title')}</h2>
                    <p className="features-subtitle">{t('secutityFeatures.subtitle')}</p>
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
          <ButtonsGroup rightButtonBorder={true} />
        </Container>
    </div>
  );
};

export default SecurityFeatures;