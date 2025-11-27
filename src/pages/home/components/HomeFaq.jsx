import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomeFaq = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const [openedFaq, setOpenedFaq] = useState({});

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
  ];


  return (
    <div className="container home-faq">
      <div className="home-faq-inner">
        <div className="left">
          <div className="most-questions">
            <span>Հաճախ տրվող հարցեր</span>
            <img src="/images/icons/faq-question.svg" alt="" />
          </div>

          <div className="title">
            Հաճախ <br /> տրվող հարցեր
          </div>
          <div className="description">
            Ամեն ինչ՝ ներդրումների, հաշվի բացման, համալրման, հարկերի և մեր
            հարթակի օգտագործման մասին
          </div>
          <div className="all-questions">
            <button className="bordered"  onClick={() => navigate("/faq")}>
                <span>բոլոր հարցերը</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M6 12.5L18 12.5M18 12.5L12.3333 18.5M18 12.5L12.3333 6.5"
                    stroke="#72BF44"
                    stroke-width="2"
                  />
                </svg>
            </button>
          </div>
        </div>
        <div className="right">
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
          <div className="mobile-all-questions">
            <button className="bordered">
              <span>բոլոր հարցերը</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M6 12.5L18 12.5M18 12.5L12.3333 18.5M18 12.5L12.3333 6.5"
                  stroke="#72BF44"
                  stroke-width="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFaq;
