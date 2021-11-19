import React from "react";
import { Container, Row } from "react-bootstrap";
import { FaTimesCircle } from "react-icons/fa";
import "./NotFoundDashboard.css";

const NotFoundDashboard = () => {
  return (
    <Container>
      <Row className="p-5">
        <FaTimesCircle className="d-block mx-auto crossmark text-danger" />
        <h1 className="text-danger text-center mt-3">Sorry</h1>
        <p className="text-secondary text-center">
          404 | The page is unavailable !
        </p>
      </Row>
    </Container>
  );
};

export default NotFoundDashboard;
