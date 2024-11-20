import React from "react";

const AboutMe = () => {
  return (
    <section className="md:px-[140px] text-white pb-[50px]">
      <div>
        {/* About Me */}
        <div className="w-3/5">
          <h2 className="suisse-white-26-500 mb-[30px]">A little about me</h2>
          <p className="inter-white-18-400 opacity-50">
            I&apos;m Ahsan Shah, a creative developer passionate about turning
            ideas into engaging digital experiences. Starting in Karachi, my
            love for tech and design grew from building simple sites to
            developing complex applications.
          </p>
          <p className="inter-white-18-400 opacity-50 mt-4">
            I blend technical skill with design to create seamless,
            user-friendly solutions, always pushing boundaries to exceed
            expectations.
          </p>
        </div>

        {/* Work Experience */}
        <div className=" md:my-[50px]">
          <h3 className="suisse-white-26-500 md:mb-[30px]">Work Experience</h3>
          <div className="w-2/3 about-bar">
            <div className="flex md:gap-5">
              <h4 className="inter-white-20-600">
                Frontend Developer at TFG Solutions
              </h4>

              <p className="inter-white-20-500 opacity-50">
                May 2024 - Present
              </p>
            </div>
            <p className="inter-white-18-400 opacity-50">
              Over the span of the last 6 months, I have conceived and executed
              diverse projects across various sectors, honing my skills and
              expertise in frontend development.
            </p>
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="suisse-white-26-500 md:mb-[30px]">Education</h3>
          <div className="w-2/3 about-bar">
            <div className="flex md:gap-5">
              <h4 className="inter-white-20-600">
                Institute of Business Administration
              </h4>
              <p className="inter-white-20-500 opacity-50">2020 - 2024</p>
            </div>
            <p className="inter-white-18-400 opacity-50">
              Bachelors in Computer Science
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
