import React from 'react';
import './PrimaryBtn.css';

interface PrimaryBtnProps {
  text: string;
  imageSrc: string;
  url: string;
  justifyContent?: 'center' | 'space-between';
  style?: "blue" | "white";
  size?: 'medium' | 'small'
}

const PrimaryBtn: React.FC<PrimaryBtnProps> = ({ text, imageSrc, url, justifyContent = 'center', style = "blue", size = "medium" }) => {
  const handleClick = () => {
    window.location.href = url;
  };

  return (
    <button
      className={`primary-button primary-button-${style} primary-button-${size}`}
      style={{ justifyContent }}
      onClick={handleClick}
    >
      <span className={`button-text button-text-${size}`}>{text}</span>
      <img src={imageSrc} alt="Button icon" />
    </button>
  );
};

export default PrimaryBtn;
