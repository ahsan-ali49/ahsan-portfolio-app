import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <h1>AHSAN</h1>
        <div className="row">
          <FacebookRoundedIcon className="p-1 float-clear" fontSize="large" />
          <TwitterIcon className="p-1 float-clear" fontSize="large" />
          <GitHubIcon className="p-1 float-clear" fontSize="large" />
          <LinkedInIcon className="p-1 float-clear" fontSize="large" />
        </div>
      </div>
    </>
  );
};
