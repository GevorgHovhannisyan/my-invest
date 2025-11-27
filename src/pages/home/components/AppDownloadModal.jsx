import { useEffect } from "react";
import { FormattedMessage } from "react-intl";

const AppDownloadModal = ({ opened, closeModal }) => {
  useEffect(() => {
    console.log(opened);
  }, [opened]);

  return (
    <div className={`qr-modal ${opened ? "opened" : ""}`}>
      <div className="qr-modal__overlay"></div>

      <div className="qr-modal__content">
        <button className="qr-modal__close" onClick={closeModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M12.707 12.3937L6.70703 6.39371L0.707032 0.727045M12.707 0.727044L0.707032 12.727"
              stroke="#737373"
              stroke-width="2"
            />
          </svg>
        </button>

        <div className="qr-modal__inner">
          <img
            src="/images/footer/qr-code-black.png"
            alt="QR Code"
            className="qr-modal__qr"
          />

          <div className="qr-modal__text">
            <h2>Ներբեռնիր MyAmeria հավելվածը</h2>
            <p>Սկանավորիր QR կոդը՝ հավելվածը ներբեռնելու համար։</p>

            <div className="qr-modal__store-buttons">
              <a href="#" className="store-btn apple">
                <img src="/images/banner/play-icon.png" alt="" />
                <img src="/images/banner/play-text.png" alt="" />
              </a>
              <a href="#" className="store-btn apple">
                <img src="/images/banner/store-icon.png" alt="" />
                <img src="/images/banner/store-text.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownloadModal;
