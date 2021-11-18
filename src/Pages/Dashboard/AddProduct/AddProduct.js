import React, { useState } from "react";
import {
  Col,
  Container,
  Form,
  FormLabel,
  Row,
  Spinner,
  Button,
  Modal,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FcCheckmark } from "react-icons/fc";
import { NavLink } from "react-router-dom";

const AddProduct = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);

    let colors = [];

    if (data.black) {
      colors.push("Black");
    }
    if (data.red) {
      colors.push("Red");
    }
    if (data.ash) {
      colors.push("Ash");
    }
    if (data.blue) {
      colors.push("Blue");
    }

    if (!data.black && !data.blue && !data.red && !data.ash) {
      colors.push("Black");
    }

    const bike = {
      name: data.name,
      brand: data.brand,
      color: colors,
      price: parseFloat(data.price),
      specification: {
        gearBox: data.gearBox,
        ABS: data.ABS,
        engineDisplay: data.engineDisplay + " cc",
        maxPower: data.maxPower + " rpm",
        fuelType: data.fuelType,
        tyreType: data.tyreType,
      },
      image: data.image,
      details: data.details,
    };

    reset();

    addNewProduct(bike);
  };

  const addNewProduct = (bike) => {
    fetch("https://sleepy-depths-60481.herokuapp.com/addProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bike),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setLoading(false);
          setSuccess(true);
        }
      });
  };

  return (
    <Container>
      {loading ? (
        <Spinner
          animation="grow"
          variant="danger"
          className="d-block mx-auto"
        />
      ) : (
        <Row className="py-5">
          <Modal
            show={success}
            onHide={() => setSuccess(false)}
            size="lg"
            centered
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <Container className="d-flex align-items-center justify-content-center">
                <Row className="bg-light p-5">
                  <FcCheckmark className="d-block mx-auto tickmark" />
                  <h1 className="text-success text-center mt-3">
                    Congratulations
                  </h1>
                  <p className="text-secondary text-center">
                    Product have been added successfully
                  </p>

                  <Button
                    as={NavLink}
                    to="/bikes"
                    variant="dark"
                    className="w-75 mt-3 d-block mx-auto"
                  >
                    Check All Products
                  </Button>
                </Row>
              </Container>
            </Modal.Body>
          </Modal>
          <h1 className="text-danger text-center mb-3">Add New Product</h1>
          <Form onSubmit={handleSubmit(onSubmit)} className="p-3 p-md-5 border">
            <Row>
              <Col lg={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Bike Brand</Form.Label>
                  <Form.Control
                    id="brand"
                    type="text"
                    placeholder="Suzuki, Yamaha, TVS"
                    {...register("brand", { required: true })}
                  />
                  {errors.brand && <span>This field is required</span>}
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Bike Name</Form.Label>
                  <Form.Control
                    id="name"
                    type="text"
                    placeholder="MT 15, Intruder etc."
                    {...register("name", { required: true })}
                  />
                  {errors.name && <span>This field is required</span>}
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    id="price"
                    type="text"
                    placeholder="amount"
                    {...register("price", { required: true })}
                  />
                  {errors.price && <span>This field is required</span>}
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Engine</Form.Label>
                  <Form.Control
                    id="engineDisplay"
                    type="text"
                    placeholder="e.g. 249 cc"
                    {...register("engineDisplay", { required: true })}
                  />
                  {errors.engineDisplay && <span>This field is required</span>}
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Max Power</Form.Label>
                  <Form.Control
                    id="maxPower"
                    type="text"
                    placeholder="8000, 10000 etc."
                    {...register("maxPower", { required: true })}
                  />
                  {errors.maxPower && <span>This field is required</span>}
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>ABS</Form.Label>
                  <Form.Select
                    id="ABS"
                    type="text"
                    {...register("ABS", { required: true })}
                  >
                    <option value="Single Channel">Single Channel</option>
                    <option value="Dual Channel">Dual Channel</option>
                    <option value="No ABS">No ABS</option>
                  </Form.Select>
                  {errors.ABS && <span>This field is required</span>}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Gear Box</Form.Label>
                  <Form.Select
                    id="gearBox"
                    type="text"
                    {...register("gearBox", { required: true })}
                  >
                    <option value="5 Speed">5 Speed</option>
                    <option value="6 Speed">6 Speed</option>
                    <option value="N/A">N/A</option>
                  </Form.Select>
                  {errors.gearBox && <span>This field is required</span>}
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Tyre Type</Form.Label>
                  <Form.Select
                    id="tyreType"
                    type="text"
                    {...register("tyreType", { required: true })}
                  >
                    <option value="Tubeless">Tubeless</option>
                    <option value="Multi Tube">Multi Tube</option>
                    <option value="N/A">N/A</option>
                  </Form.Select>
                  {errors.tyreType && <span>This field is required</span>}
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Fuel Type</Form.Label>
                  <Form.Select
                    id="fuelType"
                    type="text"
                    {...register("fuelType", { required: true })}
                  >
                    <option value="Petrol">Petrol</option>
                    <option value="Gas">Gas</option>
                  </Form.Select>
                  {errors.fuelType && <span>This field is required</span>}
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Image URL</Form.Label>
                  <Form.Control
                    id="image"
                    type="text"
                    placeholder="Paste Image URL (ImgBB recommended)"
                    {...register("image", { required: true })}
                  />
                  {errors.image && <span>This field is required</span>}
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <FormLabel>Select Available Colors</FormLabel>
              <div>
                <Form.Check
                  inline
                  label="Black"
                  name="black"
                  {...register("black")}
                />
                <Form.Check
                  inline
                  label="Red"
                  name="red"
                  {...register("red")}
                />
                <Form.Check
                  inline
                  label="Blue"
                  name="blue"
                  {...register("blue")}
                />
                <Form.Check
                  inline
                  label="Ash"
                  name="ash"
                  {...register("ash")}
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Details</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                {...register("details", { required: true })}
              />
              {errors.details && <span>This field is required</span>}
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="dark" className="mt-4" type="submit">
                Add new Product
              </Button>
            </div>
          </Form>
        </Row>
      )}
    </Container>
  );
};

export default AddProduct;
