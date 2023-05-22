import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Cart from "../Cart/index";
import "./style.css";
import Link from "antd/es/typography/Link";
import Auth from "../../utils/auth";

function Header() {
  const handleLogOut = () => {
    Auth.logout();
  };

  return (
    <header className="fixed-top">
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>GearHub</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav navbarScroll" />
          <Navbar.Collapse id="responsive-navbar-nav navbarScroll">
            <Nav className="ms-md-5" navbarScroll>
              <NavDropdown
                title="Products"
                id="collasible-nav-dropdown navbarScrollingDropdown"
              >
                <Container>
                  <div className="drop-down-section d-md-flex">
                    <div className="category-box">
                      <h3 className="category-title">Laptop</h3>
                      <ul className="category-list">
                        <li>
                          <LinkContainer to="/laptop">
                            <NavDropdown.Item>Action</NavDropdown.Item>
                          </LinkContainer>
                        </li>
                        <li>
                          <NavDropdown.Item href="#action/3.2">
                            Another action
                          </NavDropdown.Item>
                        </li>
                        <li>
                          <NavDropdown.Item href="#action/3.3">
                            Something
                          </NavDropdown.Item>
                        </li>
                        <li>
                          <NavDropdown.Item href="#action/3.4">
                            Separated link
                          </NavDropdown.Item>
                        </li>
                      </ul>
                    </div>
                    <div className="category-box">
                      <h3 className="category-title">Headphone</h3>
                      <ul className="category-list">
                        <li>
                          <LinkContainer to="/headphone">
                            <NavDropdown.Item>Action</NavDropdown.Item>
                          </LinkContainer>
                        </li>
                        <li>
                          <NavDropdown.Item href="#action/3.2">
                            Another action
                          </NavDropdown.Item>
                        </li>
                        <li>
                          <NavDropdown.Item href="#action/3.3">
                            Something
                          </NavDropdown.Item>
                        </li>
                        <li>
                          <NavDropdown.Item href="#action/3.4">
                            Separated link
                          </NavDropdown.Item>
                        </li>
                      </ul>
                    </div>
                    <div className="category-box">
                      <h3 className="category-title">Graphics Card</h3>
                      <ul className="category-list">
                        <li>
                          <LinkContainer to="/graphic_cards">
                            <NavDropdown.Item>Action</NavDropdown.Item>
                          </LinkContainer>
                        </li>
                        <li>
                          <NavDropdown.Item href="#action/3.2">
                            Another action
                          </NavDropdown.Item>
                        </li>
                        <li>
                          <NavDropdown.Item href="#action/3.3">
                            Something
                          </NavDropdown.Item>
                        </li>
                        <li>
                          <NavDropdown.Item href="#action/3.4">
                            Separated link
                          </NavDropdown.Item>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Container>
              </NavDropdown>

              <Nav.Link href="#features">About</Nav.Link>
              <Nav.Link href="#pricing">Support</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <Cart />
              </Nav.Link>
              {Auth.loggedIn() ? (
                <LinkContainer to="/profile">
                  <Nav.Link>My Account</Nav.Link>
                </LinkContainer>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
              )}
              {Auth.loggedIn() ? (
                <Nav.Link onClick={handleLogOut}>Log Out</Nav.Link>
              ) : null}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
export default Header;
