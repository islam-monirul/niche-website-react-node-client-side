import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaTimesCircle } from "react-icons/fa";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <Container className="notfoundDiv d-flex align-items-center justify-content-center">
      <Row className="bg-light p-5">
        <FaTimesCircle className="d-block mx-auto crossmark text-danger" />
        <h1 className="text-danger text-center mt-3">Sorry</h1>
        <p className="text-secondary text-center">
          404 | The page is unavailable !
        </p>

        <Button
          as={NavLink}
          to="/"
          variant="dark"
          className="w-75 mt-3 d-block mx-auto"
        >
          Back to Homepage
        </Button>
      </Row>
    </Container>
  );
};

export default NotFoundPage;
