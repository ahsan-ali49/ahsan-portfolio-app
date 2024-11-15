import React from "react";
import raha from "/public/images/raha.png";
import Traer from "/public/images/Traer.png";

import Image from "next/image";

const projects = [
  {
    date: "May 2024",
    title: "Rahul Financials",
    description:
      "Our helpful resources, reliable managers, TurboTax-free, PreciseBooks, payroll and numerous annual reports are solid reasons to choose us. Grow your business with Rahul Financials.",
    imgSrc: raha,
  },
  {
    date: "Jan 2024",
    title: "Tover",
    description:
      "A commission-based app that revolutionizes package delivery by connecting senders with travelers.",
    imgSrc: Traer,
  },
];

const ProjectTimeline = () => {
  return (
    <section className="md:px-[140px] w-full">
      <div className="w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-row items-start gap-5 w-full md:mb-[50px]"
          >
            <div className="flex flex-col md:w-3/5">
              <Image
                src={project.imgSrc}
                alt={project.title}
                className="w-full md:mb-[30px]"
              />

              <h3 className="inter-white-20-600 mb-2">{project.title}</h3>
              <p className="inter-white-18-400 opacity-50">
                {project.description}
              </p>
            </div>
            <p className="suisse-white-26-500">{project.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectTimeline;
