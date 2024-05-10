import Navsection1 from "../component/nav/nav-section1/Navsection1";
import Navsection2 from "../component/nav/Nav-section2/Navsection2";
import Fleetssec1 from "../component/Fleet/Fleet1/Fleetsec1";
import Fleetsec2 from "../component/Fleet/Fleet2/Fleetsec2";
import Client from "../component/Clients/client1";
import Footor1 from "../component/footor/footor1/footor1";
import Footor2 from "../component/footor/footor2/footor2";

const Fleet = () => {
  return (
    <div>
      <Navsection1 />
      <Navsection2 />
      <Fleetssec1 />
      <Fleetsec2 />

      <Client />
      <Footor1 />
      <Footor2 />
    </div>
  );
};

export default Fleet;
