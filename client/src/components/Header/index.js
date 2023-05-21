import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import "./style.css";
import Link from "antd/es/typography/Link";

function Header() {
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
                          <NavDropdown.Item href="#action/3.1">
                            Action
                          </NavDropdown.Item>
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
                          <NavDropdown.Item href="#action/3.1">
                            Action
                          </NavDropdown.Item>
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
                          <NavDropdown.Item href="#action/3.1">
                            Action
                          </NavDropdown.Item>
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
                <Nav.Link href="#deets">Cart</Nav.Link>
              <LinkContainer to="/login">
                <Nav.Link>My Account</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
export default Header;
