import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user1, loading1, error1] = useAuthState(auth);
  const navigate = useNavigate();
  const handleLogOut = () => {
    signOut(auth);
    navigate("/");
  };

  return (
    <div className="sticky-top">
      <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" href="#home" className="text-warning">
            Furniture Palace
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/otherservices">
                Other Services
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About Us
              </Nav.Link>
            </Nav>
            <Nav>
              {user1 ? (
                <button className="btn btn-transparent" onClick={handleLogOut}>
                  Logout
                </button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
              <Nav.Link as={Link} to="/register">
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
