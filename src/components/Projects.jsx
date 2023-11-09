import Pagination from "react-bootstrap/Pagination";

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
          <h1 className="text-center text-dark">&nbsp; Recent Works &nbsp;</h1>
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
    </div>
  );
};
