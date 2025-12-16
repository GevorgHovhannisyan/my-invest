import { FormattedMessage } from "react-intl";
import "../../../assets/scss/imports/win/animation.css";

const WinBlock = () => {
  return (
    <div className="win-block container">
      <div className="win-container">
        <ul className="win-home-portfel">
          <li className="card">
            <div className="card-content">
              <div className="parent-anim">
                <div className="card-left">
                  <div className="card-label ">
                    <FormattedMessage id="win_block_label" />
                    <div className="action-line"></div>
                  </div>
                  <div className="card-title">
                    <FormattedMessage id="win_block_label" />
                    <br />
                    <span>
                      {" "}
                      <FormattedMessage id="win_block_subtitle" />
                    </span>
                  </div>
                  <div className="card-description ">
                    <FormattedMessage id="win_block_description" />
                  </div>
                  <button className="card-btn">
                    <FormattedMessage id="open_account_btn" />
                    <span className="icon-arrow-right"></span>
                  </button>
                </div>
                <div className="card-image-block left">
                  <img
                    className="web-win-image"
                    src="/images/win-block/home.png"
                    alt=""
                  />
                  <img
                    className="mobile-win-image"
                    src="/images/win-block/home-mobile.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card-content">
              <div className="parent-anim">
                <div className="card-left">
                  <div className="card-label ">
                    Բացի՛ր բրոքերային հաշիվ
                    <div className="action-line"></div>
                  </div>
                  <div className="card-title">
                    Շահիր՝ ներդրումային <br />
                    <span>պորտֆել</span>
                  </div>
                  <div className="card-description mardoto">
                    1 հատ 1,000,000֏ և 2 հատ 500,000֏ պորտֆելների խաղարկություն
                  </div>
                  <button className="card-btn">
                    <FormattedMessage id="open_account_btn" />
                    <span className="icon-arrow-right"></span>
                  </button>
                </div>
                <div className="card-image-block right">
                  <img
                    className="web-win-image"
                    src="/images/win-block/win-invest.png"
                    alt=""
                  />
                  <img
                    className="mobile-win-image"
                    src="/images/win-block/win-invest-mobile.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </li>
        </ul>

        <div className="bond-stock-info">
          <div className="info-block">
            <img src="/images/win-block/bond.png" alt="Bonds" />
            <span className="title">
              <FormattedMessage id="bonds_title" />
            </span>
            <p className="description">
              <FormattedMessage id="bonds_text" />
            </p>
          </div>
          <span className="middle-border"></span>
          <div className="info-block">
            <img src="/images/win-block/stock.png" alt="Stocks" />
            <span className="title">
              <FormattedMessage id="stocks_title" />
            </span>
            <p className="description">
              <FormattedMessage id="stocks_text" />
            </p>
          </div>
          <span className="middle-border"></span>

          <div className="info-block">
            <img src="/images/win-block/invest-fonds.png" alt="Invest" />
            <span className="title">
              <FormattedMessage id="etfs_title" />
            </span>
            <p className="description">
              <FormattedMessage id="etfs_text" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinBlock;
