import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { DiGitBranch } from "react-icons/di";
import { FaGithubAlt } from "react-icons/fa";
import Doctors from "../../Assets/Doctors-Portal.jpg";
import Geair from "../../Assets/Geair.jpg";
import Istock from "../../Assets/Istock-Sources.jpg";
import "./MyPortfolio.css";

const Portfolio = () => {
  return (
    <section>
      <div className="p-[10px]">
        <h1 className="text-[#735BE2] text-[55px] font-bold text-center leading-none">
          Portfolio
        </h1>
        <h2 className="text-[#262626] text-[22px] font-bold text-center leading-none">
          Latest Projects
        </h2>
      </div>
      <div className="lg:flex gap-4 mt-[25px]">
        <div className="portfolio_projects">
          <img src={Geair} alt="" />
          <h1 className="text-[#735BE2] text-[12px] lg:text-[15px] font-semibold mt-2">
            FRONTEND
          </h1>
          <h1 className="text-[#262626] text-[16px] lg:text-[22px] font-bold leading-none">
            Air & car ticket booking
          </h1>
          <ul className="list-none flex justify-center items-center gap-3 lg:gap-10 mt-5 px-2 lg:px-0">
            <li>
              <a
                href="https://github.com/Promerea/geair-air"
                target="_blank"
                className="flex items-center gap-3 border border-gray-300 px-2  hover:bg-gray-600 hover:text-white"
              >
                <span className="text-[18px] font-medium">client</span>
                <span>
                  <DiGitBranch />
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://geair.netlify.app/"
                target="_blank"
                className="flex items-center gap-3 border border-gray-300 px-2  hover:bg-cyan-600 hover:text-white"
              >
                <span className="text-[18px] font-medium">live</span>
                <span>
                  <AiOutlineEye />
                </span>
              </a>
            </li>
            <li>
              <a className="flex items-center gap-3 border border-gray-300 px-2">
                <span className="text-[18px] font-medium">server</span>
                <span>
                  <FaGithubAlt />
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="portfolio_projects mt-6 lg:mt-0">
          <img src={Istock} alt="" />
          <h1 className="text-[#735BE2] text-[12px] lg:text-[15px] font-semibold mt-2">
            FULL STACK(MERN)
          </h1>
          <h1 className="text-[#262626] text-[16px] lg:text-[22px] font-bold leading-none">
            E-commerce web development
          </h1>
          <ul className="list-none flex justify-center items-center gap-3 lg:gap-10 mt-5 px-2 lg:px-0">
            <li>
              <a
                href="https://github.com/sebokdas1/istock-sources-client"
                target="_blank"
                className="flex items-center gap-3 border border-gray-300 px-2  hover:bg-gray-600 hover:text-white"
              >
                <span className="text-[18px] font-medium">client</span>
                <span>
                  <DiGitBranch />
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://istock-sources.web.app/"
                target="_blank"
                className="flex items-center gap-3 border border-gray-300 px-2  hover:bg-cyan-600 hover:text-white"
              >
                <span className="text-[18px] font-medium">live</span>
                <span>
                  <AiOutlineEye />
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/sebokdas1/istock-sources-server"
                target="_blank"
                className="flex items-center gap-3 border border-gray-300 px-2  hover:bg-gray-600 hover:text-white"
              >
                <span className="text-[18px] font-medium">server</span>
                <span>
                  <FaGithubAlt />
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="portfolio_projects mt-6 lg:mt-0">
          <img src={Doctors} alt="" />
          <h1 className="text-[#735BE2] text-[12px] lg:text-[15px] font-semibold mt-2">
            MERN STACK
          </h1>
          <h1 className="text-[#262626] text-[16px] lg:text-[22px] font-bold leading-none">
            Doctors appoinment systems
          </h1>
          <ul className="list-none flex justify-center items-center gap-3 lg:gap-10 mt-5 px-2 lg:px-0">
            <li>
              <a
                href="https://github.com/sebokdas1/doctors-portal-client"
                target="_blank"
                className="flex items-center gap-3 border border-gray-300 px-2 hover:bg-gray-600 hover:text-white"
              >
                <span className="text-[18px] font-medium">client</span>
                <span>
                  <DiGitBranch />
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://doctors-portal-f39f1.web.app/"
                target="_blank"
                className="flex items-center gap-3 border border-gray-300 px-2 hover:bg-cyan-600 hover:text-white"
              >
                <span className="text-[18px] font-medium">live</span>
                <span>
                  <AiOutlineEye />
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/sebokdas1/doctors-portal-server"
                target="_blank"
                className="flex items-center gap-3 border border-gray-300 px-2 hover:bg-gray-600 hover:text-white"
              >
                <span className="text-[18px] font-medium">server</span>
                <span>
                  <FaGithubAlt />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
