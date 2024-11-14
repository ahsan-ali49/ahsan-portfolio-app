import React from "react";
import phone from "/public/icons/phone.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between md:px-[240px] md:pt-5">
      <h1 className="text-white-32-500">Portfolio</h1>
      <button className="white-black-button inter-black-18-500">
        <Image src={phone} alt="phone icon" />
        Get in touch
      </button>
    </div>
  );
};

export default Navbar;
