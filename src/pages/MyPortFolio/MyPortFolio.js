import React from "react";
import Hero from "./Hero";
import "./MyPortfolio.css";
import Aboutme from "./Aboutme";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Testimonial from "./Testimonial";
import Contact from "./Contact";

const MyPortFolio = () => {
  return (
    <div>
      <Hero />
      <div className="px-6">
        <Aboutme />
        <Services />
        <Portfolio />
        <Testimonial />
        <Contact />
      </div>
    </div>
  );
};

export default MyPortFolio;
