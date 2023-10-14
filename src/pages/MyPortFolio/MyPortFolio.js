import React from "react";
import Hero from "./Hero";
import "./MyPortfolio.css";
import Aboutme from "./Aboutme";
import Services from "./Services";

const MyPortFolio = () => {
  return (
    <div>
      <Hero />
      <div className="px-6">
        <Aboutme />
        <Services />
      </div>
    </div>
  );
};

export default MyPortFolio;
