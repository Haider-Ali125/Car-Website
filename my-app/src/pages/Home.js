import React from "react";
import Navsection1 from "../component/nav/nav-section1/Navsection1";
import Navsection2 from "../component/nav/Nav-section2/Navsection2";
import Section1 from "../component/Home/section-1/Sectoin1";
import Section2 from "../component/Home/section-2/section2";
import Section3 from "../component/Home/section-3/Section-3";
import Section4 from "../component/Home/section-4/Section4";
import Section5 from "../component/Home/section-5/Section5";
import Section6 from "../component/Home/section-6/Section6";
import Section7 from "../component/Home/section-7/Section7";
import Client from "../component/Clients/client1";
import Section9 from "../component/Home/section-9/Section9";
import Footor1 from "../component/footor/footor1/footor1";
import Footor2 from "../component/footor/footor2/footor2";

const Home = () => {
  return (
    <div>
      <Navsection1 />
      <Navsection2 />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Client />
      <Section9 />
      <Footor1 />
      <Footor2 />
    </div>
  );
};

export default Home;
