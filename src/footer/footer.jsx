import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./footer.css";

import { FaInstagram, FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import d1 from "../assets/img/d1.png";
import d2 from "../assets/img/d2.png";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      disable: "mobile",
    });
  }, []);

  return (
    <footer className="footer" data-aos="fade-up">
      <div className="dots1">
        <img src={d1} alt="dots1" />
      </div>
      <div className="dots2">
        <img src={d2} alt="dots2" />
      </div>

      <div className="social-icons" data-aos="fade-up" data-aos-delay="100">
        <span>
          <FaInstagram />
        </span>
        <span>
          <FaFacebook />
        </span>
        <span>
          <IoLogoLinkedin />
        </span>
        <span>
          <FaTwitterSquare />
        </span>
      </div>

      <p className="footer-text" data-aos="fade-up" data-aos-delay="200">
        © 2025 made by Komal with Creative Babar Team
      </p>
    </footer>
  );
};

export default Footer;
