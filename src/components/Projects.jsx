import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import project1 from "./project1.png";
import project2 from "./project2.png";

export const Projects = () => {
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
      <div className="mt-3 d-flex justify-content-center">
        <Pagination>
          <Pagination.Item className="rounded me-5 border border-0 border-white">
            <span className="text-black">ALL</span>
          </Pagination.Item>
          <Pagination.Item className="rounded me-5 border border-0 border-white">
            <span className="text-black">WEB DESIGN</span>
          </Pagination.Item>
          <Pagination.Item className="rounded me-5 border border-0 border-white">
            <span className="text-black">APPLICATION</span>
          </Pagination.Item>
          <Pagination.Item className="rounded me-5 border border-0 border-white">
            <span className="text-black">DEVELOPMENT</span>
          </Pagination.Item>
        </Pagination>
      </div>
      <div className="row ps-5 pe-5 d-flex justify-content-between">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={project2} />
          <Card.Body>
            <Card.Title>Admin Dashboard</Card.Title>
            <Card.Text>
              Digital Etch A Sketch: Recreating the classic toy's joy in a
              virtual experience—draw and erase with virtual knobs for a
              nostalgic creative burst.
            </Card.Text>
            <Button variant="dark">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={project2} />
          <Card.Body>
            <Card.Title>To do Task</Card.Title>
            <Card.Text>
              Digital Etch A Sketch: Recreating the classic toy's joy in a
              virtual experience—draw and erase with virtual knobs for a
              nostalgic creative burst.
            </Card.Text>
            <Button variant="dark">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={project2} />
          <Card.Body>
            <Card.Title>Etch-e-Sketch</Card.Title>
            <Card.Text>
              Digital Etch A Sketch: Recreating the classic toy's joy in a
              virtual experience—draw and erase with virtual knobs for a
              nostalgic creative burst.
            </Card.Text>
            <Button variant="dark">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
