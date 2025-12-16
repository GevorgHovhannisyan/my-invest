import { useState } from "react";
import AppDownloadModal from "../../pages/home/components/AppDownloadModal";
import { LanguageSwitcher } from "../language-swicher";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import "./animation.css";

const Header = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="container header">
      <AppDownloadModal opened={opened} closeModal={() => setOpened(false)} />
      <div className="socials">
        <ul>
          <li>
            <Link
              to="https://www.facebook.com/Ameriabank"
              target="_blank"
            >
              <span className="icon-facebook"></span>
            </Link>
          </li>
          <li>
            <Link
              to="https://www.instagram.com/ameriabank/"
              target="_blank"
            >
              <span className="icon-instagram"></span>
            </Link>
          </li>
          <li>
            <Link
              to="https://t.me/myinvest_blog"
              target="_blank"
            >
              <span className="icon-telegram"></span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="logo">
        <Link to="/">
          <img src="/images/my-invest.png" alt="My invest" />
        </Link>
      </div>
      <div className="language-academy">
        <div className="academy-header">
          <button onClick={() => setOpened(true)}>
            <div className="header-qr">
              <div className="header-anim-block">
                <img src="/images/icons/academy.svg" alt="" />
                <span>
                  {" "}
                  <FormattedMessage id="academy_btn" />{" "}
                </span>
              </div>
            </div>
          </button>
        </div>

        <LanguageSwitcher lang={"en"} />
      </div>
    </div>
  );
};

export default Header;
