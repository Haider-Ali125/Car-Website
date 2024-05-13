import Navsection1 from "../component/nav/nav-section1/Navsection1";
import Navsection2 from "../component/nav/Nav-section2/Navsection2";
import Health1 from "../component/Health/Health1/Health1";
import Health2 from "../component/Health/Health2/Health2";
import Health3 from "../component/Health/Health3/Health3";
import Health4 from "../component/Health/Health4/Health4";
import Client from "../component/Clients/client1";
import Footor1 from "../component/footor/footor1/footor1";
import Footor2 from "../component/footor/footor2/footor2";

const Health = () => {
  return (
    <div>
      <Navsection1 />
      <Navsection2 />
      <Health4 />
      <Health1 />
      <Health2 />
      <Health3 />
      <Client />
      <Footor1 />
      <Footor2 />
    </div>
  );
};

export default Health;
