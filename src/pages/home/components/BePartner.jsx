const BePartner = () => {
  const partners = [
    {
      title: "Tesla",
      ticker: "TSLA",
      change: 82,
      price: 470,
      icon: "tesla",
    },
    {
      title: "Apple",
      ticker: "AAPL",
      change: 82,
      price: 470,
      icon: "apple",
    },
    {
      title: "Microsoft",
      ticker: "MSFT",
      change: 82,
      price: 470,
      icon: "microsoft",
    },
    {
      title: "NVIDIA",
      ticker: "NVDA",
      change: 82,
      price: 470,
      icon: "nvidia",
    },
    {
      title: "Netflix",
      ticker: "NFLX",
      change: -82,
      price: 470,
      icon: "netflix",
    },
    {
      title: "Tesla",
      ticker: "TSLA",
      change: 82,
      price: 470,
      icon: "tesla",
    },
    {
      title: "Apple",
      ticker: "AAPL",
      change: 82,
      price: 470,
      icon: "apple",
    },
    {
      title: "NVIDIA",
      ticker: "NVDA",
      change: 82,
      price: 470,
      icon: "nvidia",
    },
  ];
  return (
    <div className="partner-container">
      <div className="text-part">
        <div className="subtitle">մեծ մաշտաբներ</div>
        <div className="title">Դարձիր ընկերության բաժնետեր</div>
        <button className="bordered">
          Որոնել արժեթղթեր{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
          >
            <path
              d="M-2.16962e-06 7.5L12 7.5M12 7.5L6.33333 13.5M12 7.5L6.33333 1.5"
              stroke="#72BF44"
              stroke-width="2"
            />
          </svg>
        </button>
      </div>

      <div className="partner-slider">
        <div className="partner-row top">
          <ul className="partners-slide-list">
            {partners.map((partner, index) => {
              return (
                <li key={index}>
                  <div className="partner-info">
                    <div className="logo">
                      <img
                        src={`/images/be-partner/${partner.icon}.png`}
                        alt={partner.title}
                      />
                    </div>
                    <div className="partner-name">
                      <span className="name">{partner.title}</span>
                      <span className="ticker">{partner.ticker}</span>
                    </div>
                  </div>

                  <div className="partner-change">
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
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="partner-row bottom">
          <ul className="partners-slide-list">
            {partners.map((partner, index) => {
              return (
                <li key={index}>
                  <div className="partner-info">
                    <div className="logo">
                      <img
                        src={`/images/be-partner/${partner.icon}.png`}
                        alt={partner.title}
                      />
                    </div>
                    <div className="partner-name">
                      <span className="name">{partner.title}</span>
                      <span className="ticker">{partner.ticker}</span>
                    </div>
                  </div>

                  <div className="partner-change">
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
                  </div>
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
