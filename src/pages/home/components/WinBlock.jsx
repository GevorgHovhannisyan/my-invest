const WinBlock = () => {
  return (
    <div className="win-block container">
      <div className="win-container">

      <ul className="win-home-portfel">
        <li class="card">
          <div class="card-content">
            <div class="card-left">
              <div class="card-label mardoto">
                ԿԱՏԱՐԻ՛Ր ԳՈՐԾԱՐՔՆԵՐ
                <div className="action-line"></div>
              </div>
              <div class="card-title">
                Շահիր՝ <br /> տուն <br />
                <span>Երևանում</span>
              </div>
              <div class="card-description mardoto">
                Ստացիր պրոմո կոդ ամեն գործարքից և մասնակցիր տան խաղարկությանը
              </div>
              <button class="card-btn">
                Բացել Հաշիվ
                <span className="icon-arrow-right"></span>
              </button>
            </div>
            <div class="card-image-block left"></div>
          </div>
        </li>
        <li class="card">
          <div class="card-content">
            <div class="card-left">
              <div class="card-label mardoto">
                ԿԱՏԱՐԻ՛Ր ԳՈՐԾԱՐՔՆԵՐ
                <div className="action-line"></div>
              </div>
              <div class="card-title">
                Շահիր՝ <br /> տուն <br />
                <span>Երևանում</span>
              </div>
              <div class="card-description mardoto">
                Ստացիր պրոմո կոդ ամեն գործարքից և մասնակցիր տան խաղարկությանը
              </div>
              <button class="card-btn">
                Բացել Հաշիվ
                <span className="icon-arrow-right"></span>
              </button>
            </div>
            <div class="card-image-block right"></div>
          </div>
        </li>
      </ul>

      <div className="bond-stock-info">
        <div className="info-block">
          <img src="/images/win-block/bond.png" alt="Bonds" />
          <span className="title">Պարտատոմսեր</span>
          <p className="description">
            Ստացիր կայուն եկամուտ և ներդրու պետական կամ կորպորատիվ
            պարտատոմսերում հուսալի եկամտաբերությամբ
          </p>
        </div>
        <span className="middle-border"></span>
        <div className="info-block">
          <img src="/images/win-block/stock.png" alt="Stocks" />
          <span className="title">Բաժնետոմսեր</span>
          <p className="description">
            Դարձիր բաժնետեր և ստացիր դիվիդենտներ և վաճառիր բաժնետոմսերդ այն
            ժամանակ, երբ գինը բարձրանում է
          </p>
        </div>
        <span className="middle-border"></span>

        <div className="info-block">
          <img src="/images/win-block/invest-fonds.png" alt="Invest" />
          <span className="title">Ներդրումային ֆոնդեր</span>
          <p className="description">
            Ներդրիր միանգամից մի քանի ակտիվում՝ նվազեցնելով ռիսկերն ու
            հավասարակշռելով քո ներդրումային եկամուտը
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default WinBlock;
