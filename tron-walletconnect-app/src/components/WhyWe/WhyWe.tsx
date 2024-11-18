import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './WhyWe.css';
import GoalIcon from '../../assets/goal.png';
import StarIcon from '../../assets/star.png';
import ArrowRight from '../../assets/arrow-right.png';
import PrimaryBtn from '../elements/PrimaryBtn/PrimaryBtn';

const WhyWe: React.FC = () => {
  return (
    <div className="why-we-container wrapper-overflow section">
      <div className="container">
        <div className="row text-center">
          <div>
            <h2 className="col why-we-title">Почему AMLBot?</h2>
          </div>
        </div>
        <div className="row equal-height-row d-flex flex-wrap gy-2"> {/* Ensure row and columns align/stretch */}
          <div className="col d-flex flex-column"> {/* Full height for equal columns */}
            <div className="why-point why-point-left flex-grow-1"> {/* Flex-grow fills column */}
              <Container>
                <Row className="why-point-title align-items-center">
                  <Col xs={9}>
                    <h4>Индивидуальный подход</h4>
                  </Col>
                  <Col xs={3}><img src={GoalIcon} alt="Goal" /></Col>
                </Row>
                <Row>
                  <Col>
                    <div className="list">
                        <ul>
                            <li>
                            AMLBot предлагает широкий спектр решений
                            в сфере соответствия нормативным
                            требованиям, адаптированных для каждого
                            клиента.
                            </li>
                            <li>
                            Мы уверены, что соответствуем вашим
                            требованиям, ведь мы помогли 300+
                            криптовалютным компаниям различных
                            уровней в 25 юрисдикциях.
                            </li>
                        </ul>
                    </div>
                  </Col>
                </Row>
                <Row className='button-row'>
                    <Col xl={8}>
                        <PrimaryBtn
                            text="Давайте обсудим"
                            imageSrc={ArrowRight}
                            url=""
                            justifyContent="space-between" // Choose "center" or "space-between"
                        />
                    </Col>
                </Row>
              </Container>
            </div>
          </div> 
          <div className="col d-flex flex-column">
            <div className="why-point why-point-right flex-grow-1">
              <Container>
                <Row className="why-point-title align-items-center">
                  <Col xs={9}>
                    <h4>Интегрированная платформа соблюдения нормативных требований</h4>
                  </Col>
                  <Col xs={3}><img src={StarIcon} alt="Star" /></Col>
                </Row>
                <Row>
                  <Col>
                    <div className="list">
                      <ul>
                        <li>
                          Мы предлагаем оценку KYT/кошельков, KYC,
                          AML и многое другое для криптовалютных
                          компаний
                        </li>
                        <li>
                          Оценка рисков AMLBot основана на данных
                          из многочисленных источников, что
                          гарантирует наличие у нас самых надежных
                          данных в отрасли
                        </li>
                        <li>
                          Наши услуги и решения позволяют
                          оптимизировать процессы в вашей компании
                          и устраняют сложности, связанные с
                          соблюдением требований законодательства
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWe;
