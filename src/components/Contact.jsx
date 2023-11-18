import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

function Contact() {
  return (
    <div className="container-fluid p-5">
      <div className="w-50 me-auto ms-auto d-flex align-items-center">
        <div
          className="mb-2"
          style={{ flex: 1, height: "3px", backgroundColor: "black" }}
        />
        <div>
          <h1 className="fw-bold text-center text-dark">
            &nbsp; Get In Touch &nbsp;
          </h1>
        </div>
        <div
          className="mb-2"
          style={{ flex: 1, height: "3px", backgroundColor: "black" }}
        />
      </div>
      <div className="row pt-5 d-flex justify-content-center">
        <Form className="pt-5 w-75">
          <div className="row">
            <Form.Group className="mb-3 w-50" controlId="formBasicName">
              <Form.Control
                type="text"
                placeholder="Name"
                className="custom-text-field rounded-0"
              />
            </Form.Group>
            <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                className="custom-text-field rounded-0"
              />
            </Form.Group>
          </div>
          <div className="row">
            <Form.Group className="mb-3 mt-5" controlId="formBasicName">
              <Form.Control
                type="text"
                placeholder="How may I help you?"
                className="custom-text-field rounded-0"
              />
            </Form.Group>
          </div>
          <div className="row">
            <Button
              className="btn-lg mt-5 me-auto ms-auto custom-hire-button rounded-0 w-25"
              variant="dark"
            >
              SEND MESSAGE
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
