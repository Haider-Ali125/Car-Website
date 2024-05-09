import "./section7.css";

const Section7 = () => {
  return (
    <div class="section7">
      <div class="section7-main">
        <div class="sect7-main-img">
          <img
            class="sect7-imgs-main"
            src="/images/section7-main.png"
            alt="Section7Images"
          />
        </div>
        <div class="sect7-text">
          <div class="sect7-head">
            <i>
              <p style={{ color: "#ff5c1d" }} id="sect7-text">
                FINEST TRANSPORT
              </p>
            </i>
            <h2>Our fleet with maximum comfort</h2>
          </div>
          <div class="sect7-btn">
            <button class="btn7-side">Book Now</button>
          </div>
        </div>
        <div class="sect7-cards">
          <div class="sect7-card1">
            <p class="sect7-card-par">Mercedes E-class</p>
            <h2>
              45
              <span class="dol-sign">
                <i>$</i>
              </span>
            </h2>
            <image class="sect7-card1-img" src="sect7-card1.png"></image>
            <div class="card-details">
              <div class="card-data">
                <image class="sect7-tick" src="sect7-tick.png"></image>
                <p>2018</p>
              </div>
              <div class="card-data">
                <image class="sect7-tick" src="sect7-tick.png"></image>
                <p>3 passengers</p>
              </div>
              <div class="card-data">
                <image class="sect7-tick" src="sect7-tick.png"></image>
                <p>2 bags</p>
              </div>
            </div>
            <button class="sect7-cardbtn">Book Now</button>
          </div>
          <div class="sect7-card1">
            <p class="sect7-card-par">Mercedes Sprinter</p>
            <h2>
              45
              <span class="dol-sign">
                <i>$</i>
              </span>
            </h2>
            <image class="sect7-card1-img" src="sect7-card2.png"></image>
            <div class="card-details">
              <div class="card-data">
                <img
                  class="sect7-tick"
                  src="/images/sect7-tick.png"
                  alt="TickImg"
                />
                <p>2017</p>
              </div>
              <div class="card-data">
                <img
                  class="sect7-tick"
                  src="/images/sect7-tick.png"
                  alt="TickImg"
                />

                <p>Bus</p>
              </div>
              <div class="card-data">
                <img
                  class="sect7-tick"
                  src="/images/sect7-tick.png"
                  alt="TickImg"
                />

                <p>20 passengers</p>
              </div>
            </div>
            <button class="sect7-cardbtn">Book Now</button>
          </div>
          <div class="sect7-card1">
            <p class="sect7-card-par">Mercedes E-class</p>
            <h2>
              45
              <span class="dol-sign">
                <i>$</i>
              </span>
            </h2>
            <image class="sect7-card1-img" src="sect7-card3.png"></image>
            <div class="card-details">
              <div class="card-data">
                <image class="sect7-tick" src="sect7-tick.png"></image>
                <p>2018</p>
              </div>
              <div class="card-data">
                <image class="sect7-tick" src="sect7-tick.png"></image>
                <p>3 passengers</p>
              </div>
              <div class="card-data">
                <image class="sect7-tick" src="sect7-tick.png"></image>
                <p>2 bags</p>
              </div>
            </div>
            <button class="sect7-cardbtn">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
