import "./Health2.css";

const Health2 = () => {
  return (
    <div class="Health2-main">
      <div class="Health2-text">
        <p class="Health2-para">Our Health </p>
        <h3>Precautions for COVID-19</h3>

        <hr />
      </div>

      <div class="Health2-main-content">
        <div class="Health2-contents">
          <p class="Health2-contents-para">
            For Houston 365 there is nothing more important than our passenger’s
            safety and well being. As COVID-19 continues to spread, we are
            making efforts to protect our passengers and get to their
            destination safely and healthy.
          </p>
          <p class="Health2-contents-para">
            We are taking serious measures to ensure the health and safety of
            our clients. We are disinfecting our vehicles with Electrostatics
            foggers, between passenger changes. Further, we have asked all our
            chauffeurs to wear face coverings to protect themselves as well as
            our clients. Additionally, we are also supplying hand sanitizers,
            and face masks and gloves upon request made at the time of booking
            to our clients to make their journey safer.
          </p>
        </div>
        <div class="Health2-img">
          <img
            class="Health2-img-side"
            src="/images/health2-side.png"
            alt="AboutSectionImg"
          />
        </div>
      </div>
    </div>
  );
};

export default Health2;
