import React from 'react';
import './Footer.css';
import Logo from '../../assets/logo.png';
import Iso2015 from '../../assets/iso-2015.png'
import Iso2017 from '../../assets/iso-2017.png'
import Trustpilot from '../../assets/Trustpilot.png'
// import TelegramLogo from '../../assets/telegram-circle.png'
// import LinkedInLogo from '../../assets/linkedin-circle.png'
// import XLogo from '../../assets/x-circle.png'
// import YoutubeLogo from '../../assets/youtube-circle.png'
// import MediumLogo from '../../assets/medium-circle.png'

const Footer: React.FC = () => {
  return (
    <div className="footer-section wrapper-overflow section">
      <div className="container">
        <div className="footer-container">
          <div className="row justify-content-between gx-4 gx-lg-5 gy-3">
            <div className="col-6 col-lg-2 order-1 d-flex align-items-center align-items-lg-start">
              <img src={Logo} alt="AMLBot" className='footer-logo' />
            </div>
            <div className="col-6 col-lg-4 order-3 order-lg-2">
              <div className="settlement">
                <h5 className='settlement-title'>Safelement Limited,</h5>
                <p className="settlement-description">
                  Office 1111, Suite 1102, Lee Garden One, 33
                  Hysan Avenue, Causeway Bay, Hong Kong
                </p>
              </div>
            </div>
            <div className="col-6 col-lg-3 order-2 order-lg-3">
              <div className="iso-coins d-flex justify-content-start justify-content-lg-end  gap-4">
                <img src={Iso2015} alt="Iso2015" />
                <img src={Iso2017} alt="Iso2017" />
              </div>
            </div>
            <div className="col-6 col-lg -3 order-4">
              <div className="rating">
                <img src={Trustpilot} alt="Trustpilot" />
              </div>
            </div>
          </div>
          {/* <div className="footer-divider" />
          <div className="row gx-4 gx-lg-5 gy-5">
            <div className="col-6 col-lg-2">
              <div className="links-block">
                <h6 className='links-block-title'>Для бизнеса</h6>
                <div className="links-list">
                  <div><a href="" className="footer-link">KYT</a></div>
                  <div><a href="" className="footer-link">KYC</a></div>
                  <div><a href="" className="footer-link">AMLBot</a></div>
                  <div><a href="" className="footer-link">AML Тренинг</a></div>
                  <div><a href="" className="footer-link">AML консалтинг</a></div>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="links-block">
                <h6 className='links-block-title'>Для личного пользования</h6>
                <div className="links-list">
                  <div><a href="" className="footer-link">AML Чат-бот</a></div>
                  <div><a href="" className="footer-link">Мобильное приложение</a></div>
                  <div><a href="" className="footer-link">Расследование</a></div>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-2">
              <div className="links-block">
                <h6 className='links-block-title'>Компания</h6>
                <div className="links-list">
                  <div><a href="" className="footer-link">О нас</a></div>
                  <div><a href="" className="footer-link">Анализ</a></div>
                  <div><a href="" className="footer-link">Сертификаты</a></div>
                  <div><a href="" className="footer-link">Блог</a></div>
                  <div><a href="" className="footer-link">Пресс-кит</a></div>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3 offset-lg-2">
              <div className="links-block">
                <h6 className='links-block-title'>Социальные сети</h6>
                <div className="links-list icon-links-list">
                  <div className='d-flex align-items-center'><a href="" className="footer-link"><img src={TelegramLogo} alt="Telegram" />Telegram</a></div>
                  <div className='d-flex align-items-center'><a href="" className="footer-link"><img src={LinkedInLogo} alt="LinkedIn" />LinkedIn</a></div>
                  <div className='d-flex align-items-center'><a href="" className="footer-link"><img src={XLogo} alt="X" />X</a></div>
                  <div className='d-flex align-items-center'><a href="" className="footer-link"><img src={YoutubeLogo} alt="YouTube" />YouTube</a></div>
                  <div className='d-flex align-items-center'><a href="" className="footer-link"><img src={MediumLogo} alt="Medium" />Medium</a></div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="footer-divider" />
          <div className="row gy-3">
            <div className="col-lg-2 order-4 order-lg-1 d-flex justify-content-center align-items-center">
              <div className="copyright">© 2024 AMLBot</div>
            </div>
            <div className="col-lg-2 order-1 order-lg-2 d-flex justify-content-center align-items-center">
              <div className="support-button">
                <a className="footer-support-button" href=''>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16" 
                    width="16" 
                    height="16"
                    className="support-button-svg"
                    fill="none"
                  >
                    <path d="M6.27812 9.87845L6.01345 13.6011C6.39212 13.6011 6.55612 13.4385 6.75279 13.2431L8.52815 11.5465L12.2068 14.2404C12.8815 14.6164 13.3568 14.4185 13.5388 13.6198L15.9535 2.30509L15.9541 2.30442C16.1681 1.30709 15.5935 0.917091 14.9361 1.16176L0.742785 6.59576C-0.225882 6.97176 -0.211215 7.51176 0.578118 7.75642L4.20679 8.88507L12.6354 3.61109C13.0321 3.34842 13.3928 3.49376 13.0961 3.75642L6.27812 9.87845Z"/>
                  </svg>
                  <span className="support-button-text">Поддержка</span>
                </a>
              </div>
            </div>
            {/* <div className="col-lg-2 offset-lg-3 order-2 order-lg-3 d-flex justify-content-center align-items-center"> 
              <div className="agreement">
                <a href="" className='footer-bottom-link'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 22" 
                    width="20" 
                    height="22"
                    className="pdf-link-svg"
                    fill="none"
                  >
                    <path d="M12.7823 0H4.92818C3.78076 0 2.84689 0.93452 2.84689 2.08129V9.77752H2.64361C2.18051 9.77752 1.80493 10.1527 1.80493 10.6162V15.7025C1.80493 16.166 2.18047 16.5411 2.64361 16.5411H2.84689V17.4738C2.84689 18.6218 3.78076 19.5551 4.92818 19.5551H15.6448C16.7915 19.5551 17.7255 18.6218 17.7255 17.4738V4.92585L12.7823 0ZM4.00514 11.5341C4.25092 11.4926 4.59641 11.4613 5.08315 11.4613C5.57505 11.4613 5.92565 11.5552 6.16121 11.7438C6.38623 11.9215 6.53809 12.2149 6.53809 12.5601C6.53809 12.9053 6.42302 13.1987 6.21366 13.3975C5.94134 13.6538 5.53863 13.7689 5.06754 13.7689C4.96269 13.7689 4.86872 13.7637 4.79523 13.7535V15.0147H4.00514V11.5341ZM15.6448 18.2805H4.92818C4.48389 18.2805 4.12211 17.9187 4.12211 17.4738V16.5411H14.1122C14.5754 16.5411 14.9509 16.166 14.9509 15.7025V10.6162C14.9509 10.1527 14.5754 9.77752 14.1122 9.77752H4.12211V2.08129C4.12211 1.63765 4.48394 1.27586 4.92818 1.27586L12.3055 1.26816V3.99506C12.3055 4.79156 12.9517 5.43844 13.7488 5.43844L16.4201 5.43077L16.4502 17.4738C16.4502 17.9187 16.089 18.2805 15.6448 18.2805ZM7.04755 14.9988V11.5341C7.34059 11.4875 7.72253 11.4613 8.12561 11.4613C8.79548 11.4613 9.22987 11.5815 9.57024 11.8378C9.93653 12.1101 10.1666 12.5441 10.1666 13.1673C10.1666 13.8423 9.92083 14.3084 9.58042 14.596C9.20902 14.9047 8.64367 15.0511 7.95299 15.0511C7.53937 15.0511 7.24633 15.0249 7.04755 14.9988ZM12.8482 11.4875V12.1414H11.4927V12.9475H12.7594V13.5963H11.4927V15.0147H10.6921V11.4875H12.8482ZM8.20932 12.0736C8.89485 12.0736 9.32413 12.461 9.31902 13.1936C9.31902 14.0361 8.84792 14.4337 8.12561 14.4286C8.0262 14.4286 7.91624 14.4286 7.84814 14.4126V12.105C7.9162 12.089 8.03127 12.0736 8.20932 12.0736ZM5.12505 12.0627C5.52265 12.0627 5.748 12.2564 5.748 12.5812C5.748 12.9424 5.48623 13.1565 5.06243 13.1565C4.94704 13.1565 4.86332 13.1514 4.79523 13.136V12.0941C4.85274 12.0788 4.96269 12.0627 5.12505 12.0627Z"/>
                  </svg>
                  <span>Польз. соглашение</span></a>
              </div>
            </div>
            <div className="col-lg-3 order-3 order-lg-4 d-flex justify-content-center align-items-center"> 
              <div className="privacy-policy">
                <a href="" className='footer-bottom-link'>Политика конфиденциальности</a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
