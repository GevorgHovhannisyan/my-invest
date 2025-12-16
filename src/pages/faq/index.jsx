import { useEffect, useRef, useState } from "react";
import "../../assets/scss/pages/faq/faq.scss";
import Header from "../../components/header";
import { FormattedMessage } from "react-intl";
import axios from "axios";
import { useSelector } from "react-redux";
import { languageSelector } from "../../redux/slices/langauge/langauge";

const Faq = () => {
  const [hovered, setHovered] = useState(false);
  const [openedFaq, setOpenedFaq] = useState({});
  const [faqList, setFaqList] = useState([]);
  const lang = useSelector(languageSelector); // "hy" | "en" | "ru"
  const contentRef = useRef(null);

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
      ? "/images/faq/faq-left-img.png"
      : isTablet
      ? "/images/faq/faq-left-img-766.png"
      : isMobile
      ? "/images/faq/faq-left-bg-mobile"
      : "/images/faq/faq-left-img.png";

    return (
      <img
        src={imageSrc}
        alt="Responsive Hero"
        className="hero__img hero__img--left-z"
      />
    );
  };

  const fetchFaqs = async (lang) => {
    try {
      const { data } = await axios.get(
        "https://investmentsproxy.test.ameriabank.am/api/FAQ/get-faqs",

        {
          headers: {
            Token:
              "6545D1D8F7DB428C84E988F504FFC75E997EC8A4329F4D6C91CD1DB7C96C5670",
            Language: lang,
          },
        }
      );
      console.log("data", data);
      setFaqList(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchFaqs(lang);
  }, []);

  return (
    <div className="faq-parent loaded">
      {/* <div className="left-image"> */}

      <ResponsiveImage />

      {/* </div> */}

      <div className="faq-top-banner">
        <Header />
        <div className="left-image">
          {/* <img
            src="/images/faq-question-left.png"
            alt="question"
            className="hero__img hero__img--left"
          /> */}
        </div>
        <div className="text-block">
          <div className="faq-title">
            <FormattedMessage id="faq_title" />{" "}
            <span>
              <FormattedMessage id="faq_title_green" />
            </span>
          </div>
          <div className="description">
            <FormattedMessage id="faq_text" />
          </div>
        </div>
        <img
          src="/images/faq-question-right.png"
          alt="exclamation"
          className="hero__img--right"
        />
      </div>
      <div className="container faq-page-container">
        <div className="faq-page">
          <div className="list">
            <ul>
              {faqList?.map((faq, index) => {
                const isOpen = openedFaq[index] || false;

                return (
                  <li
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(false)}
                    onClick={() =>
                      setOpenedFaq((prev) => ({
                        ...prev,
                        [index]: !prev[index],
                      }))
                    }
                    className={`faq-list-item ${
                      openedFaq[index] ? "opened" : ""
                    }`}
                  >
                    <div className="head">
                      <div className="question-block">
                        <img
                          src={`/images/icons/${
                            hovered === index && !openedFaq[index]
                              ? "faq-hover"
                              : openedFaq[index]
                              ? "faq-opened"
                              : "faq"
                          }.svg`}
                          alt=""
                        />
                        <span className="question">{faq.question}</span>
                      </div>
                      <div className="expand-btn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="minus horizontal"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <path
                            d="M26.6666 16L5.33329 16"
                            stroke="#72BF44"
                            stroke-width="3"
                          />
                          <path
                            d="M5.33337 16.0068L26.6667 16.0068"
                            stroke="#72BF44"
                            stroke-width="2.5"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="minus vertical"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <path
                            d="M26.6666 16L5.33329 16"
                            stroke="#72BF44"
                            stroke-width="3"
                          />
                          <path
                            d="M5.33337 16.0068L26.6667 16.0068"
                            stroke="#72BF44"
                            stroke-width="2.5"
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      className="content"
                      ref={contentRef}
                      style={{
                        maxHeight: isOpen
                          ? `${contentRef.current?.scrollHeight}px`
                          : "0px",
                      }}
                    >
                      <div className="content-inner">{faq.answer}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
