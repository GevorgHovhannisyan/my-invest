import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  languageSelector,
  setLanguage,
} from "../../redux/slices/langauge/langauge";
import { LanguageTransCodes } from "../../constants/langauge";
// import { getRouteMain } from "../../constants/router";

export const LanguageSwitcher = ({ lang }) => {
  const [opened, setOpened] = useState(false);
  // const { pathname } = useLocation();
  const dispatch = useDispatch();
  const lgRef = useRef();

  const toggleLgList = () => {
    opened ? setOpened(false) : setOpened(true);
  };

  const handleOutsideClick = (e) => {
    if (!lgRef?.current?.contains(e.target)) {
      setOpened(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (opened) {
        handleOutsideClick(e);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [opened]);

  const locale = useSelector(languageSelector);
  const storageLocale = localStorage.getItem("locale");
  if (storageLocale && storageLocale !== locale) {
    dispatch(setLanguage(storageLocale));
  }

  const changeLanguage = (lang) => {
    dispatch(setLanguage(lang));
  };

  const getUrl = () => {
    // lang_val
    return "/";
    // const lang_switcher = lang_val;
    // const mainPath = getRouteMain();
    // const replacer = lang_switcher === LanguageTransCodes.AM ? '' : mainPath + lang_switcher;
    // return lang ? pathname.replace(mainPath + lang, replacer) : pathname.replace(mainPath, replacer + mainPath);
  };

  return (
    <div className={`lg_block ${opened ? "opened" : ""}`}>
      <div className="lg_inner">
        <button
          className="action_btn"
          aria-label="language"
          onClick={toggleLgList}
          ref={lgRef}
        >
          <img src="/images/language-switcher.svg" alt="" />
        </button>
        <div className="langauges-list">
        <ul className="lg_list">
          <li onClick={() => changeLanguage(LanguageTransCodes.EN)}>
            <NavLink
              to={getUrl(LanguageTransCodes.EN)}
              className={`${
                lang === LanguageTransCodes.EN ? "current_lg" : ""
              }`}
            >
              <img src="/images/lng_en.svg" alt="" />
              <span>English</span>
            </NavLink>
          </li>
          <li onClick={() => changeLanguage(LanguageTransCodes.AM)}>
            <NavLink
              to={getUrl(LanguageTransCodes.AM)}
              className={`${!lang ? "current_lg" : ""}`}
            >
              <img src="/images/lng_am.svg" alt="" />
              <span>Armenian</span>
            </NavLink>
          </li>
          <li onClick={() => changeLanguage(LanguageTransCodes.RU)}>
            <NavLink
              to={getUrl(LanguageTransCodes.RU)}
              className={`${
                lang === LanguageTransCodes.RU ? "current_lg" : ""
              }`}
            >
              <img src="/images/lng_ru.svg" alt="" />
              <span>Russian</span>
            </NavLink>
          </li>
        </ul>
        </div>
      </div>
    </div>
  );
};
