import { useNavigate, useLocation } from "react-router-dom";

const useLanguageNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateWithLanguage = (lang: string) => {
    const pathSegments = location.pathname.split('/').filter(Boolean); // Get the path segments

    // Check if the first segment is a language code
    const isLangSegment = /^[a-z]{2}$/.test(pathSegments[0]);

    if (isLangSegment) {
      // Replace the existing language segment
      pathSegments[0] = lang;
    } else {
      // Add the language segment at the beginning
      pathSegments.unshift(lang);
    }

    // Construct the new pathname
    const newPathname = `/${pathSegments.join('/')}`;

    // Navigate to the new path while keeping search params and state
    navigate(`${newPathname}${location.search}`, { replace: true });
  };

  return { navigateWithLanguage };
};

export default useLanguageNavigation;
