import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./ReviewSlider.css";
import { Card, Container, Row } from "react-bootstrap";
import Rating from "react-rating";

const ReviewSlider = () => {
  const [reviews, setReviews] = useState();

  useEffect(() => {
    fetch("https://sleepy-depths-60481.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  console.log(reviews);

  return (
    <Container className="reviewSection">
      <h1 className="text-center">
        Our Happy<span className="text-danger"> Clients</span>
      </h1>
      <Row className="py-5 reviews">
        {reviews && (
          <OwlCarousel
            //   items={3}
            className="owl-theme"
            loop={true}
            nav={false}
            margin={8}
            center={true}
            responsiveClass={true}
            autoPlay={true}
            autoplayTimeout={2000}
            autoplayHoverPause={true}
            responsive={{
              0: {
                items: 1,
              },
              680: {
                items: 1,
              },
              1200: {
                items: 3,
              },
            }}
          >
            {reviews.map((review) => (
              <Card className="h-100 p-3" key={review._id}>
                <Card.Body>
                  <Rating
                    readonly
                    initialRating={review.rating}
                    emptySymbol="far fa-star star-color"
                    fullSymbol="fas fa-star star-color"
                    className="mb-3"
                  />
                  <p className="text-secondary">{review.review}</p>
                  <h6 className="text-danger">- {review.displayName}</h6>
                </Card.Body>
              </Card>
            ))}
          </OwlCarousel>
        )}
      </Row>
    </Container>
  );
};

export default ReviewSlider;
