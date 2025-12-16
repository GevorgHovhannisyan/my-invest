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
                  <img src="/images/why-invest/support.svg" alt="" />
                </div>
                <div className="benefit-title">
                  <FormattedMessage id="advantage_item2_title" />
                </div>
                <div className="description">
                  <FormattedMessage id="advantage_item2_text" />
                </div>
              </div>
            </li>
            <li>
              <div className="invest-list-inner">
                <div className="icon-block">
                  <img src="/images/why-invest/exchanges.svg" alt="" />
                </div>
                <div className="benefit-title">
                  <FormattedMessage id="advantage_item3_title" />
                </div>
                <div className="description">
                  <FormattedMessage id="advantage_item3_text" />
                </div>
              </div>
            </li>

            <li>
              <div className="invest-list-inner">
                <div className="icon-block">
                  <img src="/images/why-invest/research.svg" alt="" />
                </div>
                <div className="benefit-title">
                  <FormattedMessage id="advantage_item4_title" />
                </div>
                <div className="description">
                  <FormattedMessage id="advantage_item4_text" />
                </div>
              </div>
            </li>

            <li>
              <div className="invest-list-inner">
                <div className="icon-block">
                  <img src="/images/why-invest/knowledge.svg" alt="" />
                </div>
                <div className="benefit-title">
                  <FormattedMessage id="advantage_item5_title" />
                </div>
                <div className="description">
                  <FormattedMessage id="advantage_item5_text" />
                </div>
              </div>
            </li>

            <li>
              <div className="invest-list-inner">
                <div className="icon-block">
                  <img src="/images/why-invest/deposit.svg" alt="" />
                </div>
                <div className="benefit-title">
                  <FormattedMessage id="advantage_item6_title" />
                </div>
                <div className="description">
                  <FormattedMessage id="advantage_item6_text" />
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
