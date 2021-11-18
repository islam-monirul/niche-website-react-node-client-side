import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Common.css";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-3 bg-dark">
      <Container>
        <Row className="pt-5 d-flex justify-content-between">
          <Col md={5}>
            <div className="h-100 p-3">
              <h4 className="text-white fw-bold">
                Moto<span className="text-danger">Maze</span>
              </h4>
              <p className="text-white fw-light text-justify">
                MotoMaze is an imaginary bike selling website. This is built
                with React.js, Firebase, React-bootstrap, React router, Node.js,
                MongoDB, Express js etc. as an assignment of Complete Web
                Development with Jhankar Mahbub by Monirul Islam.
              </p>
            </div>
          </Col>
          <Col md={3} lg={2}>
            <div className="h-100 p-3">
              <h6 className="text-white fw-bold mb-3">Quick Links</h6>
              <p as={NavLink} to="/" className="text-secondary qlinks">
                About us
              </p>
              <p as={NavLink} to="/" className="text-secondary qlinks">
                Shop
              </p>
              <p as={NavLink} to="/" className="text-secondary qlinks">
                Contact
              </p>
              <p as={NavLink} to="/" className="text-secondary qlinks">
                Privacy Policy
              </p>
            </div>
          </Col>

          <Col md={3}>
            <div className="h-100 p-3">
              <h6 className="text-white fw-bold mb-3">Follow us on social</h6>
              <p as={NavLink} to="/" className="text-secondary qlinks">
                <FaFacebookSquare className="fs-5" />
                <span className="align-middle lh-1"> /motoMaze</span>
              </p>
              <p as={NavLink} to="/" className="text-secondary qlinks">
                <FaInstagram className="fs-5" />
                <span className="align-middle lh-1"> /moMz</span>
              </p>
              <p as={NavLink} to="/" className="text-secondary qlinks">
                <FaTwitterSquare className="fs-5" />
                <span className="align-middle lh-1"> /moMaze</span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <hr className="bg-secondary" />

      <Container>
        <Row className="pt-3">
          <Col md={7} sm={12}>
            <p className="text-white fw-light text-center text-md-start">
              © 2021 | All rights reserved by{" "}
              <span className="text-danger qlinks">MotoMaze</span>
            </p>
          </Col>
          <Col md={5} sm={12}>
            <p className="text-white fw-light text-center text-md-end">
              Designed & Developed by{" "}
              <span as={NavLink} to="/" className="qlinks text-danger">
                Monirul Islam
              </span>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
