import React from "react";

const HeroSection = () => {
  return (
    <section className="md:pt-[60px] md:pb-5 md:px-[140px] md:mb-5">
      <div className="mx-auto">
        <h1 className="suisse-white-48-500 leading-tight">
          Hello{" "}
          <span role="img" aria-label="wave">
            👋
          </span>
          , I'm Ahsan – <br className="hidden md:block" />
          Crafting Creative Code!
        </h1>
        <p className="inter-white-20-400 opacity-50 md:w-1/2 mt-2.5">
          As a creative developer, I blend code and design to build unique,
          user-centric experiences. Let's turn your ideas into a dynamic and
          engaging digital reality!
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
