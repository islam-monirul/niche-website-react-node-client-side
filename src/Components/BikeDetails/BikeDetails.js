import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Row,
  Spinner,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import Bike from "../Bike/Bike";
import "./BikeDetails.css";
import CommonHeader from "../Common/CommonHeader";
import Footer from "./../Common/Footer";
import useAuth from "../../hooks/useAuth";
import { useHistory } from "react-router-dom";

const BikeDetails = () => {
  const { user } = useAuth();
  const { bikeId } = useParams();

  const [bikes, setBikes] = useState([]);
  const [bike, setBike] = useState(null);

  const [selectCol, setSelectCol] = useState("");
  const [quantity, setQuantity] = useState(1);

  const [orderLoad, setOrderLoad] = useState(false);

  const history = useHistory();

  //   for getting the specific bikes
  useEffect(() => {
    fetch(`https://sleepy-depths-60481.herokuapp.com/bikes/${bikeId}`)
      .then((res) => res.json())
      .then((data) => setBike(data));

    // scrolling to top for each bikes id change
    window.scrollTo(0, 0);
  }, [bikeId]);

  // for color selction
  let colorOptions;
  if (bike) {
    colorOptions = bike.color;
  }

  const toggleColor = (c) => {
    setSelectCol(c);
  };

  // for quantity
  const countQuantity = (e) => {
    setQuantity(e.target.value);
  };

  //   for data submit
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setOrderLoad(true);

    if (quantity > 0) {
      if (selectCol !== "") {
        //success case
        data.quantity = quantity;
        data.color = selectCol;
        data.cost = parseInt(quantity) * bike.price;
        data.bikeName = bike.name;
        data.brand = bike.brand;
        data.status = false;

        placeorder(data);
      } else {
        const colorOk = window.confirm("You must select a color!");

        if (colorOk) {
          reset();
          setQuantity(1);
          setSelectCol("");
        }

        setOrderLoad(false);
      }
    } else {
      const quantityOk = window.confirm("Quantity Cannot be negative!");
      if (quantityOk) {
        reset();
        setQuantity(1);
        setSelectCol("");
      }

      setOrderLoad(false);
    }
  };

  const placeorder = (data) => {
    fetch("https://sleepy-depths-60481.herokuapp.com/placeorder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          history.push("/success", { success: true });
        }
      });
  };

  //   for getting all bikes and filtering except the current one
  useEffect(() => {
    fetch("https://sleepy-depths-60481.herokuapp.com/bikes")
      .then((res) => res.json())
      .then((data) => setBikes(data));
  }, []);

  const filteredBikes = bikes.filter((bk) => bk?._id !== bikeId).slice(0, 4);

  return (
    bike &&
    (orderLoad ? (
      <div className="loadSection d-flex flex-column align-items-center justify-content-center">
        <Spinner
          variant="danger"
          animation="grow"
          className="d-block mx-auto"
        />
        <p className="text-center mt-3">Please wait...</p>
      </div>
    ) : (
      <>
        <CommonHeader></CommonHeader>
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

              <Form.Group>
                <Form.Label className="mt-2">Quantity</Form.Label>
                <Form.Control
                  type="number"
                  defaultValue={quantity}
                  className="w-25"
                  onChange={countQuantity}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="g-4 pb-5">
            <Col md={6}>
              <div className="border p-4 h-100 d-flex flex-column justify-content-center">
                <h5 className="fw-bold">
                  {bike?.brand} {bike?.name}
                </h5>
                <p className="text-secondary text-justify mb-5">
                  {bike?.details}
                </p>

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

            {/* form column */}
            <Col md={6}>
              <div className="border p-2 p-sm-3 p-lg-5 h-100">
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Row>
                    <Col lg={6}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          readOnly
                          defaultValue={user.displayName}
                          {...register("name")}
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={6}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput2"
                      >
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          type="tel"
                          placeholder="e.g. +880 1521334471"
                          {...register("phone", { required: true })}
                        />
                        {errors.phone && (
                          <p className="mt-3">This field is required</p>
                        )}
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput3"
                  >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      defaultValue={user.email}
                      {...register("email")}
                      readOnly
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput4"
                  >
                    <Form.Label>Present Address</Form.Label>
                    <Form.Control
                      type="text"
                      {...register("address", { required: true })}
                    />
                    {errors.address && (
                      <p className="mt-3">This field is required</p>
                    )}
                  </Form.Group>

                  <div className="d-grid gap-2">
                    <Button variant="dark" className="mt-4" type="submit">
                      Place your order
                    </Button>
                  </div>

                  <p className="text-secondary mt-5 text-center">
                    <span className="fw-bold">N.B. </span>
                    Please check all the information carefully before you place
                    any order.
                  </p>
                </Form>
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
        <Footer></Footer>
      </>
    ))
  );
};

export default BikeDetails;
