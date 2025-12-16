import { useEffect, useRef, useState } from "react";
import { useIntl } from "react-intl";
import "../../assets/scss/pages/help-links/links.scss";
import Header from "../../components/header";

const HelpLinks = () => {
  const intl = useIntl();
  const locale = intl.locale; // hy | ru | en

  const [hovered, setHovered] = useState(false);
  const [openedFaq, setOpenedFaq] = useState({});

  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1500); // Reset after 1.5s
    });
  };

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
        className="help-link-hero hero__img--left-z"
      />
    );
  };

  const links = [
    {
      id: 1,
      title: "Սակագներ",
      questinos: [
        {
          id: 1,
          title:
            "Արժեթղթերի շուկայում գործունեության ընթացքում հաճախորդի համար հնարավոր ռիսկերի հայտարարագիր",
          link: {
            hy: "https://ameriabank.am/Portals/0/files/Business/brokerage/brockerage_terms_arm.pdf",
            ru: "https://ameriabank.am/Portals/0/files/Business/brokerage/brockerage_terms_rus.pdf",
            en: "https://ameriabank.am/Portals/0/files/Business/brokerage/brockerage_terms_eng.pdf",
          },
        },
        {
          id: 2,
          title:
            "Արժեթղթերի շուկայում գործունեության ընթացքում հաճախորդի համար հնարավոր ռիսկերի հայտարարագիր",
          link: {
            hy: "https://ameriabank.am/Portals/0/files/Business/brokerage/Custody_agreement.pdf",
            ru: "https://ameriabank.am/Portals/0/files/Business/brokerage/Custody_agreement_rus.pdf",
            en: "https://ameriabank.am/Portals/0/files/Business/brokerage/Custody_agreement_eng.pdf",
          },
        },
      ],
    },

    {
      id: 2,
      title: "Ծառայության պայմաններ",
      questinos: [
        {
          id: 1,
          title:
            "Արժեթղթերի շուկայում գործունեության ընթացքում հաճախորդի համար հնարավոր ռիսկերի հայտարարագիր",
          link: {
            hy: "https://ameriabank.am/Portals/0/files/brokerage/custody_service_rates_fees_arm.pdf",
            ru: "https://ameriabank.am/Portals/0/files/brokerage/custody_service_rates_fees_rus.pdf",
            en: "https://ameriabank.am/Portals/0/files/brokerage/custody_service_rates_fees_eng.pdf",
          },
        },
        {
          id: 2,
          title:
            "Արժեթղթերի շուկայում գործունեության ընթացքում հաճախորդի համար հնարավոր ռիսկերի հայտարարագիր",
          link: {
            hy: "https://ameriabank.am/Portals/0/files/Business/brokerage/Custody_agreement.pdf",
            ru: "https://ameriabank.am/Portals/0/files/Business/brokerage/Custody_agreement_rus.pdf",
            en: "https://ameriabank.am/Portals/0/files/Business/brokerage/Custody_agreement_eng.pdf",
          },
        },
      ],
    },

    {
      id: 4,
      title: "Այլ փաստաթղթեր",
      questinos: [
        {
          id: 1,
          title:
            "Արժեթղթերի շուկայում գործունեության ընթացքում հաճախորդի համար հնարավոր ռիսկերի հայտարարագիր",
          link: {
            hy: "https://ameriabank.am/Portals/0/files/Business/brokerage/Declaration_on_possible_risks_arm.pdf",
            ru: "https://ameriabank.am/Portals/0/files/Business/brokerage/Declaration_on_possible_risks_rus.pdf",
            en: "https://ameriabank.am/Portals/0/files/Business/brokerage/Declaration_on_possible_risks_eng.pdf",
          },
        },

        {
          id: 2,
          title:
            "Արժեթղթերի շուկայում գործունեության ընթացքում հաճախորդի համար հնարավոր ռիսկերի հայտարարագիր",
          link: {
            hy: "https://ameriabank.am/investment/operations/brokerage/contracts",
            ru: "https://ameriabank.am/ru/investment/operations/brokerage/contracts",
            en: "https://ameriabank.am/en/investment/operations/brokerage/contracts",
          },
        },
      ],
    },
  ];

  return (
    <div className="links-parent loaded">
      <ResponsiveImage />
      <div className="links-top-banner">
        <Header />
        <div className="left-image"></div>
        <div className="text-block">
          <div className="links-title">
            <span>Օգտակար հղումներ</span>
          </div>
          <div className="description">
            Ամեն ինչ՝ ներդրումների, հաշվի բացման, համալրման, հարկերի և մեր
            հարթակի օգտագործման մասին
          </div>
        </div>
        <img
          src="/images/faq-question-right.png"
          alt="exclamation"
          className="hero__img--right"
        />
      </div>
      <div className="container links-page-container">
        <div className="links-page">
          <div className="list">
            <ul>
              {links.map((faq) => (
                <li key={faq.id} className="links-list-item">
                  {/* First-level title */}
                  <div className="head">
                    <span className="question">{faq.title}</span>
                  </div>

                  {/* Nested questions */}
                  <ul className="nested-questions">
                    {faq.questinos.map((q) => (
                      <li key={q.id} className="nested-question-item">
                        <a
                          href={q.link[locale] || q.link.en}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text"
                        >
                          {q.title}

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                          >
                            <path
                              d="M24.6668 26.6666C24.6668 27.0333 24.3682 27.3333 24.0002 27.3333H8.00016C7.63216 27.3333 7.3335 27.0333 7.3335 26.6666V5.33329C7.3335 4.96663 7.63216 4.66663 8.00016 4.66663H16.0002V10.6666C16.0002 12.1386 17.1948 13.3333 18.6668 13.3333H24.6668V26.6666ZM18.0002 6.16129L23.1708 11.3333H18.6668C18.2988 11.3333 18.0002 11.0333 18.0002 10.6666V6.16129ZM25.8855 11.2186L18.1135 3.44796C18.0788 3.41329 18.0362 3.38663 18.0002 3.35463C17.9055 3.26929 17.8122 3.18529 17.7082 3.11463C17.6548 3.07863 17.5935 3.05463 17.5375 3.02396C17.4428 2.97063 17.3495 2.91196 17.2495 2.86929C16.9868 2.75996 16.7042 2.70529 16.4175 2.68529C16.3548 2.68129 16.2935 2.66663 16.2295 2.66663H16.2282H16.0002H8.00016C6.52816 2.66663 5.3335 3.86129 5.3335 5.33329V26.6666C5.3335 28.1386 6.52816 29.3333 8.00016 29.3333H24.0002C25.4722 29.3333 26.6668 28.1386 26.6668 26.6666V13.3333V13.104C26.6668 12.3973 26.3855 11.7186 25.8855 11.2186Z"
                              fill="#6DCE35"
                            />
                          </svg>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpLinks;
