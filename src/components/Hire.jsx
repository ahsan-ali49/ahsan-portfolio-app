import { Button } from "react-bootstrap";

export const HireMe = () => {
  return (
    <div className="hire-me bg-black p-5 d-flex flex-column align-items-center text-white">
      <h1 className="fw-bold">Hire Me For Your Next Project</h1>
      <Button
        className="btn-lg mt-5 rounded-0 border border-2 border-white text-white"
        variant="transparent"
      >
        HIRE ME!
      </Button>
    </div>
  );
};
