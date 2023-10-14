import React from "react";
import Hero from "./Hero";
import "./MyPortfolio.css";
import Aboutme from "./Aboutme";
import Services from "./Services";
import Portfolio from "./Portfolio";

const MyPortFolio = () => {
  return (
    <div>
      <Hero />
      <div className="px-6">
        <Aboutme />
        <Services />
        <Portfolio />
      </div>
    </div>
  );
};

export default MyPortFolio;
