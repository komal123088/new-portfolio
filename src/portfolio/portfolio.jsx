import "./portfolio.css";

import b1 from "../assets/img/b1.png";
import b2 from "../assets/img/b2.png";
import b3 from "../assets/img/b3.png";

const Portfolio = () => {
  return (
    <>
      <div className="portfolio" id="portfolio" data-aos="zoom-in">
        <div className="heading">
          <h1>Portfolio</h1>
        </div>
        <div className="boxes">
          <div className="box" data-aos="fade-right" data-aos-delay="100">
            <span className="box1-img">
              <img src={b1} />
            </span>
            <span className="txt">
              <h4>Eventos Premium</h4>
              <p>Elegante - Serio - Estatus</p>
            </span>
          </div>
          <div className="box" data-aos="fade-up" data-aos-delay="200">
            <span className="box1-img">
              {" "}
              <img src={b2} />
            </span>
            <span className="txt">
              <h4>Mi Portal U</h4>
              <p>Amigable - Dashboard - Simple</p>
            </span>
          </div>
          <div className="box img" data-aos="fade-left" data-aos-delay="300">
            <span className="box1-img img">
              {" "}
              <img src={b3} />
            </span>
            <span className="txt ">
              <h4>A&C App</h4>
              <p>Elegante - Serio - Estatus</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
