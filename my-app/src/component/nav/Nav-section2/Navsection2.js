import "./Navsection2.css";
import { Link } from "react-router-dom";

const Navsection2 = () => {
  return (
    
    <div className="nav-section2">
      <div className="img">
        <img className="img-logo" src="/images/logo.png" alt="logo" />
      </div>
      <div className="menu-list">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/fleet">Fleet</Link>
          </li>
          <li>
            <Link to="/health-and-safety">Health & Safety</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="nav-btn">
        <button className="sign-btn">Sign In</button>
        <button className="regis">Register</button>
      </div>
  
    </div>
  
  );
};

export default Navsection2;
