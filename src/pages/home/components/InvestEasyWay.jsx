import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

const InvestEasyWay = () => {
  const ids = ["XvyaxLWnb6s", "qo6ReBYMcyc", "6TNm49DeE7U", "QX2gR7GvwW8"];
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

  async function fetchVideos(videoIds) {
    const requests = videoIds.map((id) =>
      fetch(
        `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`
      ).then((res) => res.json())
    );

    try {
      const results = await Promise.all(requests);

      const mapped = results.map((data, index) => ({
        id: videoIds[index],
        title: data.title,
        thumbnail: data.thumbnail_url,
        author: data.author_name,
      }));

      setVideos(mapped);
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
          <div className="subtitle">MyInvest Vlog</div>
          <div className="title">
            Ներդրումները
            <span> պարզ</span> բառերով
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
            բոլոր տեսահոլովակները
            <span className="icon-arrow-right-after"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvestEasyWay;
