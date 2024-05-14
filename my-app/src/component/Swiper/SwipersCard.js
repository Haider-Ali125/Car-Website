import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Swipers.css";

// import required modules
import { Pagination } from "swiper/modules";

const SwipersCard = () => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div className="sect8-card">
          <SwiperSlide>
            <div class="sect8-card1">
              <p class="sect8-para-main">
                “Certain but she but shyness why cottage. Guy the put instrument
                sir entreaties affronting.”
              </p>
              <div class="sect8-own-detail">
                <div class="sect8-own-data">
                  <div class="sect8-own-img">
                    <img
                      class="sect8-own1"
                      src="/images/sect8-card1.png"
                      alt="sect8-own1"
                    />
                  </div>
                  <div class="sect8-card-text">
                    <h2 class="sect8-head">Kinberly Garcia</h2>
                    <p class="sect8-para">Boston Area</p>
                  </div>
                </div>
                <div class="secct8-own-aside">
                  <img
                    class="sect8-card-aside"
                    src="/images/sect8-card-aside.png"
                    alt="sect8SideImg"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="sect8-card1">
              <p class="sect8-para-main">
                “Certain but she but shyness why cottage. Guy the put instrument
                sir entreaties affronting.”
              </p>
              <div class="sect8-own-detail">
                <div class="sect8-own-data">
                  <div class="sect8-own-img">
                    <img
                      class="sect8-own1"
                      src="/images/sect8-card1.png"
                      alt="sect8-own1"
                    />
                  </div>
                  <div class="sect8-card-text">
                    <h2 class="sect8-head">Kinberly Garcia</h2>
                    <p class="sect8-para">Boston Area</p>
                  </div>
                </div>
                <div class="secct8-own-aside">
                  <img
                    class="sect8-card-aside"
                    src="/images/sect8-card-aside.png"
                    alt="sect8SideImg"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="sect8-card1">
              <p class="sect8-para-main">
                “Certain but she but shyness why cottage. Guy the put instrument
                sir entreaties affronting.”
              </p>
              <div class="sect8-own-detail">
                <div class="sect8-own-data">
                  <div class="sect8-own-img">
                    <img
                      class="sect8-own1"
                      src="/images/sect8-card1.png"
                      alt="sect8-own1"
                    />
                  </div>
                  <div class="sect8-card-text">
                    <h2 class="sect8-head">Kinberly Garcia</h2>
                    <p class="sect8-para">Boston Area</p>
                  </div>
                </div>
                <div class="secct8-own-aside">
                  <img
                    class="sect8-card-aside"
                    src="/images/sect8-card-aside.png"
                    alt="sect8SideImg"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="sect8-card1">
              <p class="sect8-para-main">
                “Certain but she but shyness why cottage. Guy the put instrument
                sir entreaties affronting.”
              </p>
              <div class="sect8-own-detail">
                <div class="sect8-own-data">
                  <div class="sect8-own-img">
                    <img
                      class="sect8-own1"
                      src="/images/sect8-card1.png"
                      alt="sect8-own1"
                    />
                  </div>
                  <div class="sect8-card-text">
                    <h2 class="sect8-head">Kinberly Garcia</h2>
                    <p class="sect8-para">Boston Area</p>
                  </div>
                </div>
                <div class="secct8-own-aside">
                  <img
                    class="sect8-card-aside"
                    src="/images/sect8-card-aside.png"
                    alt="sect8SideImg"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
        {/* <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default SwipersCard;
