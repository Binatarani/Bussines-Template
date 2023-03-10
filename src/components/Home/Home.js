import React from "react";
import Hero from "../HeroArea/Hero";
import Services from "../Services/Services";
import "./Home.css";
import Contact from "../Contact/Contact";
import BuyOrSell from "../BuyOrSell/BuyOrSell";
const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <BuyOrSell />
      <Contact />
    </>
  );
};

export default Home;
