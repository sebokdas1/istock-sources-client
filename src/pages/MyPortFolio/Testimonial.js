import React from "react";
import Clients from "../../Assets/Clients.jpg";
import Roosbrown from "../../Assets/rossbrown.jpg";
import Ryan from "../../Assets/ryangladhill.jpg";
import "./MyPortfolio.css";

const Testimonial = () => {
  return (
    <section className="mt-6">
      <div className="p-[10px]">
        <h1 className="text-[#735BE2] text-[55px] font-bold text-center leading-none">
          Testimonial
        </h1>
        <h2 className="text-[#262626] text-[22px] font-bold text-center leading-none">
          What Clients Say
        </h2>
      </div>
      <div className="lg:grid grid-cols-3 gap-5 mt-[35px]">
        <div className="psdToHtml text-center">
          <p className="font-light leading-[1.6em] mb-[15px]">
            Very experienced and super fast. Weren't able to get one thing done
            but not his fault. I will definitely use him again. Very nice guy!
          </p>
          <div className="flex items-center justify-center gap-4">
            <img className="rounded-[50px]" src={Clients} alt="" />
            <div>
              <h2 className="text-[#735BE2] text-[18px] font-semibold">
                mbdevboston
              </h2>
              <h2 className="text-[#735BE2] text-[20px] font-bold">Designer</h2>
            </div>
          </div>
        </div>
        <div className="psdToHtml text-center mt-6 lg:mt-0">
          <p className="font-light leading-[1.6em] mb-[15px]">
            Great experience, highly recommend. Worked through all my questions
            with me and was very timely in his responsiveness.
          </p>
          <div className="flex items-center justify-center gap-4">
            <img className="rounded-[50px]" src={Roosbrown} alt="" />
            <div>
              <h2 className="text-[#735BE2] text-[18px] font-semibold">
                rossbrown
              </h2>
              <h2 className="text-[#735BE2] text-[20px] font-bold">Manager</h2>
            </div>
          </div>
        </div>
        <div className="psdToHtml text-center mt-6 lg:mt-0">
          <p className="font-light leading-[1.6em] mb-[15px]">
            He was excellent to work with, and he did a great job fixing osme
            issues that we had
          </p>
          <div className="flex items-center justify-center gap-4">
            <img className="rounded-[50px]" src={Ryan} alt="" />
            <div>
              <h2 className="text-[#735BE2] text-[18px] font-semibold">
                ryangladhill
              </h2>
              <h2 className="text-[#735BE2] text-[20px] font-bold">Manager</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
