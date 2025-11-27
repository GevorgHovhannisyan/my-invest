import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";
import localTranslations from "../translations";
import { languageSelector } from "../redux/slices/langauge/langauge";
import { LanguageTransCodes } from "../constants/langauge";

const TranslateProvider = ({ children }) => {
  const langID = useSelector(languageSelector);

  const message = localTranslations[langID || LanguageTransCodes.AM];

  return (
    <IntlProvider locale={langID || LanguageTransCodes.AM} messages={message}>
      {children}
    </IntlProvider>
  );
};

export default TranslateProvider;
