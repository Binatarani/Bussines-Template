import React from "react";
import AboutText from "../AboutText/AboutText";
import SubImage from "../../../images/slider.jpg";
import "./About.css";
import LeaderShip from "../../LeaderShip/LeaderShip";
import Gallery from "../../Pages/Gallery/Gallery";
import SectionHeading from "../../SectionHeading/SectionHeading";
import SubSectionHeading from "../../SubSectionHeading/SubSectionHeading";

const About = () => {
  return (
    <section className="about-area">
      <img className="d-block w-100 mb-5" src={SubImage} alt="" />
      <SectionHeading heading="About This Property" />
      <SubSectionHeading heading="Over the past 10 years we’ve created more than 5,000 new homes and 1 million sq ft of workspace in over 60 regeneration projects. Have a look at the short film below to learn more about how we’ve achieved this and what drives us." />
      <AboutText />
      <Gallery />
      <LeaderShip />
    </section>
  );
};

export default About;
