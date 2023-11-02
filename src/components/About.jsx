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
    <div style={mystyle} className="container-fluid p-5">
      <div className="row justify-content-center">
        <img
          style={imageStyles}
          className="rounded-circle border border-5 border-warning"
          src={dpimage}
          alt="asdf"
        />
      </div>
    </div>
  );
};
