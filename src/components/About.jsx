import dpimage from "./dp.JPG";
export const About = () => {
  const mystyle = {
    height: "80vh",
  };
  const imageStyles = {
    width: "250px",
    height: "250px",
    objectFit: "cover",
    padding: "0",
  };
  return (
    <div style={mystyle} className="container-fluid">
      <div className="row justify-content-center p-5">
        <img
          style={imageStyles}
          className="rounded-circle border border-5 border-warning"
          src={dpimage}
          alt="my display picture"
        />
      </div>
      <div style={mystyle} className="row">
        <div className="col ps-5">
          <h2>Hi There! I'm Ahsan Shah</h2>
          <p className="w-75 text-secondary">
            I'm 22 years old creative web designer based in Pakistan,
            specializing in User Interface Design and Development. I build
            clean, appealing, and functional interfaces which comply with the
            latest web standards.
          </p>
        </div>
        <div className="col">Hello2</div>
      </div>
    </div>
  );
};
