import { useEffect, useRef, useState } from "react";
import "../../assets/scss/pages/faq/faq.scss";
import Header from "../../components/header";

const Faq = () => {
  const [hovered, setHovered] = useState(false);
  const [openedFaq, setOpenedFaq] = useState({});

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
        class="hero__img hero__img--left-z"
      />
    );
  };

  const faqQuestions = [
    {
      id: 1,
      title: "Ինչպե՞ս սկսել ներդրումներ MyInvest-ով",
      answer:
        "Պետք է բացել հաշիվ, ընտրել ներդրումային ուղղություն և սկսել համալրել։",
    },
    {
      id: 2,
      title: "Ի՞նչ է պետք՝ հաշիվ բացելու համար",
      answer:
        "Պետք է բացել հաշիվ, ընտրել ներդրումային ուղղություն և սկսել համալրել։",
    },

    {
      id: 3,
      title: "Ինչպե՞ս սկսել ներդրումներ MyInvest-ով",
      answer:
        "Պետք է բացել հաշիվ, ընտրել ներդրումային ուղղություն և սկսել համալրել։",
    },
    {
      id: 4,
      title: "Ի՞նչ է պետք՝ հաշիվ բացելու համար",
      answer:
        "Պետք է բացել հաշիվ, ընտրել ներդրումային ուղղություն և սկսել համալրել։",
    },

    {
      id: 5,
      title: "Ինչպե՞ս սկսել ներդրումներ MyInvest-ով",
      answer:
        "Պետք է բացել հաշիվ, ընտրել ներդրումային ուղղություն և սկսել համալրել։",
    },
    {
      id: 6,
      title: "Ի՞նչ է պետք՝ հաշիվ բացելու համար",
      answer:
        "Պետք է բացել հաշիվ, ընտրել ներդրումային ուղղություն և սկսել համալրել։",
    },
  ];

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
            class="hero__img hero__img--left"
          /> */}
        </div>
        <div className="text-block">
          <div className="faq-title">
            Հաճախ տրվող <span>հարցեր</span>
          </div>
          <div className="description">
            Ամեն ինչ՝ ներդրումների, հաշվի բացման, համալրման, հարկերի և մեր
            հարթակի օգտագործման մասին
          </div>
        </div>
        <img
          src="/images/faq-question-right.png"
          alt="exclamation"
          class="hero__img--right"
        />
      </div>
      <div className="container faq-page-container">
        <div className="faq-page">
          <div className="list">
            <ul>
              {faqQuestions.map((faq) => {
                const contentRef = useRef(null);
                const isOpen = openedFaq[faq.id] || false;

                return (
                  <li
                    onMouseEnter={() => setHovered(faq.id)}
                    onMouseLeave={() => setHovered(false)}
                    onClick={() =>
                      setOpenedFaq((prev) => ({
                        ...prev,
                        [faq.id]: !prev[faq.id],
                      }))
                    }
                    className={`faq-list-item ${
                      openedFaq[faq.id] ? "opened" : ""
                    }`}
                  >
                    <div className="head">
                      <div className="question-block">
                        <img
                          src={`/images/icons/${
                            hovered === faq.id && !openedFaq[faq.id]
                              ? "faq-hover"
                              : openedFaq[faq.id]
                              ? "faq-opened"
                              : "faq"
                          }.svg`}
                          alt=""
                        />
                        <span className="question">{faq.title}</span>
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
