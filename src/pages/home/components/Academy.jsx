import "../../../assets/scss/pages/home/academy-btn-anim.css";

const Academy = () => {
  return (
    <div className="academy-parent container">
      <div className="academy-container-inner">
        <ul className="academy-blocks">
          <li className="academy-blocks-item tele">
            <div className="academy-blocks-item-inner">
              <div className="left-part">
                <div className="subtitle">դարձիր ներդրումների գիտակ</div>
                <div className="title">Արի մեր Telegram</div>
                <div className="list-items">
                  <ul>
                    <li>
                      <span className="icon-checked"></span>
                      <div className="description">Կրթական նյութեր</div>
                    </li>
                    <li>
                      <span className="icon-checked"></span>
                      <div className="description">
                        Գաղափարներ և խորհուրդներ մասնագետներից
                      </div>
                    </li>
                    <li>
                      <span className="icon-checked"></span>
                      <div className="description">
                        Ներդրումային շուկաների պատկերը` թվերով
                      </div>
                    </li>
                  </ul>
                </div>

                <button className="telegram be-investor-btn">
                  <div className="telegram-be-investor-anim-block">
                    ՄԻԱՆԱԼ ՄԵՐ TELEGRAM-ԻՆ
                    <span className="icon-arrow-right-after"></span>
                  </div>
                </button>
              </div>
            </div>
          </li>

          <li className="academy-blocks-item academyy">
            <div className="academy-blocks-item-inner">
              <div className="left-part">
                <div className="subtitle">դարձիր ներդրումների գիտակ</div>
                <div className="title">MyInvest Academy</div>
                <div className="list-items">
                  <ul>
                    <li>
                      <span className="icon-checked"></span>
                      <div className="description">Կրթական նյութեր</div>
                    </li>
                    <li>
                      <span className="icon-checked"></span>
                      <div className="description">
                        Գաղափարներ և խորհուրդներ մասնագետներից 
                      </div>
                    </li>
                    <li>
                      <span className="icon-checked"></span>
                      <div className="description">
                        Ներդրումային շուկաների պատկերը` թվերով
                      </div>
                    </li>
                  </ul>
                </div>

                <button className="academy be-investor-btn">
                  <div className="academy-be-investor-anim-block">
                    Միանալ Ameria Academy-ին
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
