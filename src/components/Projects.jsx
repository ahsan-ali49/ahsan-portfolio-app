import project1 from "../assets/images/Project1.png";

export const Projects = () => {
  const imgPhoto = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };
  return (
    <div className="p-5">
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div
          className="mb-2"
          style={{ flex: 1, height: "3px", backgroundColor: "black" }}
        />
        <div>
          <h1 className="text-center text-dark font-weight-bold">
            &nbsp; Recent Works &nbsp;
          </h1>
        </div>
        <div
          className="mb-2"
          style={{ flex: 1, height: "3px", backgroundColor: "black" }}
        />
      </div>
      <div className="row p-5 d-flex justify-content-between">
        <div className="w-25 h-25 p-0">
          <img style={imgPhoto} src={project1} alt="project1" />
        </div>
        <div className="w-25 h-25 p-0">
          <img style={imgPhoto} src={project1} alt="project2" />
        </div>
        <div className="w-25 h-25 p-0">
          <img style={imgPhoto} src={project1} alt="project3" />
        </div>
      </div>
    </div>
  );
};
