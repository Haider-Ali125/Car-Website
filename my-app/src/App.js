import "./App.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUS from "./pages/ContactUS";
import Services from "./pages/Service";
import Fleet from "./pages/Fleet";
import Health from "./pages/Health";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUS />} />
        <Route path="/services-us" element={<Services />} />
        <Route path="/health-and-safety" element={<Health />} />

        <Route path="/fleet" element={<Fleet />} />
      </Routes>
    </Router>
  );
}

export default App;
