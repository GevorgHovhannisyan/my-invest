import { FormattedMessage } from "react-intl";

const WhyMyInvest = () => {
  return (
    <div className="container why-invest-container">
      <div className="why-invest">
        <div className="sub-title">
          <FormattedMessage id="videos_subtitle" />
        </div>
        <div className="title">
          <FormattedMessage id="advantages_title" />
        </div>

        <div className="invest-benefits">
          <ul>
            <li>
              <div className="invest-list-inner">
                <div className="icon-block">
                  <img src="/images/why-invest/stock-candle.svg" alt="" />

                  <div className="action-line"></div>
                </div>
                <div className="benefit-title">
                  <FormattedMessage id="advantage_item1_title" />
                </div>
                <div className="description">
                  <FormattedMessage id="advantage_item1_text" />
                </div>
              </div>
            </li>

            <li>
              <div className="invest-list-inner">
                <div className="icon-block">
                  <img src="/images/why-invest/stock-candle.svg" alt="" />

                  <div className="action-line"></div>
                </div>
                <div className="benefit-title">
                  <FormattedMessage id="advantage_item5_title" />
                </div>
                <div className="description">
                  <FormattedMessage id="advantage_item5_text" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyMyInvest;
