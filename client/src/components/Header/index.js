import React, { useEffect } from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Cart from "../Cart/index";
import "./style.css";
// import Link from "antd/es/typography/Link";
import { Link } from 'react-router-dom';
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
          <Link to="/">
            <Navbar.Brand>GearHub</Navbar.Brand>
          </Link>
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
                              <Link
                                to={`/product/${laptop._id}/${
                                  getLaptops()._id
                                }`}
                              >
                                <NavDropdown.Item>
                                  {laptop.name}
                                </NavDropdown.Item>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="category-box">
                        <h3 className="category-title">{getHeadsets().name}</h3>
                        <ul className="category-list">
                          {getHeadsets().product.map((headset) => (
                            <li key={headset._id}>
                              <Link
                                to={`/product/${headset._id}/${
                                  getHeadsets()._id
                                }`}
                              >
                                <NavDropdown.Item>
                                  {headset.name}
                                </NavDropdown.Item>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="category-box">
                        <h3 className="category-title">{getGraphics().name}</h3>
                        <ul className="category-list">
                          {getGraphics().product.map((graphics) => (
                            <li key={graphics._id}>
                              <Link
                                to={`/product/${graphics._id}/${
                                  getGraphics()._id
                                }`}
                              >
                                <NavDropdown.Item>
                                  {graphics.name}
                                </NavDropdown.Item>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : null}
                </Container>
              </NavDropdown>

              <Link to="/about_us">
                <Nav.Link>About</Nav.Link>
              </Link>
              <Link to="/support">
                <Nav.Link>Support</Nav.Link>
              </Link>
            </Nav>
            <Nav>
              <Cart />
              {Auth.loggedIn() ? (
                <Link to="/profile">
                  <Nav.Link>My Account</Nav.Link>
                </Link>
              ) : (
                <Link to="/login">
                  <Nav.Link>Login</Nav.Link>
                </Link>
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
