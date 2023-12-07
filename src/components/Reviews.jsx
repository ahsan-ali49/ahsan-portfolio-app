import Card from "react-bootstrap/Card";
import project2 from "./project2.png";
export const Reviews = () => {
  const bodyStyles = {
    backgroundColor: "#f4f4f4",
  };
  const imageStyles = {
    width: "150px",
    height: "150px",
    objectFit: "cover",
    padding: "0",
  };
  const cardsData = [
    {
      imgSrc: project2,
      alt: "my display",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      name: "Fawad Khan",
      position: "SENIOR DESIGNER",
    },
    {
      imgSrc: project2,
      alt: "my display",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      name: "Babar Azam",
      position: "GOAT",
    },
  ];
  const cards = cardsData.map((card) => (
    <div className="col col-lg-6 col-sm-12 ps-5 pe-5">
      <Card className="text-center pt-3 mb-3 rounded-0">
        <img
          style={imageStyles}
          className="rounded-circle border border-5 border-secondary me-auto ms-auto"
          src={card.imgSrc}
          alt={card.alt}
        />
        <Card.Body>
          <Card.Text className="text-secondary">{card.text}</Card.Text>
          <Card.Title>{card.name}</Card.Title>
          <Card.Text className="text-secondary">{card.position}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  ));
  return (
    <div style={bodyStyles} className="pt-5 pb-5">
      <div
        className="ps-5 pe-5"
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div
          className="mb-2"
          style={{ flex: 1, height: "3px", backgroundColor: "black" }}
        />
        <div>
          <h1 className="text-center text-dark font-weight-bold">
            &nbsp; Reviews &nbsp;
          </h1>
        </div>
        <div
          className="mb-2"
          style={{ flex: 1, height: "3px", backgroundColor: "black" }}
        />
      </div>
      <div className="row pt-5 ps-5 pe-5">{cards}</div>
    </div>
  );
};
