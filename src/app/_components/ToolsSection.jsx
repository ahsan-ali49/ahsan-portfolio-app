import Image from "next/image";
import React from "react";

import html5 from "/public/icons/html5-icon.svg";
import css3 from "/public/icons/css3-icon.svg";
import bootstrap from "/public/icons/bootstrap-icon.svg";
import javascript from "/public/icons/javascript-icon.svg";
import react from "/public/icons/react-icon.svg";
import tailwind from "/public/icons/tailwind-icon.svg";
import express from "/public/icons/express-icon.svg";
import github from "/public/icons/github-icon.svg";

const tools = [
  { imgSrc: html5, name: "HTML5" },
  { imgSrc: css3, name: "CSS3" },
  { imgSrc: javascript, name: "JavaScript" },
  { imgSrc: react, name: "React" },
  { imgSrc: bootstrap, name: "Bootstrap" },
  { imgSrc: tailwind, name: "Tailwind" },
  { imgSrc: express, name: "Express.js" },
  { imgSrc: github, name: "GitHub" },
];

const ToolsSection = () => {
  return (
    <section className="md:px-[40px]">
      <h2 className="suisse-white-26-500">
        Tools & Technologies Powering My Creations
      </h2>
      <div className="flex gap-5 flex-wrap justify-between mx-auto md:pt-[30px] md:pb-[50px]">
        {tools.map((tool, index) => (
          //         <div key={index} className="md:w-[49%] services-box">
          // <div className="h-full services-box-inner w-full"></div>
          <div key={index} className="skills-box w-[23.5%]">
            <div className="flex flex-col justify-center items-center gap-2.5 h-full skills-box-inner w-full">
              <Image
                src={tool.imgSrc}
                alt={tool.name}
                className="w-12 h-12 object-contain"
              />
              <p className="inter-white-18-400 opacity-50">{tool.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;
