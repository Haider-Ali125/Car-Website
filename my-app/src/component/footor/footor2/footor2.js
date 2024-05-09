import "./footor2.css";

const footor = () => {
  return (
    <div class="footer-main">
      <div class="footer1">
        <img class="nav-img" src="/images/nav.png" alt="navImg" />
        <p class="footer2-para">
          Certain but she but shyness why cottage. Guy the put instrument sir
          entreaties affronting. Pretended exquisite see cordially the you.
          Weeks quiet do vexed.
        </p>
      </div>
      <div class="footer-menu">
        <div class="footer-about">
          <h3 class="footer-about-head">About Us</h3>
          <p>Eiusmod condimentum totam, ultrices, quis elem entum, dui.</p>
        </div>
        <div class="footer-links">
          <h3 class="footer-links-head">Useful Link</h3>
          <ul class="footer-link-list">
            <li>Help center</li>
            <li>Contact us</li>
            <li>FAQs</li>
            <li>Others</li>
          </ul>
        </div>
        <div class="footer-services">
          <h3 class="footer-services-head">Services</h3>
          <ul class="footer-services-list">
            <li>Houston Airport Transfer</li>
            <li>Corporate Travel</li>
            <li>Hotels & Concierges</li>
            <li>Travel Agency</li>
            <li>Travel Managers</li>
            <li>Others</li>
          </ul>
        </div>

        <div class="footor-subsrcibe">
          <h3 class="footor-subsrcibe-head">Subscribe</h3>
          <p>
            Get our weekly newsletter for latest car news exclusive offers and
            deals and more
          </p>
          <div class="footer-input">
            <input class="foot-in" placeholder="Email" />
            <button class="foot-btn">Subscribe</button>
          </div>
        </div>
      </div>
      <hr class="footer-hr" />
      <p class="footer-copyright">
        Copyright © 2022 Autozone. All rights reserved.
      </p>
    </div>
  );
};

export default footor;
