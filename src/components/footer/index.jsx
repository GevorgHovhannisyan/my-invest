import "./style.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top-block">
        {/* <div className="left-block">
          <img src="/images/footer/footer-image.svg" alt="" />
        </div> */}
        <div className="right-block">
          <div className="download-block">
            <div className="scal-social">
              <div className="text-block">
                <div className="title">Ներբեռնիր MyAmeria-ն</div>
                <div className="description">
                  Սկաննավորիր QR կոդը՝ հավելվածը ներբեռնելու համար։
                </div>
              </div>
              <div className="qr-block">
                <div class="qr">
                  <div className="anim-block">
                    <img src="/images/footer/footer-qr.png" alt="QR Code" />
                  </div>
                </div>

                <div className="app-store">
                  <ul>
                    <li className="app-s">
                      <img src="/images/apple-icon.svg" alt="" />
                      <span>App Store</span>
                    </li>
                    <li className="google-p">
                      <img src="/images/google-play-icon.svg" alt="" />
                      <span>Google Play</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="subscribe-block">
              <div className="title">Բաժանորդագրվիր մեր տեղեկագրին</div>
              <div className="description">
                Բաց մի թող ներդրումների վերաբերյալ վերջին նորությունները:
              </div>
              <div className="subscribe-inp">
                <div class="input-wrapper icon-arrow-right-after">
                  <input type="email" placeholder="Էլ. հասցե" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-block"></div>
    </div>
  );
};

export default Footer;
