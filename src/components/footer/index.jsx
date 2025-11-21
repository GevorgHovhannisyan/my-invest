import { useEffect, useState } from "react";
import "./style.css";

const Footer = () => {
  const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(window.matchMedia(query).matches);

    useEffect(() => {
      const media = window.matchMedia(query);
      const listener = () => setMatches(media.matches);
      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    }, [query]);

    return matches;
  };

  const ResponsiveImage = () => {
    const isDesktop = useMediaQuery("(min-width: 1200px)");
    const isTablet = useMediaQuery("(min-width: 768px)");
    const isMobile = useMediaQuery("(max-width: 768px)");
    const imageSrc = isDesktop
      ? "/images/footer/footer-bg.png"
      : isTablet
      ? "/images/footer/footer-bg-2x.png"
      : isMobile
      ? "/images/footer/footer-bg-3x.png"
      : "/images/footer/footer-bg-2x.png";

    return <img src={imageSrc} alt="Responsive Hero" />;
  };

  return (
    <div className="footer">
      <div className="footer-inner">
        <div className="logo-block">
          <ResponsiveImage />
        </div>
        <div className="top-block">
          <ul className="footer-list">
            <li className="help-links">
              <div className="links">
                <span className="f-title">Օգտակար հղումներ </span>
                <a href="#">
                  Պայմաններ, սակագներ և այլն{" "}
                  <span className="icon-arrow-right"></span>
                </a>
              </div>
              <div className="contacts">
                <span className="f-title">Կապ մեզ հետ</span>
                <ul className="contact-item">
                  <li>+374 10 51 31 69</li>
                  <li>+374 10 51 31 70</li>
                </ul>
              </div>
            </li>
            <li className="qr-list-item">
              <span className="f-title">Ներբեռնիր MyAmeria-ն</span>
              <div className="f-description">
                Սկաննավորիր QR կոդը՝ հավելվածը ներբեռնելու համար։
              </div>

              <div className="qr-block">
                <div class="qr">
                  <div className="anim-block">
                    <img src="/images/footer/qr-code-black.png" alt="QR Code" />
                  </div>
                </div>

                <div className="social-links">
                  <ul>
                    <li>
                      <div className="apple">
                        <img src="/images/footer/aapl.svg" alt="" />
                        <div className="name">App Store</div>
                      </div>
                    </li>
                    <li className="google-item">
                      <div className="google-play">
                        <img src="/images/footer/google.svg" alt="" />
                        <div className="name">Google Play</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="footer-subscribe">
              <span className="f-title">Բաժանորդագրվիր մեր տեղեկագրին</span>
              <div className="f-description">
                Բաց մի թող ներդրումների վերաբերյալ վերջին նորությունները:
              </div>
              <form
                class="input-with-icon"
                role="search"
                onsubmit="event.preventDefault(); alert('submitted: ' + q.value)"
              >
                <label for="q" class="visually-hidden">
                  Search
                </label>
                <input
                  id="q"
                  name="q"
                  type="text"
                  placeholder="Տեքստ..."
                  autocomplete="off"
                />
                <button class="icon-btn" type="submit" aria-label="Submit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 12L18 12M18 12L12.3333 18M18 12L12.3333 6"
                      stroke="#6DCE35"
                      stroke-width="2"
                    />
                  </svg>
                </button>
              </form>
              <div className="socials">
                <ul>
                  <li>
                    <span className="icon-facebook"></span>
                  </li>
                  <li>
                    <span className="icon-instagram"></span>
                  </li>
                  <li>
                    <span className="icon-telegram"></span>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div className="footer-divider"></div>

        <div className="bottom-block">
          <div className="footer-description">
            Սույն էջում, ինչպես նաև հանրային աղբյուրներում Ամերիաբանկի կողմից
            տեղադրված նյութերը չեն հանդիսանում և չեն կարող որակվել որպես
            ներդրում կատարելու ուղղորդում և/կամ անհատական խորհրդատվություն։
            Ցանկացած ներդրող մինչև ներդրում կատարելը պետք է ամբողջությամբ
            ուսումնասիրի թողարկողի գործունեությանը հատուկ ռիսկային գործոնները
            Յուրաքանչյուր ներդրող պետք է ինքնուրույն և իր ռիսկով կայացնի
            ցանկացած ներդրումային որոշում, գնահատի իր կողմից կատարվող
            ներդրումների ռիսկայնությունը, եկամտաբերությունն ու
            վերադարձելիությունը, ինքնուրույն ուսումնասիրի MyInvest հարթակում և
            Ամերիաբանկի միջոցով հասանելի արժեթղթերն ու ներդրումային գործիքներն
            ու դրանց պայմանները, ինչպես նաև այդ ներդրումների մասով
            սահմանափակումների ու արգելքների կիրառումը և դրանց հավանականությունը։
            Ընդ որում, անցյալում ստացած արդյունքները որևէ կերպ չեն երաշխավորում
            դրանց առկայությունն ապագայում։ Արժեթղթերի և ցանկացած այլ
            ներդրումների ռետրոսպեկտիվ/հետհայացած եկամուտների առկայությունը չեն
            կարող երաշխավորել նմանատիպ արժեթղթերով կամ ներդրումներով ապագայում
            եկամուտների ստացումը: Ներդրողը պետք է գիտակցի, որ չի կարող
            երաշխավորվել իր կողմից ներդրված դրամական միջոցների վերադարձը` հաշվի
            առնելով այն հանգամանքը, որ ներդրումներ կատարելը կապված է որոշակի
            ռիսկերի հետ, իսկ ներդրումների հետ կապված երաշխիքները պայմանական
            բնույթ են կրում և/կամ գործում են միայն որոշակի պայմաններում:
            MyInvest hարթակում գործարքների մշակման և կատարման, ինչպես նաև
            հաշիվներին հասանելիության ժամանակը կարող է տարբերվել` կախված մի շարք
            գործոններից, ինչպես օրինակ՝ համակարգի ծանրաբեռնվածությունից, շուկայի
            կարգավիճակից, գործընկեր կազմակերպությունների հետ կապված ծրագրային
            և/կամ օպերացիոն խնդիրներից և այլն։ Վերլուծական որոշ գործիքներ
            տրամադրված են TradingView-ի կողմից։
          </div>
          <div className="copyright">
            <ul>
              <li>© 2007-2025 Ameriabank. Բոլոր իրավունքները պաշտպանված են.</li>
              <li>Ամերիաբանկ ՓԲԸ-ն վերահսկվում է ՀՀ ԿԲ կողմից:</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
