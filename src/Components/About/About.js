import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./About.css";

const About = () => {
  const aboutPhoto = `https://i.ibb.co/KG90pGN/about-img.png`;
  return (
    <div>
      <section className="aboutSection bg-light">
        <Container>
          <Row className="d-flex align-items-center">
            <Col md={6}>
              <Image src={aboutPhoto} fluid className="w-75" />
            </Col>
            <Col md={6}>
              <h1 className=" fw-bold mb-4">
                About <span className="text-danger">MotoMaze</span>
              </h1>
              <p className="text-justify">
                <strong className="custom-text-color1">MotoMaze</strong> is an
                imaginary bike selling website. This is built with React.js,
                Firebase, React-bootstrap, React router, Node.js, MongoDB,
                Express js etc. as an assignment of Complete Web Development
                with Jhankar Mahbub by Monirul Islam.
                <br /> <br />
                In this website, You can get different types of bikes. You can
                get the best possible budgeted bikes and customer support here.
                <br /> <br />
                Always remember, &nbsp;
                <span className="text-danger fw-bold">
                  Four wheels move the body, Two wheels move the soul !!
                </span>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;
