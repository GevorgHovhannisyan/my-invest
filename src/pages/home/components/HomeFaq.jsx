import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { languageSelector } from "../../../redux/slices/langauge/langauge";
import axios from "axios";
import { useSelector } from "react-redux";

const HomeFaq = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const [openedFaq, setOpenedFaq] = useState({});
  const lang = useSelector(languageSelector); // "hy" | "en" | "ru"
  const [faqList, setFaqList] = useState([]);
  const contentRef = useRef(null);

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
    <div className="container home-faq">
      <div className="home-faq-inner">
        <div className="left">
          <div className="most-questions">
            <span>
              <FormattedMessage id="faq_title" />
            </span>
            <img src="/images/icons/faq-question.svg" alt="" />
          </div>

          <div className="title">
            <FormattedMessage id="faq_title" />
          </div>
          <div className="description">
            <FormattedMessage id="faq_text" />
          </div>
          <div className="all-questions">
            <button className="" onClick={() => navigate("/faq")}>
              <span>
                <FormattedMessage id="faq_btn" />
              </span>
              <span className="icon-arrow-right-after"></span>
            </button>
          </div>
        </div>
        <div className="right">
          <ul>
            {faqList.map((faq, index) => {
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
