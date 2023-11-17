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
  return (
    <div style={bodyStyles} className="pt-5 pb-5">
      <div className="w-50 me-auto ms-auto d-flex align-items-center">
        <div
          className="mb-2"
          style={{ flex: 1, height: "3px", backgroundColor: "black" }}
        />
        <div>
          <h1 className="fw-bold text-center text-dark">
            &nbsp; Reviews &nbsp;
          </h1>
        </div>
        <div
          className="mb-2"
          style={{ flex: 1, height: "3px", backgroundColor: "black" }}
        />
      </div>

      {/* Cards Area */}
      <div className="row d-flex justify-content-center gap-5 pt-5">
        <Card className="text-center w-25 pt-5 rounded-0">
          <img
            style={imageStyles}
            className="rounded-circle border border-5 border-secondary me-auto ms-auto"
            src={project2}
            alt="my display"
          />
          <Card.Body>
            <Card.Text className="text-secondary">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Title>Fawad Khan</Card.Title>
            <Card.Text className="text-secondary">SENIOR DESIGNER</Card.Text>
          </Card.Body>
        </Card>

        {/* Card 2 */}
        <Card className="text-center w-25 pt-5 rounded-0">
          <img
            style={imageStyles}
            className="rounded-circle border border-5 border-secondary me-auto ms-auto"
            src={project2}
            alt="my display"
          />
          <Card.Body>
            <Card.Text className="text-secondary">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Title>Babar Azam</Card.Title>
            <Card.Text className="text-secondary">SENIOR ARTIST</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
