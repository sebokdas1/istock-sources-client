import React from "react";
import Heroo from "../../Assets/Sebok Das cs.gif";
import { Link } from "react-router-dom";
import "./MyPortfolio.css";

const Hero = () => {
  return (
    <section className="hero bg-[#f0f4f7] flex flex-col md:flex-row lg:flex-row  items-center px-6">
      <div className="order-2 lg:order-1 md:order-1">
        <div className="m-0 p-0 leading-none">
          <h3 className="text-[#262626] text-[18px] font-semibold font-sans-serif mt-3 lg:mt-0">
            HELLO, MY NAME IS
          </h3>
          <h1 className="text-[#262626] text-[60px] font-bold mt-2">
            Sebok Das
          </h1>
          <h2 className="text-[#735BE2] text-[25px] font-bold mt-2">
            Web Developer (Mern)
          </h2>
        </div>
        <p className="leading-[1.6em] mb-[15px] font-light text-[#262626] pr-3 mt-3">
          I'm a Front End Web developer who is passionate about making
          error-free websites with 100% client satisfaction. I love to solve
          real-world problems. I am strategic, and goal-oriented, and always
          work with an end goal in mind.
        </p>
        <div className="flex gap-[30px]">
          <Link
            to="/contact"
            className="text-[18px] font-bold bg-[#735BE2] hover:bg-[#262626] text-white py-[15px] px-[30px]"
          >
            HIRE ME
          </Link>
          <a
            href="https://drive.google.com/file/d/1skk1vytZ0kddCJBLJqLJ6xQWNNhyhyyV/view?usp=sharing"
            className="text-[18px] font-bold bg-[#262626] hover:bg-[#735BE2]  text-white py-[15px] px-[30px]"
            target="_blank"
          >
            RESUME
          </a>
        </div>
      </div>
      <div className="order-1 lg:order-2 md:order-2 pt-4 px-3 w-full">
        <img src={Heroo} alt="" />
      </div>
    </section>
  );
};

export default Hero;
