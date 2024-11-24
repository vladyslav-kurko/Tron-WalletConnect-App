import React from 'react';
import { Row, Col, } from 'react-bootstrap';
import './SaveCrypto.css';
import ButtonsGroup from '../elements/ButtonsGroup/ButtonsGroup';
import { useTranslation } from 'react-i18next';

const SaveCrypto: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="save-crypto-section section">
            <div className="wide-wrapper">
                <div className='save-crypto-container'>
                    <div className="save-crypto-content">
                        <Row className="justify-content-center text-center">
                            <Col xs={8}>
                                <h3 className="save-crypto-title">{t('saveCrypto.title')}</h3>
                            </Col>
                        </Row>
                        <ButtonsGroup secondaryColor="white" />
                        {/* <ButtonsGroup  /> */}
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default SaveCrypto;

