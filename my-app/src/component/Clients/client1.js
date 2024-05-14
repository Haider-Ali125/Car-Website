import "./client.css";
// import SwipersCard from "../Swiper/SwipersCard";

const Client = () => {
  return (
    <div class="section8">
      <i>
        <p class="sect8-par">Reviewed by People</p>
      </i>
      <h2>Clients' Testimonials</h2>

      <p class="sect8-parag">
        Certain but she but shyness why cottage. Guy the put instrument sir
        entreaties affronting. Pretended exquisite see cordially the you. Weeks
        quiet do vexed.
      </p>

      <hr />
      {/* <SwipersCard /> */}
      <div class="sect8-card">
        <div class="sect8-card1">
          <p class="sect8-para-main">
            “Certain but she but shyness why cottage. Guy the put instrument sir
            entreaties affronting.”
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
        <div class="sect8-card1">
          <p class="sect8-para-main">
            “Certain but she but shyness why cottage. Guy the put instrument sir
            entreaties affronting.”
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
      </div>
      <div class="sect8-slide-btn">
        <img
          class="sect8-slide-img"
          src="/images/sect8-slide-btn.png"
          alt="Section8Slider_Img"
        />
      </div>
    </div>
  );
};

export default Client;
