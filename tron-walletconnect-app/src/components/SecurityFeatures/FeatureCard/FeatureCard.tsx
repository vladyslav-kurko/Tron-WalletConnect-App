import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './FeatureCard.css';

interface FeatureCardProps {
    title: string;
    description: string;
    image: string;
    background?: string;
    imageOnLeft?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, image, background = "", imageOnLeft = false }) => {
  return (
    <div
      className="feature-card-container"
      style={{
        backgroundImage: `url('${background}')`,
      }}
    >
        <Container className="feature-card-section">
            <Row className="align-items-center justify-content-center">
                <Col
                    xs={12}
                    md={5}
                    className={`text-start order-2 ${
                        imageOnLeft ? 'order-md-2' : 'order-md-1'
                    }`}
                >
                    <div className={`${imageOnLeft ? 'padding-left' : 'padding-right'}`}>
                        <h4 className="description-title">{title}</h4>
                        <p className="description-text">{description}</p>
                    </div>
                </Col>
                <Col
                    xs={12}
                    md={5}
                    className={`text-md-start order-1 ${
                        imageOnLeft ? 'order-md-1' : 'order-md-2'
                    }`}
                >
                    <img src={image} className="feature-card-image" />
                </Col>
            </Row>
        </Container>
    </div>
  );
};

export default FeatureCard;