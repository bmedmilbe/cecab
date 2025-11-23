import FsLightbox from "fslightbox-react";
import { useEffect, useState } from "react";

import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// import { sliderData } from "../../utils/data";
import { NavLink } from "react-router-dom";
import { usePostsHome, type PostHome } from "../../hooks/common/usePostsHome";
import { sliderData } from "../../utils/data";
import Loader from "./Loader";

const Banner = () => {
  const [toggler, setToggler] = useState(false);
  const { data, isLoading } = usePostsHome();
  const [results, setResults] = useState(data);
  console.log(data);
  useEffect(() => {
    setResults(data);
  }, [data]);
  const slides: PostHome[] = [...(results || []), ...sliderData];
  if (isLoading) return <Loader />;
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=kqahRuuS6lM"]}
      />

      <Swiper
        navigation={true}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
        }}
        modules={[Navigation, Autoplay]}
        className="home-area  home-slides"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="main-banner"
              style={{
                backgroundImage: `url(${slide.image || slide.picture})`,
              }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="main-banner-content">
                      <span className="sub-title">{slide.info}</span>
                      <h1>{slide.title}</h1>
                      {slide.beginnig && (
                        <span className="sub-title">{slide.beginnig}</span>
                      )}

                      <div className="btn-box">
                        {!slide.picture && (
                          <>
                            <NavLink to="associations">
                              <a className="default-btn">
                                Associações <span></span>
                              </a>
                            </NavLink>
                            <div
                              className="optional-btn"
                              onClick={() => setToggler(!toggler)}
                            >
                              <i className="flaticon-play-button"></i> Bem-vindo
                            </div>
                          </>
                        )}

                        {slide.picture && (
                          <NavLink to={`/blogs/${slide.slug}`}>
                            <a className="default-btn">
                              Ver mais <span></span>
                            </a>
                          </NavLink>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

// Efeitos da decisão
// Inconstitucionalidade por omissão
// Fiscalidade concreta da Constitucionalidade e da legalidade
// Efeitos da declaração da inconstitucionalidade ou ilegalidade

export default Banner;
