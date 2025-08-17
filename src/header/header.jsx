import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./header.css";
import chartImage from "../assets/img/1.png";
import logo from "../assets/img/5.png";
import dots from "../assets/img/4.png";
import curve from "../assets/img/2.png";
import hero from "../assets/img/6.png";
import { FaGripLines } from "react-icons/fa6";

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="hero-wrapper">
      {/* Navbar */}
      <nav className="hero-navbar" data-aos="fade-down">
        <div className="hero-profile">
          <img src={logo} alt="Profile" />
          <span>Komal Raza</span>
        </div>

        {/* Toggle Button */}
        <button
          className="hero-toggle-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span>
            <FaGripLines />
          </span>
        </button>

        {/* Menu Links + Button */}
        <div className={`hero-menu-container ${menuOpen ? "open" : ""}`}>
          <ul className="hero-nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>

          <button className="hero-contact-btn">Contact Me</button>
        </div>
      </nav>

      {/* Hero Main */}
      <div className="hero-content">
        <div className="hero-text" data-aos="fade-right">
          <h1>
            Hi, I am <br />
            Komal🎨
          </h1>
          <div className="logo">
            <img src={hero} alt="" />
          </div>
          <p>
            I am a UI/UX Designer. I like to make interfaces simple and
            aesthetically pleasing...
          </p>
          <button className="hero-main-btn">¡Contact Me!</button>
        </div>
        <div className="hero-illustration" data-aos="fade-left">
          <img src={chartImage} alt="Chart Illustration" />
        </div>
      </div>

      {/* Decorations */}
      <div className="hero-dots" data-aos="fade-left">
        <img src={dots} alt="" />
      </div>
      <div className="hero-curve" data-aos="fade-left">
        <img src={curve} alt="" />
      </div>
      <div className="heading-dots" data-aos="fade-right">
        <img src={dots} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
