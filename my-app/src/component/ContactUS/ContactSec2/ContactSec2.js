import "./ContactSec2.css";

const ContactSec2 = () => {
  return (
    <div class="section2">
      <div class="section2-text">
        <h3>Get In Touch</h3>
        <p class="section2-para">
          To contribute to positive change and achieve our sustainability goals
          with many extraordinary
        </p>
        <hr />
      </div>
      <div class="section2-card">
        <div class="card-1">
          <img
            class="card1-imgs"
            src="/images/contact-slider1.png"
            alt="card1-img"
          />
          <h3>Phone</h3>
          <p>713-804-6600</p>
        </div>
        <div class="card-1">
          <img
            class="card1-imgs"
            src="/images/contact-slider2.png"
            alt="card2-img"
          />
          <h3>Address</h3>
          <p>13038 Mills Creek Meadow Dr.Houston, Texas 77070 United States</p>
        </div>
        <div class="card-1">
          <img
            class="card1-imgs"
            src="/images/contact-slider3.png"
            alt="card3-img"
          />

          <h3>Email</h3>
          <p>info@houston365.net</p>
        </div>
      </div>
    </div>
  );
};

export default ContactSec2;
