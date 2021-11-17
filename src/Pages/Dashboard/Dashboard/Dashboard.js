import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
  Row,
} from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import "../Dashboard.css";
import { FaSignOutAlt, FaUserCircle, FaArrowLeft } from "react-icons/fa";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  NavLink,
} from "react-router-dom";
import DashboardHome from "../DashboardHome/DashboardHome";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AddReview from "../AddReview/AddReview";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";

const Dashboard = () => {
  const { user, logout, admin } = useAuth();
  let { path, url } = useRouteMatch();

  return (
    <Container className="bg-light p-2" fluid>
      {/* top nav row */}
      <Row className="bg-white mb-2 d-md-none">
        <Col sm={12}>
          <Navbar expand={false}>
            <Container fluid>
              <Navbar.Toggle
                aria-controls="offcanvasNavbar"
                className="ms-auto"
              />
              <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="start"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id="offcanvasNavbarLabel">
                    Moto<span className="text-danger">Maze</span>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <NavLink
                      to="/"
                      style={{ color: "#000", textDecoration: "none" }}
                      className="mb-2"
                    >
                      Homepage
                    </NavLink>

                    {admin && (
                      <Nav>
                        <NavLink
                          to={`${url}/makeAdmin`}
                          style={{ color: "#000", textDecoration: "none" }}
                          activeStyle={{ color: "crimson", fontWeight: "bold" }}
                          className="mb-2"
                        >
                          Make Admin
                        </NavLink>
                      </Nav>
                    )}

                    {!admin && (
                      <Nav>
                        <NavLink
                          to={`${url}/addReview`}
                          style={{ color: "#000", textDecoration: "none" }}
                          activeStyle={{ color: "crimson", fontWeight: "bold" }}
                          className="mb-2"
                        >
                          Add Review
                        </NavLink>
                      </Nav>
                    )}

                    <div>
                      <Button
                        className="bg-transparent text-danger border-0 lgBtn p-0"
                        onClick={logout}
                      >
                        <FaSignOutAlt /> <span>Logout</span>
                      </Button>
                    </div>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        </Col>
      </Row>

      <Row>
        <Col
          md={3}
          lg={2}
          className="bg-danger shadow-sm d-none d-md-block sidebar"
        >
          <div className="d-flex flex-column justify-content-between align-items-center py-3">
            <div className="up"></div>
            <div className="mid">
              <ul className="navigationUl">
                <li>
                  <NavLink to="/" style={{ color: "#fff" }}>
                    <FaArrowLeft className="me-2" />{" "}
                    <span className="align-middle">Back</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`${url}/addReview`}
                    style={{ color: "#fff" }}
                    activeStyle={{ color: "#000", fontWeight: "bold" }}
                  >
                    Add Review
                  </NavLink>
                </li>
                {admin && (
                  <>
                    <li>
                      <NavLink
                        to={`${url}/makeAdmin`}
                        style={{ color: "#fff" }}
                        activeStyle={{ color: "#000", fontWeight: "bold" }}
                      >
                        Make Admin
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <div>
              <Button
                className="bg-transparent text-white border-0 lgBtn"
                onClick={logout}
              >
                <FaSignOutAlt /> <span>Logout</span>
              </Button>
            </div>
          </div>
        </Col>
        <div className="d-flex justify-content-end">
          <Col md={9} lg={10} xs={12}>
            <div className="mb-2 bg-white shadow-sm py-3 d-flex justify-content-between align-items-center">
              <p className="text-danger ms-3 lh-1 user">
                <span className="me-2 align-middle lh-1">Dashboard</span>
              </p>
              <p className="text-danger me-3 lh-1 user">
                <span className="me-2 align-middle lh-1">
                  {user?.displayName}
                </span>
                <FaUserCircle className="fs-5" />
              </p>
            </div>

            <div className="bg-white shadow-sm mainContainer">
              <Switch>
                <Route exact path={path}>
                  <DashboardHome></DashboardHome>
                </Route>
                <AdminRoute path={`${path}/makeAdmin`}>
                  <MakeAdmin></MakeAdmin>
                </AdminRoute>
                <Route path={`${path}/addReview`}>
                  <AddReview></AddReview>
                </Route>
              </Switch>
            </div>
          </Col>
        </div>
      </Row>
    </Container>
  );
};

export default Dashboard;
