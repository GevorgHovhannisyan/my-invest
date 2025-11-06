import { useState } from "react";
import "../../../assets/scss/imports/how-to-buy/animation.css";

const HowToBuy = () => {
  const [animating, setAnimating] = useState(false);
  const animateSlider = () => {
    if (!animating) {
      setAnimating(true);

      setTimeout(() => {
        setAnimating(false);
      }, 5000);
    }
  };

  const stockItem = (stock) => {
    if (stock) {
      return (
        <>
          <div className="stock">
            <div class="stock-qr">
              <div className="stock-anim-block">
                <div className="stock-info">
                  <div className="icon">
                    <img src={`/images/how-to-buy/${stock}.png`} alt={stock} />
                  </div>
                  <div className="info">
                    <div className="name">{stock}</div>
                    <div className="ticker">MSFT</div>
                  </div>
                </div>

                <div className="price-info">
                  <div className="price">+82%</div>
                  <div className="change">$470.38</div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="shadow">
            <div className="stock-info">
              <div className="icon"></div>
              <div className="info">
                <div className="name"></div>
                <div className="ticker"></div>
              </div>
            </div>

            <div className="price-info">
              <div className="price"></div>
              <div className="change"></div>
            </div>
          </div>
        </>
      );
    }
  };
  return (
    <div className="how-to-buy">
      <div className="how-to-buy-container">
        <div className="matrix">
          <ul class="items">
            <li className="matrix-item htb">
              <div class="text-block">
                <div className="subtitle">5 պարզ քայլ</div>
                <div className="title">
                  Ինչպե՞ս <span>գնել</span> արժեթղթեր MyInvest-ում
                </div>
                <div className="view-video">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M7 17.3369V6.94566C7 5.71973 8.3908 5.01149 9.38226 5.73255L17.1757 11.4005C18.0426 12.031 17.9876 13.3409 17.0709 13.8964L9.27745 18.6197C8.27779 19.2256 7 18.5059 7 17.3369Z"
                      stroke="white"
                      stroke-opacity="0.7"
                      stroke-width="2"
                    />
                  </svg>
                  <span>դիտել վիդեո ուղեցույցը</span>
                </div>
              </div>
            </li>
            <li className="matrix-item step-1">
              <div className="top-part">
                <div className="step">քայլ 1</div>
                <div className="description">
                  Ներբեռնիր MyAmeria հավելվածը <span>App Store</span>-ից կամ{" "}
                  <span>Play Store</span>-ից
                </div>
              </div>
              <div className="bottom-part">
                <div className="icons-parent">
                  <div className="store-icon-google">
                    <img
                      src="/images/how-to-buy/google-play.svg"
                      className="social-icon"
                      alt=""
                    />
                    <img src="/images/how-to-buy/border.svg" alt="" />
                  </div>

                  <div className="store-icon-apple">
                    <img
                      src="/images/how-to-buy/apple.svg"
                      className="social-icon"
                      alt=""
                    />
                    <img src="/images/how-to-buy/apple-border.svg" alt="" />
                  </div>
                </div>
              </div>
            </li>
            <li
              className={`step-2 matrix-item `} //${animating ? "animate" : ""}
              onMouseEnter={animateSlider}
            >
              <div className="top-part">
                <div className="step">քայլ 2</div>
                <div className="description">Գտիր MyInvest-ը Apps բաժնում</div>
              </div>
              <div className="bottom-part">
                <img src="/images/how-to-buy/fake-invest.png" alt="" />
                <img src="/images/how-to-buy/my-invest.png" alt="" />
                <img src="/images/how-to-buy/fake-invest.png" alt="" />
                <img src="/images/how-to-buy/my-invest.png" alt="" />
                <img src="/images/how-to-buy/fake-invest.png" alt="" />
              </div>
            </li>
            <li className="step-3 matrix-item">
              <div className="top-part">
                <div className="step">քայլ 3</div>
                <div className="description">Ընտրիր «Ինչ գնել» բաժինը</div>
              </div>
              <div className="bottom-part">
                <div className="menu-icons">
                  <ul>
                    <li>
                      <img src="/images/how-to-buy/portfel.png" alt="" />
                      <div className="no-text"></div>
                    </li>
                    <li className="whtf">
                      <img src="/images/how-to-buy/trade-candle.svg" alt="" />
                      <div className="text-under">Ինչ գնել</div>
                    </li>
                    <li>
                      <img src="/images/how-to-buy/swap.png" alt="" />
                      <div className="no-text"></div>
                    </li>
                    <li>
                      <img src="/images/how-to-buy/academy-hat.svg" alt="" />
                      <div className="no-text"></div>
                    </li>
                  </ul>
                  <div className="slide-line"></div>
                </div>
              </div>
            </li>
            <li className="step-4 matrix-item">
              <div className="top-part ">
                <div className="step">քայլ 4</div>
                <div className="description">
                  Ընտրիր արժեթուղթ առկա ցանկերից
                </div>
              </div>
              <div className="bottom-part">
                <div className="top-block">
                  <div className="stock-row row-1 row-1-elem-1">
                    {stockItem()}
                    {stockItem()}
                    {stockItem()}
                  </div>

                  <div className="stock-row row-1 row-1-elem-2">
                    {stockItem()}
                    {stockItem("microsoft")}
                    {stockItem()}
                  </div>
                  <div className="stock-row row-1 row-1-elem-3">
                    {stockItem()}
                    {stockItem()}
                    {stockItem()}
                  </div>
                </div>

                {/* // sec row */}
                <div className="top-block bottom">
                  <div className="stock-row row-2 row-2-elem-1">
                    {stockItem()}
                    {stockItem("apple")}
                    {stockItem()}
                  </div>
                  <div className="stock-row row-2 row-2-elem-2">
                    {stockItem()}
                    {stockItem()}
                    {stockItem()}
                  </div>
                </div>

                {/* <div class="stock-qr">
                  <div className="stock-anim-block"></div>
                </div> */}
              </div>
            </li>
            <li className="matrix-item step-5">
              <div className="top-part">
                <div className="step">քայլ 5</div>
                <div className="description">Քաշիր «Գնել» կոճակը </div>
              </div>
              <div className="bottom-part">
                <div className="buy-slide-block">
                  <div className="buy-slide">
                    <div className="slide-btn">
                      <img
                        className="swipe-btn"
                        src="/images/how-to-buy/buy-vector.svg"
                        alt=""
                      />
                      <img
                        className="checked-img"
                        src="/images/how-to-buy/checked.svg"
                        alt=""
                      />
                    </div>

                    <div className="buy-text">Գնել</div>
                    <div className="bought">Գնված է</div>
                  </div>
                </div>

                <div className="slide-line"></div>
              </div>
            </li>
          </ul>
        </div>
        <div className="transactions-fees ">
          <img src="/images/faq-icon.svg" alt="" />
          Գործարքների միջնորդավճարներին կարող ես ծանոթանալ <a href="#"> այստեղ</a>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
