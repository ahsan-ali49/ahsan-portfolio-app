import React from "react";
import serviceIcon1 from "/public/icons/serviceIcon1.png";
import serviceIcon2 from "/public/icons/serviceIcon2.png";
import serviceIcon3 from "/public/icons/serviceIcon3.png";
import serviceIcon4 from "/public/icons/serviceIcon4.png";
import Image from "next/image";

const services = [
  {
    icon: serviceIcon1,
    title: "Web Development",
    description:
      "Custom, high-performance websites that combine modern design with functionality, tailored to meet your specific needs.",
  },
  {
    icon: serviceIcon2,
    title: "Full-Stack Development",
    description:
      "End-to-end development services, covering both front-end and back-end, to create robust and scalable web applications.",
  },
  {
    icon: serviceIcon3,
    title: "E-Commerce Solutions",
    description:
      "Create and optimize E-Commerce platforms that offer a seamless shopping experience, from storefront design to payment integration.",
  },
  {
    icon: serviceIcon4,
    title: "Website Optimization",
    description:
      "Improve website performance, speed, and SEO to enhance user experience and ensure better visibility on search engines.",
  },
];

const ServicesSection = () => {
  return (
    <section className="md:mb-[50px] md:px-[140px]">
      <div className="flex flex-wrap md:gap-4 justify-between mx-auto">
        {services.map((service, index) => (
          <div key={index} className="md:w-[49%] services-box">
            <Image
              src={service.icon}
              alt={service.title}
              className="md:w-11 md:h-11"
            />
            <div className="">
              <h3 className="inter-white-20-600 md:mb-4">{service.title}</h3>
              <p className="inter-white-18-400 opacity-50">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
