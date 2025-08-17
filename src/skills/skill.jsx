import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./skill.css";
import img1 from "../assets/img/3.png";
import dot1 from "../assets/img/7.png";
import lines from "../assets/img/8.png";
const skills = [
  { label: "Figma / Adobe XD", value: 90 },
  { label: "UI Design", value: 80 },
  { label: "Architecture", value: 80 },
  { label: "UX Design", value: 70 },
  { label: "Prototyping", value: 70 },
  { label: "Box Model", value: 70 },
  { label: "Business Model ", value: 70 },
  { label: "Design Systems", value: 70 },
];

const SkillsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <div className="skills-section" id="skills">
      <div className="skills-header" data-aos="fade-down">
        <h2>
          <span className="highlight">Skills</span>
          <span className="skill-icon">
            <img src={img1} alt="" />
          </span>
          <span className="dot1">
            <img src={dot1} alt="" />
          </span>
        </h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            className="skill-circle"
            key={index}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <svg viewBox="0 0 36 36" className="circular-chart">
              <path
                className="circle-bg"
                d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="circle"
                strokeDasharray={`${skill.value}, 100`}
                d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text
                x="18"
                y="20.5"
                className="percentage"
                transform="rotate(90 18 18)"
              >
                {skill.value}%
              </text>
            </svg>
            <p>{skill.label}</p>
          </div>
        ))}
      </div>
      <span className="lines" data-aos="fade-left">
        <img src={lines} alt="" />
      </span>
      <span className="lines2" data-aos="fade-right">
        <img src={dot1} alt="" />
      </span>
    </div>
  );
};

export default SkillsSection;
