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
import "./Login.css";
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { loginUser, isLoading, user, authError, setAuthError } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setAuthError("");
    loginUser(data.email, data.password);
  };

  return (
    <Container className="py-5">
      <Row className="py-5 d-flex justify-content-center align-items-center">
        <Col md={6} className="py-5">
          <h1 className="text-danger">Welcome</h1>
          <p className="text-secondary">
            Thank you for getting back. <br /> Please Login to access all the
            features available at our system.
          </p>
        </Col>
        <Col md={4} className="py-5">
          {user.email && (
            <Alert variant="success" className="my-4">
              Login Successfully!
            </Alert>
          )}
          {authError && (
            <Alert variant="danger" className="my-4">
              {authError}
            </Alert>
          )}

          {!isLoading && (
            <div className="loginRegForm p-5">
              <FaUserCircle className="d-block mx-auto loginRegIcon text-secondary mb-3" />
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

                <NavLink to="/register" style={{ textDecoration: "none" }}>
                  <Button
                    variant="transparent"
                    className="mt-3 d-block mx-auto"
                  >
                    New here ? Register
                  </Button>
                </NavLink>

                <div className="mt-3 d-grid gap-2">
                  <Button variant="dark" type="submit">
                    Login
                  </Button>
                </div>
              </Form>
            </div>
          )}
          {isLoading && (
            <Spinner className="d-block mx-auto" animation="grow" />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
