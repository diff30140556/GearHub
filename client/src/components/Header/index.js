import React, { useEffect } from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Cart from "../Cart/index";
import "./style.css";
import Link from "antd/es/typography/Link";
import Auth from "../../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_CATEGORIES } from "../../utils/queries";
// import { useStoreContext } from "../../utils/GlobalState";

function Header() {
  const handleLogOut = () => {
    Auth.logout();
  };

  // const [state, dispatch] = useStoreContext();
  const { loading, data } = useQuery(QUERY_ALL_CATEGORIES);

  // useEffect(() => {
  //   if (!loading) {
  //     console.log(data.getAllCategories[0].product)
  //   }
  // }, [data, loading]);

  function getLaptops() {
    if (!loading) {
      return data.getAllCategories[0].product;
    }
  }
  function getHeadsets() {
    if (!loading) {
      return data.getAllCategories[1].product;
    }
  }
  function getGraphics() {
    if (!loading) {
      return data.getAllCategories[2].product;
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
                        <h3 className="category-title">Laptop</h3>
                        <ul className="category-list">
                          {getLaptops().map((laptop) => (
                            <li key={laptop._id}>
                              <LinkContainer to={`/product/${laptop._id}`}>
                                <NavDropdown.Item>
                                  {laptop.name}
                                </NavDropdown.Item>
                              </LinkContainer>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="category-box">
                        <h3 className="category-title">Headphone</h3>
                        <ul className="category-list">
                          {getHeadsets().map((headset) => (
                            <li key={headset._id}>
                              <LinkContainer to={`/product/${headset._id}`}>
                                <NavDropdown.Item>
                                  {headset.name}
                                </NavDropdown.Item>
                              </LinkContainer>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="category-box">
                        <h3 className="category-title">Graphics Card</h3>
                        <ul className="category-list">
                          {getGraphics().map((graphics) => (
                            <li key={graphics._id}>
                              <LinkContainer to={`/product/${graphics._id}`}>
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
              <Nav.Link href="#pricing">Support</Nav.Link>
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
