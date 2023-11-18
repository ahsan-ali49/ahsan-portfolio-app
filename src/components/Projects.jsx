import Project1 from "../assets/images/Project1.jpg";
import Project2 from "../assets/images/Project2.jpg";
import { Card } from "react-bootstrap";

export const Projects = () => {
  const imageStyles = {
    height: "150px",
    objectFit: "cover",
    padding: "0",
  };

  const cardsData = [
    {
      imgSrc: Project1,
      alt: "calculator project",
      name: "Calculator",
    },
    {
      imgSrc: Project2,
      alt: "admin dashboard project",
      name: "Admin Dashboard",
    },
    {
      imgSrc: Project1,
      alt: "Etch-e-sketch project",
      name: "Etch-E-Sketch",
    },
  ];

  const cards = cardsData.map((card) => (
    <div className="col col-lg-4 col-sm-12 mb-3">
      <Card className="text-center p-0 rounded-0">
        <img
          style={imageStyles}
          className="border border-5 border-secondary"
          src={card.imgSrc}
          alt={card.alt}
        />
        <Card.Body>
          <Card.Title>{card.name}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  ));

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
      <div className="row p-5 d-flex justify-content-between">{cards}</div>
    </div>
  );
};
