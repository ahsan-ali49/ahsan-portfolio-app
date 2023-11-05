import dpimage from "./dp.JPG";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { Button } from "react-bootstrap";

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
          alt="my display"
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
          <div className="row mt-5">
            <div className="col">
              <LocationOnIcon className="border border-1 border-dark rounded-circle p-1 float-clear" />
              <span> Location : SIBA, Sukkur, Pakistan.</span>
            </div>
            <div className="col">
              <CalendarMonthIcon className="border border-1 border-dark rounded-circle p-1" />
              <span> Age : 32</span>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col">
              <LocalPhoneIcon className="border border-1 border-dark rounded-circle p-1" />
              <span> Phone : +92-3163319605</span>
            </div>
            <div className="col">
              <EmailIcon className="border border-1 border-dark rounded-circle p-1" />
              <span> Email : ahsan.shah330@gmail.com</span>
            </div>
          </div>
          <Button className="btn-lg mt-5 bg-dark rounded-0">DOWNLOAD CV</Button>
        </div>
        <div className="col">Hello2</div>
      </div>
    </div>
  );
};
