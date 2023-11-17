import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  const styles = {
    backgroundColor: "black",
    color: "white",
  };
  return (
    <Navbar style={styles} expand="lg p-3" className="navbar-dark">
      <Container>
        <Navbar.Brand className="fw-bold" href="#home">
          AHSAN
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="text-white">
              HOME
            </Nav.Link>
            <Nav.Link href="#about" className="text-white">
              ABOUT
            </Nav.Link>
            <Nav.Link href="#projects" className="text-white">
              PROJECTS
            </Nav.Link>
            <Nav.Link href="#reviews" className="text-white">
              REVIEWS
            </Nav.Link>
            <Nav.Link href="#reviews" className="text-white">
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
