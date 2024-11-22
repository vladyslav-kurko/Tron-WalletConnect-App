import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Faq.css';
import PrimaryBtn from '../elements/PrimaryBtn/PrimaryBtn';
import TelegramBlue from '../../assets/telegram-blue.png';
import { faqData } from './FaqData'

const Faq: React.FC = () => {
  return (
    <div className="faq-container wrapper section">
      <div className="container">
        <div className="row text-center">
          <div>
            <h2 className="col faq-title">FAQs</h2>
          </div>
        </div>
        <div className="row gy-5 gx-5">
          <div className="col-lg-4 order-2 order-lg-1 ">
            <div className="contact-us">
              <h4 className='contact-us-title'>Вашего вопроса нет в списке?</h4>
              <p className='contact-us-description'>
                Свяжитесь с нами в Telegram. Мы
                круглосуточно на связи, чтобы
                гарантировать комфорт для всех.
              </p>
              <PrimaryBtn 
                text='Мы в Telegram'
                url=''
                imageSrc={TelegramBlue}
                style='white'
                justifyContent='space-between'
                size='small'
              />
              <p className='contact-us-info'>
                Мы на связи <strong>24/7</strong>, однако не всегда
                можем быстро ответить ночью
              </p>
            </div>
          </div>
          <div className="col-lg-8 order-1 order-lg-2">
            <div className="accordion">
              <Accordion>
                {faqData.map((faq, index) => (
                  <Accordion.Item eventKey={index.toString()}>
                    <Accordion.Header>{faq.title}</Accordion.Header>
                    <Accordion.Body>
                      <div dangerouslySetInnerHTML={{ __html: faq.description }}></div>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
