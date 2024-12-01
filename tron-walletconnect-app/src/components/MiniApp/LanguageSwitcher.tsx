import useLanguageNavigation from "./useLanguageNavigation";
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { navigateWithLanguage } = useLanguageNavigation();
  const { i18n } = useTranslation();

  const switchToEnglish = () => {
    navigateWithLanguage("en");
  };

  const switchToRussian = () => {
    navigateWithLanguage("ru");
  };

  return (
    <>
      <button className={`${i18n.language == "en" ? "selected" : ""}`} disabled={i18n.language == "en" && true} onClick={switchToEnglish}>EN</button>
      <button className={`${i18n.language == "ru" ? "selected" : ""}`} disabled={i18n.language == "ru" && true} onClick={switchToRussian}>RU</button>
    </>
  );
};

export default LanguageSwitcher;