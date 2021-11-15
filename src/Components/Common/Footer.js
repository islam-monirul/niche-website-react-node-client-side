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
                Football <span className="text-danger">Phobia</span>
              </h4>
              <p className="text-white fw-light text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus sint quasi consequatur eveniet expedita est obcaecati
                dolores dicta optio, voluptas voluptatem quis quia voluptates
                cumque et voluptate labore aliquid aliquam non magnam quibusdam.
                Tempore, repellat quisquam reiciendis quam exercitationem in
                expedita minima voluptatem optio a! Voluptatem enim voluptas
                aperiam impedit!
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
                <span className="align-middle lh-1"> /footballPhobia</span>
              </p>
              <p as={NavLink} to="/" className="text-secondary qlinks">
                <FaInstagram className="fs-5" />
                <span className="align-middle lh-1"> /fPhobia</span>
              </p>
              <p as={NavLink} to="/" className="text-secondary qlinks">
                <FaTwitterSquare className="fs-5" />
                <span className="align-middle lh-1"> /footPhobia</span>
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
              <span className="text-danger qlinks">Football Phobia</span>
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
