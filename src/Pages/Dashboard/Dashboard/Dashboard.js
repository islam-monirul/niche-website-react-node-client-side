import React from "react";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import "../Dashboard.css";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
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

const Dashboard = () => {
  const { user, logout } = useAuth();
  let { path, url } = useRouteMatch();

  return (
    <Container className="bg-light p-2" fluid>
      {/* top nav row */}
      <Row className="d-md-none">
        <Col sm={12}>Nav</Col>
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
              <ul>
                <li>
                  <NavLink to={`${url}`} style={{ color: "#fff" }}>
                    Dashboard
                  </NavLink>
                </li>
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
                    to={`${url}/addReview`}
                    style={{ color: "#fff" }}
                    activeStyle={{ color: "#000", fontWeight: "bold" }}
                  >
                    Add an Review
                  </NavLink>
                </li>
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
                <Route path={`${path}/makeAdmin`}>
                  <MakeAdmin></MakeAdmin>
                </Route>
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
