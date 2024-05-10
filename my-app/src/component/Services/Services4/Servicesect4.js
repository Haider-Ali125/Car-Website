import React from "react";
import "./Ser-sect4.css";
const Servicesect4 = () => {
  return (
    <div class="Ser-sec4-main">
      <div class="Ser-sec4-text">
        <p class="Ser-sec4-para">Houston City Limo</p>
        <h3>+1-713-804-6600</h3>
        <p>
          Professional and safe chauffeured transportation is what sets us
          apart.
        </p>
        <hr />
      </div>
      <div class="Ser-sec4-cards">
        <div class="Ser-sec4-cards-1">
          <div className="card-img-main">
            <img
              class="Ser-sec4-img"
              src="/images/Ser-sec4-card1.svg"
              alt="Card1_Img"
            />
          </div>
          <h3>Stability, Integrity & Consistency</h3>
          <p className="Ser-sec4-cards-1-para">
            We are on the verge to become industry leaders, with outstanding
            service quality and sound business practices.
          </p>
        </div>

        <div class="Ser-sec4-cards-1">
          <div className="card-img-main">
            <img
              class="Ser-sec4-img"
              src="/images/Ser-sec4-card2.svg"
              alt="Card1_Img"
            />
          </div>
          <h3>Proficient Chauffeur Staff</h3>
          <p className="Ser-sec4-cards-1-para">
            We have the best trained and most experienced chauffeur staff that
            is committed to provide a great drive experience.
          </p>
        </div>

        <div class="Ser-sec4-cards-1">
          <div className="card-img-main">
            <img
              class="Ser-sec4-img"
              src="/images/Ser-sect-card3.svg"
              alt="Card1_Img"
            />
          </div>
          <h3>Up-To-Date Fleet</h3>
          <p className="Ser-sec4-cards-1-para">
            Our fleet consists of the latest executive class vehicles and is
            maintained to the highest industry standards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Servicesect4;
