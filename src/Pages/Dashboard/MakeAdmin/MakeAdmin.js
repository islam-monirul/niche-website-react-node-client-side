import React, { useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import "../Dashboard.css";

const MakeAdmin = () => {
  const [load, setLoad] = useState(false);
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    reset();
    setLoad(true);
    setSuccess(false);

    const user = { email: data.email };

    fetch("https://sleepy-depths-60481.herokuapp.com/adduser/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((dt) => {
        if (dt.modifiedCount) {
          setLoad(false);
          setSuccess(true);
        }
      });
  };

  return (
    <Container>
      <h2 className="text-danger text-center lh-1">Make new Admin</h2>
      <p className="text-center text-secondary mb-5">
        Please enter an email that you want to add as an admin
      </p>
      <Row className="d-flex justify-content-center">
        <Col md={8} lg={6}>
          {load ? (
            <Spinner
              animation="grow"
              variant="danger"
              className="d-block mx-auto"
            />
          ) : (
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-warning mt-3">This field is required</p>
                )}
              </FloatingLabel>

              <div className="d-grid gap-2">
                <Button variant="dark" type="submit">
                  Make Admin
                </Button>
              </div>
            </Form>
          )}

          {success && (
            <Alert
              variant="success"
              className="mt-3"
              onClose={() => setSuccess(false)}
              dismissible
            >
              New admin added successfully
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MakeAdmin;
