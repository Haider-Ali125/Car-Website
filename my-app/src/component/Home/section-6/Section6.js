import "./section6.css";

const Section6 = () => {
  return (
    <div class="section6">
      <div class="section6-back-img">
        <div class="section6-contant">
          <i>
            <p class="sect6-para">Our advantages</p>
          </i>
          <h3 className="home-sect6-head">WE DELIVER ONLY THE</h3>
          <h3 className="home-sect6-head">BEST SERVICE</h3>
          <div class="sect6-card1">
            <img
              class="sect6-img"
              src="/images/sect6-card1.png"
              alt="Section6Card1"
            />
            <p>Individual approach​</p>
          </div>
          <div class="sect6-card1">
            <img
              class="sect6-img"
              src="/images/sect6-card2.png"
              alt="Section6Card2"
            />

            <p>Comfort & Safety​</p>
          </div>
          <div class="sect6-card1">
            <img
              class="sect6-img"
              src="/images/sect6-card3.png"
              alt="Section6Card2"
            />
            <p>Professional drivers​</p>
          </div>
        </div>
        <div class="section6-ratio">
          <div class="ratio1">
            <h1 class="ratio-head">25+</h1>
            <p>Years of experience</p>
          </div>
          <div class="ratio2">
            <h1 class="ratio-head">1570+</h1>
            <p>Satisfied clients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
