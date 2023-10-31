import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">AHSAN</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#link">ABOUT</Nav.Link>
            <Nav.Link href="#link">PROJECTS</Nav.Link>
            <Nav.Link href="#link">BLOG</Nav.Link>
            <Nav.Link href="#link">REVIEWS</Nav.Link>
            <NavDropdown title="SERVICES" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Frontend</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Backend</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Data Analytics
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Full Stack</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
