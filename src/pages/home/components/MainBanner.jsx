import { useEffect, useState } from "react";
import "../../../assets/scss/pages/home/home.scss";
import Header from "../../../components/header";
import AppDownloadModal from "./AppDownloadModal";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { languageSelector } from "../../../redux/slices/langauge/langauge";

const MainTopBanner = () => {
  const [topBannerClass, setTopBannerClass] = useState("");
  const [opened, setOpened] = useState(false);
    const lang = useSelector(languageSelector); // "hy" | "en" | "ru"

  const addBannerClass = () => {
    setTimeout(() => {
      setTopBannerClass("loaded");
    }, 500);
  };
  useEffect(() => {
    addBannerClass();
  }, []);

  // const BannerImages = () => {
  //   const lang = useSelector(languageSelector); // "hy" | "en" | "ru"

  //   const basePath = `/images/banner/${lang}`;

  //   return (
  //     <div className="container">
  //       <div className="inner_section">
  //         <div className="left_img">
  //           <img src={`${basePath}/left.png`} alt="" />
  //         </div>
  //         <div className="center_img">
  //           <img src={`${basePath}/Center.png`} alt="" />
  //         </div>
  //         <div className="right_img">
  //           <img src={`${basePath}/Right.png`} alt="" />
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <div className={`main-top-banner full-width ${topBannerClass}`}>
      <AppDownloadModal opened={opened} closeModal={() => setOpened(false)} />
      <Header />
      {/* <span className="left-bg"></span>
      <span className="right-bg"></span> */}
      <div className="top-inner">
        <div className="title_banner">
          <div className="invest-word">
            {" "}
            <FormattedMessage id="hero_section_title" />
          </div>
          <div className="inner_title">
            <span>
              {" "}
              <FormattedMessage id="hero_section_your" />
            </span>
            <span>
              {" "}
              <FormattedMessage id="hero_section_app" />
            </span>
          </div>
        </div>
        <div className="top-description">
          <div className="inner-description">
            <FormattedMessage id="hero_section_text" />
          </div>

          <button className="description-btn" onClick={() => setOpened(true)}>
            <FormattedMessage id="download_btn" />
            <span className="icon-arrow-right"></span>
          </button>
        </div>
      </div>
      {/* <BannerImages /> */}
      <div className="container">
        <div className="inner_section">
          <div className="left_img">
            <img src={`/images/banner/${lang}/left.png`} alt="" />
          </div>
          <div className="center_img">
            <img src={`/images/banner/${lang}/Center.png`} alt="" />
          </div>
          <div className="right_img">
            <img src={`/images/banner/${lang}/Right.png`} alt="" />
          </div>
        </div>
      </div>

      <div className="dots-block">
        <img className="dots-1" src="/images/banner/banner-dots-1.gif" alt="" />
        <img className="dots-2" src="/images/banner/banner-dots-2.gif" alt="" />
      </div>
    </div>
  );
};

export default MainTopBanner;
