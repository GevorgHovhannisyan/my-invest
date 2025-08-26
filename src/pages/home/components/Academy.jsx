const Academy = () => {
  return (
    <div className="academy container">
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
                      <img src="/images/icons/blue-checked.svg" alt="" />
                      <div className="description">Կրթական նյութեր</div>
                    </li>
                    <li>
                      <img src="/images/icons/blue-checked.svg" alt="" />
                      <div className="description">
                        Գաղափարներ և խորհուրդներ մասնագետներից 
                      </div>
                    </li>
                    <li>
                      <img src="/images/icons/blue-checked.svg" alt="" />
                      <div className="description">
                        Ներդրումային շուկաների պատկերը` թվերով
                      </div>
                    </li>
                  </ul>
                </div>

                <button className="telegram">
                  ՄԻԱՆԱԼ ՄԵՐ TELEGRAM-ԻՆ
                  <span className="icon-arrow-right-after"></span>
                </button>
              </div>
            </div>
          </li>

          <li className="academy-blocks-item academyy">
            <div className="academy-blocks-item-inner">
              <div className="left-part">
                <div className="subtitle">դարձիր ներդրումների գիտակ</div>
                <div className="title">Արի մեր Telegram</div>
                <div className="list-items">
                  <ul>
                    <li>
                      <img src="/images/icons/blue-checked.svg" alt="" />
                      <div className="description">Կրթական նյութեր</div>
                    </li>
                    <li>
                      <img src="/images/icons/blue-checked.svg" alt="" />
                      <div className="description">
                        Գաղափարներ և խորհուրդներ մասնագետներից 
                      </div>
                    </li>
                    <li>
                      <img src="/images/icons/blue-checked.svg" alt="" />
                      <div className="description">
                        Ներդրումային շուկաների պատկերը` թվերով
                      </div>
                    </li>
                  </ul>
                </div>

                <button className="academy">
                  ՄԻԱՆԱԼ ՄԵՐ TELEGRAM-ԻՆ
                  <span className="icon-arrow-right-after"></span>
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
