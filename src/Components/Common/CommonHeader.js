import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Common.css";
import { FaSignOutAlt, FaUserCircle, FaSignInAlt } from "react-icons/fa";

const CommonHeader = () => {
  const { user, logout, admin } = useAuth();
  return (
    <Navbar
      variant="dark"
      sticky="top"
      expand="lg"
      className="bg-dark align-middle py-3"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-middle fs-4">
          Moto<span className="text-danger">Maze</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav className="me-lg-3">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            {user?.email ? (
              admin ? (
                <Nav>
                  <Nav.Link as={Link} to="/">
                    Explore
                  </Nav.Link>
                  <Nav.Link as={Link} to="/dashboard">
                    Admin Dashboard
                  </Nav.Link>
                </Nav>
              ) : (
                <Nav>
                  <Nav.Link as={Link} to="/s">
                    Explore
                  </Nav.Link>
                  <Nav.Link as={Link} to="/dashboard">
                    Dashboard
                  </Nav.Link>
                </Nav>
              )
            ) : (
              <Nav>
                <Nav.Link as={Link} to="/">
                  Explore
                </Nav.Link>
              </Nav>
            )}
          </Nav>
          {user?.email && (
            <Navbar.Text>
              <p className="text-danger me-3 lh-1 user">
                <span className="me-2 align-middle lh-1">
                  {user?.displayName}
                </span>
                <FaUserCircle className="fs-5" />
              </p>
            </Navbar.Text>
          )}

          {user?.email ? (
            <Button
              className="bg-transparent text-white border-0 headerLogoutBtn"
              onClick={logout}
            >
              <FaSignOutAlt /> <span>Logout</span>
            </Button>
          ) : (
            <Nav.Link
              as={Link}
              className="custom-text-color1 p-0 headerLogoutBtn2"
              to="/login"
            >
              <FaSignInAlt /> Login
            </Nav.Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CommonHeader;
