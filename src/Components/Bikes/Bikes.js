import React, { useState } from "react";
import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import "./Bikes.css";
import Bike from "./../Bike/Bike";

const Bikes = () => {
  const [bikes, setBikes] = useState();

  useEffect(() => {
    fetch("https://motomaze.onrender.com/bikes")
      .then((res) => res.json())
      .then((data) => setBikes(data));
  }, []);

  return (
    <section>
      <Container className="allBikesSection">
        <h1 className="text-center fw-bold mb-5">
          MotoMaze <span className="text-danger">Bikes</span>
        </h1>
        <Row
          xs={1}
          md={2}
          lg={3}
          className="g-5 py-4"
          style={{ marginRight: "0", marginLeft: "0" }}
        >
          {bikes?.map((bike) => (
            <Bike key={bike.name} info={bike}></Bike>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Bikes;
