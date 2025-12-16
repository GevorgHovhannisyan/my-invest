import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";

const InvestEasyWay = () => {
  const ids = [
    { id: "XvyaxLWnb6s", image: "/images/invest-easy-way/about-invest.jpg" },
    { id: "qo6ReBYMcyc", image: "/images/invest-easy-way/etf.jpg" },
    { id: "6TNm49DeE7U", image: "/images/invest-easy-way/about-bonds.jpg" },
    { id: "QX2gR7GvwW8", image: "/images/invest-easy-way/about-vouchers.jpg" },
  ];
  const [videos, setVideos] = useState([]);

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

  async function fetchVideos(videos) {
    const requests = videos.map((video) =>
      fetch(
        `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${video.id}&format=json`
      ).then((res) => res.json())
    );

    try {
      const results = await Promise.all(requests);

      const mapped = results.map((data, index) => ({
        id: videos[index].id,
        title: data.title,
        thumbnail: ids[index].image,
        author: data.author_name,
      }));

      setVideos(mapped);

      console.log('mapped', mapped);
      
    } catch (err) {
      console.error("oEmbed error:", err);
    }
  }

  useEffect(() => {
    fetchVideos(ids);
  }, []);

  return (
    <div className="invest-easy-way">
      <div className="invest-easy-way-inner">
        <div className="head-text-block">
          <div className="subtitle">
            <FormattedMessage id="videos_subtitle" />
          </div>
          <div className="title">
            <FormattedMessage id="videos_title_p1" />
            <span>
              {" "}
              <FormattedMessage id="videos_title_p2" />
            </span>{" "}
            <FormattedMessage id="videos_title_p3" />
          </div>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {videos.map((video) => {
              return (
                <a
                  href="https://www.youtube.com/watch?v=XvyaxLWnb6s"
                  target="_blank"
                  className="slider-item-custom"
                >
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
                      src={video.thumbnail}
                      alt=""
                    />
                  </div>
                  <div className="text-block">
                    <div className="title">{video.title}</div>
                    <div className="description">4 րոպե</div>
                  </div>
                </a>
              );
            })}
          </Slider>
        </div>
        <div className="all-videos">
          <button className="bordered">
            <FormattedMessage id="videos_see_all" />
            <span className="icon-arrow-right-after"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvestEasyWay;
