import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";

const InvestEasyWay = () => {

  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

  const settings = {
    // infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4, // default for large screens
    slidesToScroll: 4,
    // centerMode: true,
    accessibility: false,
    customPaging: (i) => <div className="dots-custom"></div>,
    responsive: [
      {
        breakpoint: 1200, // when width < 1024px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          arrows: false, // enable arrows on small screens
          dots: true,
        },
      },
      {
        breakpoint: 769, // when width < 1024px
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
          arrows: false, // enable arrows on small screens
          dots: true,
          className: "center",
          centerPadding: "1px",
        },
      },
    ],
  };

  return (
    <div className="invest-easy-way">
      <div className="invest-easy-way-inner">
        <div className="head-text-block">
          <div className="subtitle">MyInvest Vlog</div>
          <div className="title">
            Ներդրումները 
            <span> պարզ</span> բառերով
          </div>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {items.map(() => {
              return (
                <div className="slider-item-custom">
                  <div className="img-part">
                    <div className="play-btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="18"
                        viewBox="0 0 15 18"
                        fill="none"
                      >
                        <path
                          d="M15 9L-2.60381e-06 0.339743L-1.8467e-06 17.6603L15 9Z"
                          fill="#72BF44"
                        />
                      </svg>
                    </div>
                    <img
                      className="why-invest-image"
                      src="/images/second-image.png"
                      alt=""
                    />
                  </div>
                  <div className="text-block">
                    <div className="title">Ներդրումների մասին</div>
                    <div className="description">4 րոպե</div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="all-videos">
          <button className="bordered">
            բոլոր տեսահոլովակները
            <span className="icon-arrow-right-after"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvestEasyWay;
