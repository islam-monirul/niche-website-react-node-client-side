import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaShippingFast,
  FaCheckCircle,
  FaHandshake,
  FaMoneyCheck,
} from "react-icons/fa";

const Benefits = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row
          xs={1}
          md={2}
          lg={4}
          className="g-2 py-4"
          style={{ marginRight: "0", marginLeft: "0" }}
        >
          <Col className="h-100 p-2">
            <div className="border p-3">
              <FaShippingFast className="fs-1 text-secondary d-block mx-auto" />
              <p className="fw-bold mt-2 text-center">Fast Shipping</p>
            </div>
          </Col>
          <Col className="h-100 p-2">
            <div className="border p-3">
              <FaMoneyCheck className="fs-1 text-secondary d-block mx-auto" />
              <p className="fw-bold mt-2 text-center">Secured Payment</p>
            </div>
          </Col>
          <Col className="h-100 p-2">
            <div className="border p-3">
              <FaCheckCircle className="fs-1 text-secondary d-block mx-auto" />
              <p className="fw-bold mt-2 text-center">Trusted Provider</p>
            </div>
          </Col>
          <Col className="h-100 p-2">
            <div className="border p-3">
              <FaHandshake className="fs-1 text-secondary d-block mx-auto" />
              <p className="fw-bold mt-2 text-center">Happy Customers</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Benefits;
