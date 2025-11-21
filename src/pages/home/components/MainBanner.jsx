import { useEffect, useState } from "react";
import "../../../assets/scss/pages/home/home.scss";
import Header from "../../../components/header";
import AppDownloadModal from "./AppDownloadModal";

const MainTopBanner = () => {
  const [topBannerClass, setTopBannerClass] = useState("");
  const [opened, setOpened] = useState(false);
  const addBannerClass = () => {
    setTimeout(() => {
      setTopBannerClass("loaded");
    }, 3000);
  };
  useEffect(() => {
    addBannerClass();
  }, []);
  return (
    <div className={`main-top-banner full-width ${topBannerClass}`}>
      <AppDownloadModal opened={opened} closeModal={() => setOpened(false)} />

      <Header />
      <span className="left-bg"></span>
      <span className="right-bg"></span>
      <div className="top-inner">
        <div className="title_asd">
          <div className="invest-word">Ներդրումները</div>
          <div className="inner_title">
            <span>քո</span>
            <span>ափում</span>
          </div>
        </div>
        <div className="top-description">
          <div className="inner-description">
            Միացիր խելացի ներդրողների համայնքին և ստեղծիր քո ֆինանսական
            հաջողությունը՝ օգտվելով MyInvest-ի ցածր միջնորդավճարներից և վստահելի
            սպասարկումից։
          </div>

          <button class="description-btn" onClick={setOpened}>
            Ներբեռնել<span class="icon-arrow-right"></span>
          </button>
        </div>
      </div>
      <div className="container">
        <div className="inner_section">
          {/* <div className="home-dots-block">
            <img src="" alt="" />
          </div> */}
          <div className="left_img">
            <img src="/images/banner/banner-left.png" alt="" />
          </div>
          <div className="center_img">
            <img src="/images/banner/banner-center.png" alt="" />
          </div>
          <div className="right_img">
            <img src="/images/banner/banner-right.png" alt="" />
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
