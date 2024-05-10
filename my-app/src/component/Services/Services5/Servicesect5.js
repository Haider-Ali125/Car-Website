import React from "react";
import "./Ser-sect5.css";
const Servicesect5 = () => {
  return (
    <div class="Ser-sect5-main">
      <div class="Ser-sect5-img">
        <img
          class="Ser-sect5-img-side"
          src="/images/Ser-sec5-side.png"
          alt="ServiceSectionImg"
        />
      </div>
      <div class="Ser-sect5-contents">
        <p className="Ser-sect5-drivers">BEST PRICE</p>
        <h3 class="Ser-sect5-content-head">Book A Ride Now</h3>

        <p class="Ser-sect5-para">
          Whatever your transportation needs, take our world-class chauffeuring
          service. We offer a diverse range of executive and luxury vehicles,
          and transport you to your destination safely, efficiently, and with
          unmatched professionalism. Call us and book your ride now!
        </p>

        <div className="Sect5-right">
          <div className="Sect5-right1">
            <div className="Sect-upper">
              <h3>CYPRESS</h3>
              <p>Address : 13038 Mills Creek Meadow Dr. Houston TX 77070</p>
            </div>
            <div className="Sect-lower">
              <h3>+1-713-804-6600</h3>
            </div>
          </div>
          <div className="Sect5-right2">
            <h3>HOUSTON</h3>
            <p>
              Airports We Service : George Bush Intercontinental Airport (IAH)
              2800 N Terminal Rd Houston, TX 77032 , William P. Hobby Airport
              (HOU) 7800 Airport Boulevard · Houston, TX 77061 , West Houston
              Airport (IWS) 18000 Groeschke Rd Houston, TX 77084 , Ellington
              Airport (EFD) 11602 Aerospace Ave. Houston, TX 77034
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicesect5;
