import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Faq.css';
import PrimaryBtn from '../elements/PrimaryBtn/PrimaryBtn';
import TelegramBlue from '../../assets/telegram-blue.png';
import { faqDataRu } from './faq-data-ru'
import { faqDataEn } from './faq-data-en'
import { useTranslation } from 'react-i18next';

const Faq: React.FC = () => {
  const { t, i18n } = useTranslation()

  let faqData = i18n.language == "en" ? faqDataEn : faqDataRu;

  return (
    <div className="faq-container wrapper-overflow section">
      <div className="container">
        <div className="row text-center">
          <div>
            <h2 className="col faq-title">FAQs</h2>
          </div>
        </div>
        <div className="row gy-5 gx-5">
          <div className="col-lg-4 order-2 order-lg-1 ">
            <div className="contact-us">
              <h4 className='contact-us-title'>{t('contactUs.title')}</h4>
              <p className='contact-us-description'>
                {t('contactUs.description')}
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
                {t('contactUs.infoFirstPart')}  <strong>24/7</strong>, {t('contactUs.infoSecondPart')} 
              </p>
            </div>
          </div>
          <div className="col-lg-8 order-1 order-lg-2">
            <div className="accordion">
              <Accordion>
                {faqData.map((faq, index) => (
                  <Accordion.Item eventKey={index.toString()} key={index}>
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
