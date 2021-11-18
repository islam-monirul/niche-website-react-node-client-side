import React from "react";
import {
  Button,
  Col,
  Container,
  Nav,
  Navbar,
  Offcanvas,
  Row,
} from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import "../Dashboard.css";
import { FaSignOutAlt, FaUserCircle, FaArrowLeft } from "react-icons/fa";
import { Switch, Route, useRouteMatch, NavLink } from "react-router-dom";
import DashboardHome from "../DashboardHome/DashboardHome";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AddReview from "../AddReview/AddReview";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import AddProduct from "../AddProduct/AddProduct";
import ManageAllProducts from "../ManageAllProducts/ManageAllProducts";

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

                        <NavLink
                          to={`${url}/manageAllorders`}
                          style={{ color: "#000", textDecoration: "none" }}
                          activeStyle={{ color: "crimson", fontWeight: "bold" }}
                          className="mb-2"
                        >
                          Manage Orders
                        </NavLink>

                        <NavLink
                          to={`${url}/addProduct`}
                          style={{ color: "#000", textDecoration: "none" }}
                          activeStyle={{ color: "crimson", fontWeight: "bold" }}
                          className="mb-2"
                        >
                          Add Product
                        </NavLink>

                        <NavLink
                          to={`${url}/manageProducts`}
                          style={{ color: "#000", textDecoration: "none" }}
                          activeStyle={{ color: "crimson", fontWeight: "bold" }}
                          className="mb-2"
                        >
                          Manage Products
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
          className="bgSidebar shadow-sm d-none d-md-block sidebar"
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
                {!admin && (
                  <>
                    <li>
                      <NavLink
                        to={`${url}/addReview`}
                        style={{ color: "#fff" }}
                        activeStyle={{ color: "#000", fontWeight: "bold" }}
                      >
                        Add Review
                      </NavLink>
                    </li>
                  </>
                )}
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
                    <li>
                      <NavLink
                        to={`${url}/manageAllorders`}
                        style={{ color: "#fff" }}
                        activeStyle={{ color: "#000", fontWeight: "bold" }}
                      >
                        Manage Orders
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={`${url}/addProduct`}
                        style={{ color: "#fff" }}
                        activeStyle={{ color: "#000", fontWeight: "bold" }}
                      >
                        Add Product
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to={`${url}/manageProducts`}
                        style={{ color: "#fff" }}
                        activeStyle={{ color: "#000", fontWeight: "bold" }}
                      >
                        Manage Products
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

            <div className="bg-white shadow-sm d-flex align-items-center mainContainer">
              <Switch>
                <Route exact path={path}>
                  <DashboardHome></DashboardHome>
                </Route>
                <Route path={`${path}/addReview`}>
                  <AddReview></AddReview>
                </Route>

                <AdminRoute path={`${path}/makeAdmin`}>
                  <MakeAdmin></MakeAdmin>
                </AdminRoute>
                <AdminRoute path={`${path}/manageAllorders`}>
                  <ManageAllOrders></ManageAllOrders>
                </AdminRoute>
                <AdminRoute path={`${path}/manageProducts`}>
                  <ManageAllProducts></ManageAllProducts>
                </AdminRoute>
                <AdminRoute path={`${path}/addProduct`}>
                  <AddProduct></AddProduct>
                </AdminRoute>
              </Switch>
            </div>
          </Col>
        </div>
      </Row>
    </Container>
  );
};

export default Dashboard;
