import { useState } from "react";
import { Offcanvas, Navbar, Nav, Container } from "react-bootstrap";
import SearchBar from "../business/SearchBar";
import SortSelector from "../business/SortSelector";

interface HeaderProps {
  showSearchBar?: boolean;
  showSortSelector?: boolean;
}

const Header = ({
  showSearchBar = true,
  showSortSelector = true,
}: HeaderProps) => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleNavbarToggle = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <Nav className="navbar bg-body-tertiary">
        <Container className="flex-nowrap">
          <button
            onClick={handleNavbarToggle}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="/offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {showSearchBar && <SearchBar />}
          {showSortSelector && <SortSelector />}

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
                <Nav.Link href="/posts">Home</Nav.Link>
                <Nav.Link href="/about-me">About</Nav.Link>
              </Navbar>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Nav>
    </>
  );
};

export default Header;
