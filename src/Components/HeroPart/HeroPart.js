import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import "./HeroPart.css";

const HeroPart = () => {
  let history = useHistory();

  // book appointment
  const handleLearnMore = () => {
    history.push("/bikes");
  };
  return (
    <section className="heroSection d-flex align-items-center">
      <Container>
        <Row>
          <h1 className="fw-bold text-white titleText text-center lh-1">
            Moto<span className="text-danger">Maze</span>
          </h1>
          <p className="text-white lh-1 text-center fs-5">
            We provide affordable and reliable bikes all over ASIA
          </p>
          <Col>
            <Button
              variant="outline-light px-lg-4 py-lg-3 px-3 py-2 fw-bold d-block mx-auto mt-3"
              onClick={handleLearnMore}
            >
              EXPLORE
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroPart;
