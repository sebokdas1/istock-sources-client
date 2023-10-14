import React from "react";
import "./MyPortfolio.css";

const Aboutme = () => {
  return (
    <section className="lg:grid grid-cols-2 py-[45px]">
      <div></div>
      <div className="lg:pl-[20px]">
        <h1 className="text-[#735BE2] text-[55px] font-bold">About Me</h1>
        <h2 className="text-[#262626] text-[22px] font-bold">
          Why You Hire Me?
        </h2>
        <p className="font-light mb-[15px] leading-[1.6em] text-[#262626]">
          Over the past years, I created 100s of websites for my clients. I
          pride myself on doing quality work and maintain excellent
          communication. Most of the time I work with ReactJs but some
          technologies I enjoy working with include JavaScript as well as NodeJs
        </p>
        <div className="md:flex lg:flex justify-between tracking-[0px]">
          <div className="about_success">
            <h1 className="text-[#262626] text-[38px] text-center leading-[16px] font-extralight tracking-[0px]">
              100%
            </h1>
            <h2 className="text-[18px] font-bold leading-[2.5] text-center text-[#545981]">
              SUCCESS RATE
            </h2>
          </div>
          <div className="about_success mt-5 lg:mt-0 md:mt-0">
            <h1 className="text-[#262626] text-[38px] text-center leading-[16px] font-extralight tracking-[0px]">
              1,000+
            </h1>
            <h2 className="text-[18px] font-bold leading-[2.5] text-center text-[#545981]">
              HOURS OF WORK
            </h2>
          </div>
          <div className="about_success mt-5 lg:mt-0 md:mt-0">
            <h1 className="text-[#262626] text-[38px] text-center leading-[16px] font-extralight tracking-[0px]">
              350+
            </h1>
            <h2 className="text-[18px] font-bold leading-[2.5] text-center text-[#545981]">
              HAPPY CLIENTS
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
