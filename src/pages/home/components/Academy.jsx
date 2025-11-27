import "../../../assets/scss/pages/home/academy-btn-anim.css";
import { FormattedMessage } from "react-intl";

const Academy = () => {
  return (
    <div className="academy-parent container">
      <div className="academy-container-inner">
        <ul className="academy-blocks">
          <li className="academy-blocks-item tele">
            <div className="academy-blocks-item-inner">
              <div className="left-part">
                <div className="subtitle">
                  <FormattedMessage id="telegram_subtitle" />
                </div>
                <div className="title">
                  <FormattedMessage id="telegram_title" />
                </div>
                <div className="list-items">
                  <ul>
                    <li>
                      <span className="icon-checked"></span>
                      <div className="description">
                        <FormattedMessage id="telegram_item1" />
                      </div>
                    </li>
                    <li>
                      <span className="icon-checked"></span>
                      <div className="description">
                        <FormattedMessage id="telegram_item2" />
                      </div>
                    </li>
                    <li>
                      <span className="icon-checked"></span>
                      <div className="description">
                        <FormattedMessage id="telegram_item3" />
                      </div>
                    </li>
                  </ul>
                </div>

                <button className="telegram be-investor-btn">
                  <div className="telegram-be-investor-anim-block">
                    <FormattedMessage id="telegram_btn" />
                    <span className="icon-arrow-right-after"></span>
                  </div>
                </button>
              </div>
            </div>
          </li>

          <li className="academy-blocks-item academyy">
            <div className="academy-blocks-item-inner">
              <div className="left-part">
                <div className="subtitle">
                  <FormattedMessage id="academy_subtitle" />
                </div>
                <div className="title">
                  <FormattedMessage id="academy_title" />
                </div>
                <div className="list-items">
                  <ul>
                    <li>
                      <span className="icon-checked"></span>
                      <div className="description">
                        <FormattedMessage id="academy_item1" />
                      </div>
                    </li>
                    <li>
                      <span className="icon-checked"></span>
                      <div className="description">
                        <FormattedMessage id="academy_item2" />
                      </div>
                    </li>
                    <li>
                      <span className="icon-checked"></span>
                      <div className="description">
                        <FormattedMessage id="academy_item3" />
                      </div>
                    </li>
                  </ul>
                </div>

                <button className="academy be-investor-btn">
                  <div className="academy-be-investor-anim-block">
                    <FormattedMessage id="academy_btn_full" />
                    <span className="icon-arrow-right-after"></span>
                  </div>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Academy;
