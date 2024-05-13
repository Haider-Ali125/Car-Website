import "./Health1.css";

const Health1 = () => {
  return (
    <div className="Health1-main">
      <div className="HealthSec1">
        <p className="Healthsec1-head">Our Safety </p>
        <h3>
          Your Safety Always Comes First with Our Professional Chauffeur Service
        </h3>
        <p className="Healthsec1-para">
          We believe that your ride should not only be comfortable, but as safe
          as possible. To ensure this, we have a variety of procedures in place
          to make sure that you and your loved ones are transported with the
          utmost care.
        </p>
        <hr />
      </div>
      <div className="HealthSec2">
        <div className="HealthSec2-img">
          <img
            className="Health2-aside"
            src="/images/health1-sideImg.png"
            alt="Health1-side"
          />
        </div>
        <div className="HealthSec2-Cards">
          <div className="HealthSec2-Card">
            <img
              className="Health2Card-img"
              src="/images/Health1-Img1.png"
              alt="Health1-Card"
            />
            <h4 className="Health2Card-head">Thorough Background Checks</h4>
            <p className="Health2Card-para">
              All employees, both in our office and in the field, undergo
              extensive Federal, State, and DMV background screenings before
              being hired.
            </p>
          </div>
          <div className="HealthSec2-Card">
            <img
              className="Health2Card-img"
              src="/images/Health1-Img2.png"
              alt="Health1-Card"
            />
            <h4 className="Health2Card-head">GPS Tracking</h4>
            <p className="Health2Card-para">
              Our live dispatchers have the ability to monitor driving skills
              with Teluware GPS tracking and iDrive cameras that are installed
              in all of our vehicles.
            </p>
          </div>
          <div className="HealthSec2-Card">
            <img
              className="Health2Card-img"
              src="/images/Health1-Img3.png"
              alt="Health1-Card"
            />
            <h4 className="Health2Card-head">Comprehensive Driver Testing</h4>
            <p className="Health2Card-para">
              Drivers must, on top of these screenings, pass pre-employment drug
              testing and are required to complete a defensive driver training
              course.
            </p>
          </div>
          <div className="HealthSec2-Card">
            <img
              className="Health2Card-img"
              src="/images/Health1-Img4.png"
              alt="Health1-Card"
            />
            <h4 className="Health2Card-head">Ensuring Top-Quality Travel</h4>
            <p className="Health2Card-para">
              We constantly monitor our chauffeurs' driving habits and records.
              We store anything that sets the camera off such as speed and
              sudden stops. If a chauffeur has repeated activity of this nature,
              you can be sure they won’t be working for us anymore!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Health1;
