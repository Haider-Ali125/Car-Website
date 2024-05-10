import React from "react";
import "./Ser-sect3.css";
const Servicesect3 = () => {
  return (
    <div class="Ser-sect3-main">
      <div class="Ser-sect3-img">
        <img
          class="Ser-sect3-img-side"
          src="/images/Ser_sect3side.png"
          alt="AboutSectionImg"
        />
      </div>
      <div class="Ser-sect3-contents">
        <p className="Ser-sect3-drivers">Professional Drivers</p>
        <h3 class="Ser-sect3-content-head">
          Chauffeur Services in Over 1200 Cities Worldwide
        </h3>

        <p class="Ser-sect3-para">
          Any company can drive someone from point A to point B. We pride
          ourselves on being much more than just a chauffeur service by hiring
          only the best. As a high-end chauffeur service, we offer the best in
          elegance and luxury and provide a wide assortment of beautiful,
          opulent vehicles at your disposal. Let us professionally handle your
          transportation needs. Work with the leading professionals of
          chauffeured hospitality and you’ll quickly see why we are considered
          world-class.
        </p>
        <button class="Ser-sect3-btn">Contact US</button>
      </div>
    </div>
  );
};

export default Servicesect3;
