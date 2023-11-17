import background_Image from "../assets/images/BackgroundImg.jpg";

export const HeroSection = () => {
  const mystyle = {
    height: "89vh",
    backgroundImage: `url(${background_Image})`,
  };
  const nameHeaderStyles = {
    fontSize: "4rem",
    paddingTop: "10%",
  };
  return (
    <div style={mystyle} className="text-center hero-section">
      <h1 style={nameHeaderStyles} className="text-white">
        Hi! I'm Ahsan Shah
      </h1>
      <h2 className="text-white">A Professional Web Developer.</h2>
    </div>
  );
};
