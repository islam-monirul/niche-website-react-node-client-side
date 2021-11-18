import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { FcCheckmark } from "react-icons/fc";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import "./Success.css";

const Success = () => {
  const location = useLocation();
  const history = useHistory();
  const successLevel = location?.state?.success;

  if (!successLevel) {
    history.push("/");
  }

  return (
    <Container className="successDiv d-flex align-items-center justify-content-center">
      <Row className="bg-light p-5">
        <FcCheckmark className="d-block mx-auto tickmark" />
        <h1 className="text-success text-center mt-3">Congratulations</h1>
        <p className="text-secondary text-center">
          Your order has been placed. We will contact you soon.
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

export default Success;
