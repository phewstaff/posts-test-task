import { FC, useState } from "react";
import {
  Offcanvas,
  Navbar,
  Nav,
  Container,
  Button,
  Image,
} from "react-bootstrap";
import SearchBar from "../business/SearchBar";
import SortSelector from "../business/SortSelector";
import { userImage } from "../../assets/const";

type Props = {
  showSearchBar?: boolean;
  showSortSelector?: boolean;
};

const Header: FC<Props> = ({
  showSearchBar = true,
  showSortSelector = true,
}) => {
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
              <Offcanvas.Title className="d-flex align-items-center">
                <Image className="w-25" src={userImage} roundedCircle />
                <div>
                  <h1>Magomed Naurbaev</h1>
                  <h6>naurbaev2020@yandex.ru</h6>
                </div>
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Navbar className="flex-column gap-3">
                <Nav.Link href="/posts" className="w-75">
                  <Button className="w-100" variant="light">
                    Posts
                  </Button>
                </Nav.Link>
                <Nav.Link className="w-75" href="/about-me">
                  <Button className="w-100" variant="light">
                    About me
                  </Button>
                </Nav.Link>
              </Navbar>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Nav>
    </>
  );
};

export default Header;
