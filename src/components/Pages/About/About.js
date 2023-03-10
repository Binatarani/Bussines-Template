import React from "react";
import AboutText from "../AboutText/AboutText";
import SubImage from "../../../images/slider.jpg";
import "./About.css";
import LeaderShip from "../../LeaderShip/LeaderShip";
import Gallery from "../../Pages/Gallery/Gallery";

const About = () => {
  return (
    <section className="about-area">
      <img className="d-block w-100 mb-5" src={SubImage} alt="" />
      <AboutText />
      <Gallery />
      <LeaderShip />
    </section>
  );
};

export default About;
