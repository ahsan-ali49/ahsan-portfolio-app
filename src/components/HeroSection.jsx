export const HeroSection = () => {
  const mystyle = {
    height: "89vh",
    backgroundColor: "goldenrod",
  };
  const nameHeaderStyles = {
    fontSize: "4rem",
    paddingTop: "10%",
  };
  return (
    <div style={mystyle} className="text-center hero-section">
      <h1 style={nameHeaderStyles}>Hi! I'm Ahsan Shah</h1>
      <h2>A Professional Web Developer.</h2>
    </div>
  );
};
