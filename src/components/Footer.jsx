import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-black d-flex flex-column align-items-center p-3 ">
        <h1 className="text-white">AHSAN</h1>

        <div className="row">
          <FacebookRoundedIcon
            className="p-1 m-2 float-clear text-light"
            fontSize="large"
          />
          <TwitterIcon
            className="p-1 m-2 float-clear text-light"
            fontSize="large"
          />
          <GitHubIcon
            className="p-1 m-2 float-clear text-light"
            fontSize="large"
          />
          <LinkedInIcon
            className="p-1 m-2 float-clear text-light"
            fontSize="large"
          />
        </div>
        <p className="text-white">
          Ahsan © 2023. All Right Reserved, By Yourstruly.
        </p>
      </div>
    </>
  );
};
