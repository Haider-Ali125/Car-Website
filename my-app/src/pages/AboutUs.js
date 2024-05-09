import Navsection1 from "../component/nav/nav-section1/Navsection1";
import Navsection2 from "../component/nav/Nav-section2/Navsection2";
import AboutSec1 from "../component/AboutUs/AboutSec1/AboutSec1";
import AboutSec2 from "../component/AboutUs/AboutSec2/AboutSec2";
import AboutSec3 from "../component/AboutUs/AboutSec3/AboutSec3";
import AboutSec4 from "../component/AboutUs/AboutSec4/AboutSec4";
import Client from "../component/Clients/client1";
import Footor1 from "../component/footor/footor1/footor1";
import Footor2 from "../component/footor/footor2/footor2";
const AboutUs = () => {
  return (
    <div>
      <Navsection1 />
      <Navsection2 />
      <AboutSec1 />
      <AboutSec2 />
      <AboutSec3 />
      <AboutSec4 />
      <Client />
      <Footor1 />
      <Footor2 />
    </div>
  );
};

export default AboutUs;
