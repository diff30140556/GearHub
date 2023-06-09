import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Cart from "../Cart/index";
import "./style.css";
import Auth from "../../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_CATEGORIES } from "../../utils/queries";

function Header() {
  const handleLogOut = () => {
    Auth.logout();
  };

  const { loading, data } = useQuery(QUERY_ALL_CATEGORIES);

  function getLaptops() {
    if (!loading) {
      return data.getAllCategories[0];
    }
  }
  function getHeadsets() {
    if (!loading) {
      return data.getAllCategories[1];
    }
  }
  function getGraphics() {
    if (!loading) {
      return data.getAllCategories[2];
    }
  }

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
                  {!loading ? (
                    <div className="drop-down-section d-md-flex py-2 px-3">
                      <div className="category-box">
                        <h3 className="category-title">{getLaptops().name}</h3>
                        <ul className="category-list">
                          {getLaptops().product.map((laptop) => (
                            <li key={laptop._id}>
                              <LinkContainer to={`/product/${laptop._id}/${getLaptops()._id}`}>
                                <NavDropdown.Item>
                                  {laptop.name}
                                </NavDropdown.Item>
                              </LinkContainer>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="category-box">
                        <h3 className="category-title">{getHeadsets().name}</h3>
                        <ul className="category-list">
                          {getHeadsets().product.map((headset) => (
                            <li key={headset._id}>
                              <LinkContainer to={`/product/${headset._id}/${getHeadsets()._id}`}>
                                <NavDropdown.Item>
                                  {headset.name}
                                </NavDropdown.Item>
                              </LinkContainer>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="category-box">
                        <h3 className="category-title">{getGraphics().name}</h3>
                        <ul className="category-list">
                          {getGraphics().product.map((graphics) => (
                            <li key={graphics._id}>
                              <LinkContainer to={`/product/${graphics._id}/${getGraphics()._id}`}>
                                <NavDropdown.Item>
                                  {graphics.name}
                                </NavDropdown.Item>
                              </LinkContainer>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : null}
                </Container>
              </NavDropdown>

              <Nav.Link href="/about_us">About</Nav.Link>
              <Nav.Link href="/support">Support</Nav.Link>
            </Nav>
            <Nav>
              <Cart />
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
