import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import Bike from "../Bike/Bike";
import "./BikeDetails.css";

const BikeDetails = () => {
  const { bikeId } = useParams();

  const [bikes, setBikes] = useState([]);
  const [bike, setBike] = useState(null);

  //   for getting the specific bikes
  useEffect(() => {
    fetch(`https://sleepy-depths-60481.herokuapp.com/bikes/${bikeId}`)
      .then((res) => res.json())
      .then((data) => setBike(data));

    window.scrollTo(0, 0);
  }, [bikeId]);

  // for color selction
  let colorOptions;
  if (bike) {
    colorOptions = bike.color;
  }

  const [selectCol, setSelectCol] = useState("");
  const toggleColor = (c) => {
    setSelectCol(c);
  };

  //   for quantity
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data, selectCol);
  };

  //   for getting all bikes and filtering except the current one
  useEffect(() => {
    fetch("https://sleepy-depths-60481.herokuapp.com/bikes")
      .then((res) => res.json())
      .then((data) => setBikes(data));
  }, []);

  const filteredBikes = bikes.filter((bk) => bk?._id !== bikeId).slice(0, 4);

  return (
    bike && (
      <Container className="py-5">
        <Row className="d-flex justify-content-center align-items-center py-5">
          <Col md={6}>
            <Image src={bike?.image} fluid />
          </Col>
          <Col md={6}>
            <h5 className="fw-bold">{bike?.brand}</h5>
            <p className="text-secondary">{bike?.name}</p>
            <h4 className="fw-bold text-danger">${bike?.price}</h4>
            <label className="mt-3">Select Color</label>
            <div className="d-flex gap-2 py-3">
              {colorOptions.map((opt) => (
                <div
                  key={opt}
                  className={
                    selectCol === opt
                      ? `activeColor border p-2 px-4 selection`
                      : `selection border p-2 px-4`
                  }
                  onClick={() => toggleColor(opt)}
                >
                  {opt}
                </div>
              ))}
            </div>

            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group>
                <Form.Label className="mt-2">Quantity</Form.Label>
                <Form.Control
                  type="number"
                  defaultValue={1}
                  className="w-25"
                  {...register("quantity", { required: true })}
                />
                {errors.quantity && (
                  <span className="text-warning mt-3">
                    This field is required
                  </span>
                )}
              </Form.Group>

              <Button variant="dark" className="px-5 py-2 mt-4" type="submit">
                Place your order
              </Button>
            </Form>
          </Col>
        </Row>

        <Row className="g-4 pb-5">
          <Col md={6}>
            <div className="border p-4 h-100 d-flex flex-column justify-content-center">
              <h5 className="fw-bold">Specification</h5>
              <ul>
                <li className="my-2">
                  Gear Box:{" "}
                  <span className="text-secondary">
                    {bike?.specification?.gearBox}
                  </span>
                </li>
                <li className="my-2">
                  ABS:{" "}
                  <span className="text-secondary">
                    {bike?.specification?.ABS}
                  </span>
                </li>
                <li className="my-2">
                  Max Power:{" "}
                  <span className="text-secondary">
                    {bike?.specification?.maxPower}
                  </span>
                </li>
                <li className="my-2">
                  Tyre Type:{" "}
                  <span className="text-secondary">
                    {bike?.specification?.tyreType}
                  </span>
                </li>
                <li className="my-2">
                  Fuel Type:{" "}
                  <span className="text-secondary">
                    {bike?.specification?.fuelType}
                  </span>
                </li>
                <li className="my-2">
                  Engine Display:{" "}
                  <span className="text-secondary">
                    {bike?.specification?.engineDisplay}
                  </span>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={6}>
            <div className="border p-5 h-100 d-flex flex-column justify-content-center">
              <h5 className="fw-bold">
                {bike?.brand} {bike?.name}
              </h5>
              <p className="text-secondary text-justify">{bike?.details}</p>
            </div>
          </Col>
        </Row>

        <div className="py-5">
          <h2>
            More <span className="fw-bold text-danger">Bikes</span>
          </h2>
          <Row
            xs={1}
            md={2}
            lg={4}
            className="g-5 py-5"
            style={{ marginRight: "0", marginLeft: "0" }}
          >
            {filteredBikes.map((fBike) => (
              <Bike key={fBike.name} info={fBike} flag={1}></Bike>
            ))}
          </Row>
        </div>
      </Container>
    )
  );
};

export default BikeDetails;
