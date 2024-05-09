import "./ContactSec3.css";

const ContactSec3 = () => {
  return (
    <div class="Contact-section4">
      <div class="About-section4-contant1">
        <h1 class="About-section4-contant1-head">Message US</h1>
        <p class="About-section4-contant1-para">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
      <div class="contact-sect4-form-main">
        <div class="contact-set4-form">
          <div class="input-field input-name">
            <label>Name:</label>
            <input type="text" placeholder="" />
          </div>

          <div class="input-field input-email">
            <label>Email:</label>
            <input type="email" placeholder="" />
          </div>
          <div class="input-field input-number">
            <label>Phone Number:</label>
            <input type="number" placeholder="" />
          </div>
          <div class="input-field input-name">
            <label>Company Name:</label>
            <input type="text" placeholder="" />
          </div>

          <div class="input-field input-message">
            <label for="Message">Message:</label>
            <textarea rows="10" id="Message" name="Message"></textarea>
          </div>
        </div>
        <button class="form-btn">Ask a Question</button>
      </div>
    </div>
  );
};

export default ContactSec3;
