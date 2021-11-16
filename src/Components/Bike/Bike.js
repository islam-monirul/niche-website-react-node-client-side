import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Bike.css";

const Bike = (props) => {
  const { _id, image, brand, name, price } = props.info;

  const bikeDetails = `/bikedetails/${_id}`;
  return (
    <Col>
      <Card className="h-100 bg-transparent bikeCard">
        <Card.Img src={image} className="img-fluid" />
        <Card.Body>
          <h6 className="text-danger">{brand}</h6>
          <h5 className="text-secondary">{name}</h5>

          {props?.flag !== 1 && (
            <h3 className="pt-3">
              <span className="fs-6 text-seondary">Price:</span>{" "}
              <span className="fw-bold">${price}</span>
            </h3>
          )}
        </Card.Body>
        <Card.Footer className="border-0 bg-transparent">
          <div className="d-grid gap-2">
            <Button as={NavLink} to={bikeDetails} className="btn-dark">
              Purchase
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Bike;
