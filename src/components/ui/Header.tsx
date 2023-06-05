import { useState } from "react";
import { Offcanvas, Navbar, Nav, Container } from "react-bootstrap";

const OffcanvasNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  const handleNavbarToggle = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <Nav className="navbar navbar-expand-lg bg-body-tertiary">
        <Container>
          <button
            onClick={handleNavbarToggle}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Offcanvas
            show={showNavbar}
            onHide={handleNavbarToggle}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas Navbar</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Navbar>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#services">Services</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Navbar>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Nav>
    </>
  );
};

export default OffcanvasNavbar;
