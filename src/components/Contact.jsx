import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

function Contact() {
  return (
    <div className="container-fluid p-5">
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div
          className="mb-2"
          style={{ flex: 1, height: "3px", backgroundColor: "black" }}
        />
        <div>
          <h1 className="text-center text-dark">&nbsp; Get In touch &nbsp;</h1>
        </div>
        <div
          className="mb-2"
          style={{ flex: 1, height: "3px", backgroundColor: "black" }}
        />
      </div>
      <Form className="pt-5">
        <div className="row">
          <div className="col">
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                type="text"
                placeholder="Name"
                className="custom-text-field rounded-0"
              />
            </Form.Group>
          </div>
          <div className="col">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                className="custom-text-field rounded-0"
              />
            </Form.Group>
          </div>
        </div>
        <div className="row">
          <div className="col col-lg-12">
            <Form.Group className="mb-3 mt-5" controlId="formBasicName">
              <Form.Control
                type="text"
                placeholder="How may I help you?"
                className="custom-text-field rounded-0"
              />
            </Form.Group>
          </div>
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

      {/* <div className="row pt-5 d-flex justify-content-center">
        <Form className="pt-5">
          <div className="row w-75">
            <div className="col col-lg-6 col-sm-12">
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                  type="text"
                  placeholder="Name"
                  className="custom-text-field rounded-0"
                />
              </Form.Group>
            </div>
            <div className="col col-lg-6 col-sm-12">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  className="custom-text-field rounded-0"
                />
              </Form.Group>
            </div>
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
      </div> */}
    </div>
  );
}

export default Contact;
