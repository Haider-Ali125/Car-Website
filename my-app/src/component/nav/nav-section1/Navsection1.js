import React from "react";
import "./navsection1.css";
const Navsection1 = () => {
  return (
    <div class="nav-section1">
      <div class="nav-1">
        <div class="email">
          <img
            className="Nav-email-Img1"
            src="/images/Nav-email.png"
            alt="Nav-image1"
          />
          {/* <i class="fa fa-envelope" style={{ width: "22px" }}></i> */}
          <p>houston365@gmail.com</p>
        </div>
        <div class="nav-2">
          <img
            src="/images/Nav-phone.png"
            className="Nav-Phone"
            alt="Nav-Phone"
          />
          {/* <i class="fa-solid fa-phone"></i> */}
          <p>878-3853-9576</p>
        </div>
      </div>
    </div>
  );
};

export default Navsection1;
