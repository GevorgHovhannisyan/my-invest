import { FormattedMessage } from "react-intl";

const BePartner = () => {
  const partnersHalf = [
    {
      title: "Tesla",
      ticker: "TSLA",
      change: 82,
      price: 470,
      icon: "tsla",
    },
    {
      title: "Apple",
      ticker: "AAPL",
      change: 82,
      price: 470,
      icon: "aapl",
    },
    {
      title: "Microsoft",
      ticker: "MSFT",
      change: 82,
      price: 470,
      icon: "msft",
    },
    {
      title: "NVIDIA",
      ticker: "NVDA",
      change: 82,
      price: 470,
      icon: "nvda",
    },
    {
      title: "Netflix",
      ticker: "NFLX",
      change: -82,
      price: 470,
      icon: "nflx",
    },

    {
      title: "Comcast",
      ticker: "CMCSA",
      change: 82,
      price: 470,
      icon: "cmcsa",
    },
    {
      title: "Intel",
      ticker: "INTC",
      change: 82,
      price: 470,
      icon: "intc",
    },
    {
      title: "Palantir",
      ticker: "PLTR",
      change: 82,
      price: 470,
      icon: "pltr",
    },

     {
      title: "SMCI",
      ticker: "SMCI",
      change: 82,
      price: 470,
      icon: "smci",
    },

     {
      title: "Synopsys",
      ticker: "SNPS",
      change: 82,
      price: 470,
      icon: "snps",
    },
    
     {
      title: "VOO",
      ticker: "VOO",
      change: 82,
      price: 470,
      icon: "voo",
    },
  ];

  const partnersSecHalf = [
    {
      title: "Tesla",
      ticker: "TSLA",
      change: 82,
      price: 470,
      icon: "tsla",
    },
       {
      title: "Microsoft",
      ticker: "MSFT",
      change: 82,
      price: 470,
      icon: "msft",
    },
    {
      title: "Apple",
      ticker: "AAPL",
      change: 82,
      price: 470,
      icon: "aapl",
    },
 
    {
      title: "NVIDIA",
      ticker: "NVDA",
      change: 82,
      price: 470,
      icon: "nvda",
    },
    {
      title: "Netflix",
      ticker: "NFLX",
      change: -82,
      price: 470,
      icon: "nflx",
    },

    {
      title: "Comcast",
      ticker: "CMCSA",
      change: 82,
      price: 470,
      icon: "cmcsa",
    },
    {
      title: "Intel",
      ticker: "INTC",
      change: 82,
      price: 470,
      icon: "intc",
    },
    {
      title: "Palantir",
      ticker: "PLTR",
      change: 82,
      price: 470,
      icon: "pltr",
    },

     {
      title: "SMCI",
      ticker: "SMCI",
      change: 82,
      price: 470,
      icon: "smci",
    },

     {
      title: "Synopsys",
      ticker: "SNPS",
      change: 82,
      price: 470,
      icon: "snps",
    },
    
     {
      title: "VOO",
      ticker: "VOO",
      change: 82,
      price: 470,
      icon: "voo",
    },
  ];
  return (
    <div className="partner-container">
      <div className="text-part">
        <div className="subtitle">մեծ մաշտաբներ</div>
        <div className="title">
          <FormattedMessage id="be_partner_title" />
        </div>
        <button className="bordered">
          Որոնել արժեթղթեր <span className="icon-arrow-right-after"></span>
        </button>
      </div>

      <div className="partner-slider">
        <div className="partner-row top">
          <ul className="partners-slide-list">
            {partnersHalf.map((partner, index) => {
              return (
                <li key={index}>
                  <div className="partner-info">
                    <div className="logo-partner">
                      <img
                        src={`/images/stocks/${partner.icon}.svg`}
                        alt={partner.title}
                      />
                    </div>
                    <div className="partner-name">
                      <span className="name">{partner.title}</span>
                      <span className="ticker">{partner.ticker}</span>
                    </div>
                  </div>

                  {/* <div className="partner-change">
                    <span
                      className={`change ${
                        partner.change >= 0 ? "green" : "red"
                      }`}
                    >
                      {partner.change >= 0
                        ? `+${partner.change}`
                        : partner.change}
                      %
                    </span>
                    <span className="price">${partner.price}</span>
                  </div> */}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="partner-row bottom">
          <ul className="partners-slide-list">
            {partnersSecHalf.map((partner, index) => {
              return (
                <li key={index}>
                  <div className="partner-info">
                    <div className="logo-partner">
                      <img
                        src={`/images/stocks/${partner.icon}.svg`}
                        alt={partner.title}
                      />
                    </div>
                    <div className="partner-name">
                      <span className="name">{partner.title}</span>
                      <span className="ticker">{partner.ticker}</span>
                    </div>
                  </div>

                  {/* <div className="partner-change">
                    <span
                      className={`change ${
                        partner.change >= 0 ? "green" : "red"
                      }`}
                    >
                      {partner.change >= 0
                        ? `+${partner.change}`
                        : partner.change}
                      %
                    </span>
                    <span className="price">${partner.price}</span>
                  </div> */}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BePartner;
