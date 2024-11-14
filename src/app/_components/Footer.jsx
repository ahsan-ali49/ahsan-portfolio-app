import React from "react";
import linkedin from "/public/icons/linkedin.svg";
import x from "/public/icons/x.svg";
import facebook from "/public/icons/facebook.svg";
import instagram from "/public/icons/instagram.svg";
import github from "/public/icons/github.svg";
import Image from "next/image";
// FaXing, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <h3 className="text-white-32-500 mb-4">
            Let's Connect and Collaborate
          </h3>
          <p className="inter-white-20-400 opacity-50 mb-4">
            Reach out to discuss your project or ideas. I'm here to provide
            support and turn your vision into reality.
          </p>
          <div className="flex space-x-4 text-gray-500">
            <a href="#" aria-label="LinkedIn" className="hover:text-white">
              {/* <FaLinkedin size={24} /> */}
              <Image src={linkedin} alt="linkedin" />
            </a>
            <a href="#" aria-label="Xing" className="hover:text-white">
              <Image src={x} alt="x" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white">
              <Image src={instagram} alt="instagram" />
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-white">
              {/* <FaGithub size={24} /> */}
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h4 className="inter-white-20-500 mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white">
                Projects
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white">
                Services
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h4 className="inter-white-20-500 mb-4">Get in touch</h4>
          <ul className="space-y-2">
            <li>
              <a href="mailto:ahsanshah@gmail.com" className="hover:text-white">
                ahsanshah@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+1234567890" className="hover:text-white">
                +123-456-7890
              </a>
            </li>
            <li>123 Innovation Drive, Tech City, Country</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 w-full">
        <p className="inter-white-18-400 opacity-50">
          © 2024, All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
