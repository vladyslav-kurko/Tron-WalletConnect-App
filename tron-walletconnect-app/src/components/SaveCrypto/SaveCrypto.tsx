import React from 'react';
import { Row, Col, } from 'react-bootstrap';
import './SaveCrypto.css';
import ButtonsGroup from '../elements/ButtonsGroup/ButtonsGroup';

const SaveCrypto: React.FC = () => {
    return (
        <div className="save-crypto-section section">
            <div className="wide-wrapper">
                <div className='save-crypto-container'>
                    <div className="save-crypto-content">
                        <Row className="justify-content-center text-center">
                            <Col xs={8}>
                                <h3 className="save-crypto-title">Защитите свои крипту находя рискованные кошельки и транзакции</h3>
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

