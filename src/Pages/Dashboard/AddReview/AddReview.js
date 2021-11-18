import React, { useState } from "react";
import {
  Col,
  Container,
  Form,
  Row,
  Spinner,
  Button,
  Modal,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FcCheckmark } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";

const AddReview = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const { user } = useAuth();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    reset();

    const review = {
      displayName: data.name,
      email: data.email,
      rating: parseFloat(data.rating),
      review: data.review,
    };

    addNewReview(review);
  };

  const addNewReview = (review) => {
    fetch("https://sleepy-depths-60481.herokuapp.com/addReview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
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
                    Your review has been submitted.
                  </p>

                  <Button
                    as={NavLink}
                    to="/"
                    variant="dark"
                    className="w-75 mt-3 d-block mx-auto"
                  >
                    Back to Homepage
                  </Button>
                </Row>
              </Container>
            </Modal.Body>
          </Modal>
          <h1 className="text-danger text-center mb-3">Add Review</h1>

          <Form onSubmit={handleSubmit(onSubmit)} className="p-3 p-md-5 border">
            <Row>
              <Col lg={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    id="name"
                    type="text"
                    readOnly
                    placeholder={user?.displayName}
                    defaultValue={user?.displayName}
                    {...register("name")}
                  />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    id="email"
                    type="email"
                    readOnly
                    placeholder={user?.email}
                    defaultValue={user?.email}
                    {...register("email")}
                  />
                  {errors.email && <span>This field is required</span>}
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Rating</Form.Label>
              <Form.Select
                id="rating"
                type="text"
                {...register("rating", { required: true })}
              >
                <option value="0.5">0.5</option>
                <option value="1.0">1.0</option>
                <option value="1.5">1.5</option>
                <option value="2.0">2.0</option>
                <option value="2.5">2.5</option>
                <option value="3.0">3.0</option>
                <option value="3.5">3.5</option>
                <option value="4.0">4.0</option>
                <option value="4.5">4.5</option>
                <option value="5.0">5.0</option>
              </Form.Select>
              {errors.rating && <span>This field is required</span>}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Review</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                {...register("review", { required: true })}
              />
              {errors.review && <span>This field is required</span>}
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="dark" className="mt-4" type="submit">
                Add Review
              </Button>
            </div>
          </Form>
        </Row>
      )}
    </Container>
  );
};

export default AddReview;
