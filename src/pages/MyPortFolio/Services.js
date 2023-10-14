import React from "react";
import { TfiHtml5 } from "react-icons/tfi";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineDevices } from "react-icons/md";
import "./MyPortfolio.css";

const Services = () => {
  return (
    <section>
      <div className="p-[10px]">
        <h1 className="text-[#735BE2] text-[55px] font-bold text-center leading-none">
          Services
        </h1>
        <h2 className="text-[#262626] text-[22px] font-bold text-center leading-none">
          What I will do for you?
        </h2>
      </div>
      <div className="lg:grid grid-cols-3 gap-5 mt-[35px]">
        <div className="psdToHtml text-center">
          <h1 className="text-[#735BE2] font-normal text-[50px] flex justify-center">
            <TfiHtml5 />
          </h1>
          <h2 className="text-[#262626] text-[20px] font-semibold">
            PSD TO HTML5
          </h2>
          <p className="font-light leading-[1.6em] mb-[15px]">
            I will convert your PSD to HTML5 with Latest Bootstrap. It will be
            fully responsive. Pixel-perfect code and fresh hand code are my
            power. If you have any design or idea I can make it a website.
          </p>
        </div>
        <div className="psdToHtml text-center mt-6 lg:mt-0">
          <h1 className="text-[#735BE2] font-normal text-[50px] flex justify-center">
            <FaLaptopCode />
          </h1>
          <h2 className="text-[#262626] text-[20px] font-semibold">
            FRONT-END DEVELOPER
          </h2>
          <p className="font-light leading-[1.6em] mb-[15px]">
            I'm a Front End Web developer who is passionate about making
            error-free websites with 100% client satisfaction.
          </p>
        </div>
        <div className="psdToHtml text-center mt-6 lg:mt-0">
          <h1 className="text-[#735BE2] font-normal text-[50px] flex justify-center">
            <MdOutlineDevices />
          </h1>
          <h2 className="text-[#262626] text-[20px] font-semibold">
            MERN STACK DEVELOPER
          </h2>
          <p className="font-light leading-[1.6em] mb-[15px]">
            I'm a Full Stack Web developer(MERN) who is passionate about making
            error-free websites with 100% client satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
