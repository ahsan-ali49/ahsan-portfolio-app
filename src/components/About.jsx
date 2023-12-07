import dpimage from "./dp.JPG";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { Button } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";

export const About = () => {
  const imageStyles = {
    width: "250px",
    height: "250px",
    objectFit: "cover",
    padding: "0",
  };
  const courses = [
    {
      progressAt: 80,
      name: "HTML/CSS3",
    },
    {
      progressAt: 70,
      name: "JAVASCRIPT",
    },
    {
      progressAt: 40,
      name: "REACTJS",
    },
    {
      progressAt: 60,
      name: "NODEJS",
    },
  ];

  const progressBars = courses.map((course) => (
    <div>
      <p className="mb-0">{course.name}</p>
      <ProgressBar
        now={course.progressAt}
        label={`${course.progressAt}%`}
        variant="warning"
      />
    </div>
  ));

  return (
    <div className="container-fluid pb-5">
      <div className="row p-5">
        <div className="col d-flex justify-content-center">
          <img
            style={imageStyles}
            className="rounded-circle border border-5 border-warning"
            src={dpimage}
            alt="my display"
          />
        </div>
      </div>
      <div className="row d-flex flex-row-reverse">
        <div className="col pt-5">{progressBars}</div>
        <div className="col-lg-6 col-sm-12 pt-5">
          <h2>Hi There! I'm Ahsan Shah</h2>
          <p className="text-secondary">
            I'm 22 years old creative web designer based in Pakistan,
            specializing in User Interface Design and Development. I build
            clean, appealing, and functional interfaces which comply with the
            latest web standards.
          </p>
          <div className="row mt-5">
            <div className="col-lg-6 col-sm-12">
              <LocationOnIcon className="border border-1 border-dark rounded-circle p-1 float-clear" />
              <span> Location : SIBA, Sukkur, Pakistan.</span>
            </div>
            <div className="col-lg-6 col-sm-12">
              <CalendarMonthIcon className="border border-1 border-dark rounded-circle p-1" />
              <span> Age : 22</span>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-lg-6 col-sm-12">
              <LocalPhoneIcon className="border border-1 border-dark rounded-circle p-1" />
              <span> Phone : +92-3163319605</span>
            </div>
            <div className="col-lg-6 col-sm-12">
              <EmailIcon className="border border-1 border-dark rounded-circle p-1" />
              <span> Email : ahsan.shah330@gmail.com</span>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <Button
              className="btn-md text-nowrap border border-2 border-black custom-button mt-5 rounded-0"
              variant="dark"
              style={{ width: "100%", maxWidth: "150px" }}
            >
              DOWNLOAD CV
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
