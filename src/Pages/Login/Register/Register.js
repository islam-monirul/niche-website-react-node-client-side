import React from "react";
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
import { FaUserCircle } from "react-icons/fa";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import "./Register.css";

const Register = () => {
  const { registerUser, isLoading, user, authError, setAuthError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data.email, data.password);
    setAuthError("");
    registerUser(data.email, data.password, data.name, location, history);
  };
  return (
    <Container className="py-5">
      <Row className="py-2 py-lg-5 d-flex justify-content-center align-items-center commonFormDiv">
        <Col md={8} lg={5} className="py-5">
          {user.email && (
            <Alert variant="success" className="my-4">
              User Added Successfully!
            </Alert>
          )}
          {authError && (
            <Alert variant="danger" className="my-4">
              {authError}
            </Alert>
          )}

          {!isLoading && (
            <>
              <div className="mb-5">
                <h1 className="text-danger text-center">Register</h1>
                <p className="text-secondary text-center">
                  Please Register to access all the features available at our
                  system.
                </p>
              </div>
              <div className="loginRegForm p-5">
                <FaUserCircle className="d-block mx-auto loginRegIcon text-secondary mb-3" />
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Your name"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="e.g. Monirul Islam"
                      {...register("name", { required: true })}
                    />
                    {errors.name && <span>This field is required</span>}
                  </FloatingLabel>

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
                    {errors.email && <span>This field is required</span>}
                  </FloatingLabel>

                  <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      {...register("password", { required: true })}
                    />
                    {errors.password && <span>This field is required</span>}
                  </FloatingLabel>

                  <NavLink to="/login" style={{ textDecoration: "none" }}>
                    <Button
                      variant="transparent"
                      className="mt-3 d-block mx-auto"
                    >
                      Already an user ?{" "}
                      <span className="text-danger">Login</span>
                    </Button>
                  </NavLink>

                  <div className="mt-3 d-grid gap-2">
                    <Button variant="dark" type="submit">
                      Register
                    </Button>
                  </div>
                </Form>
              </div>
            </>
          )}
          {isLoading && (
            <Spinner
              className="d-block mx-auto"
              variant="danger"
              animation="grow"
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
