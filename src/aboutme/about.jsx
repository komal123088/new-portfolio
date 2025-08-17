import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./about.css";

import bgWave from "../assets/img/bg.png";
// import capImage from "../assets/img/cap.png";
import icon1 from "../assets/img/icon2.png";
import icon2 from "../assets/img/icon1.png";
import a1 from "../assets/img/a1.png";
import a2 from "../assets/img/a2.png";
import a3 from "../assets/img/a3.png";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="aboutme-container" id="about">
      <div className="bgimg">
        <img src={bgWave} className="aboutme-bg" />
      </div>
      <h2 className="aboutme-title" data-aos="fade-down">
        About Me
      </h2>
      <span className="aboutdots">
        <img src={a3} alt="" />
      </span>
      <span className="aboutlines">
        <img src={a2} alt="" />
      </span>{" "}
      <span className="aboutdots1">
        <img src={a1} alt="" />
      </span>
      <div className="aboutme-box" data-aos="zoom-in">
        <div
          className="aboutme-card"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <img src={icon1} alt="Responsibility" className="aboutme-icon" />
          <h3>100%</h3>
          <p>Responsibility</p>
        </div>

        <div
          className="aboutme-center main"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* <img src={capImage} alt="Center Cap" className="aboutme-cap" /> */}
          <div className="center-txt">
            <h3>100%</h3>
            <p>Colombian</p>
          </div>
        </div>

        <div
          className="aboutme-card2"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <img src={icon2} alt="Punctuality" className="aboutme-icon2" />
          <h3>100%</h3>
          <p>Punctuality</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
