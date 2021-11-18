import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ReviewSlider from "../Components/ReviewSlider/ReviewSlider";
import CommonHeader from "./../Components/Common/CommonHeader";
import Footer from "./../Components/Common/Footer";
import Bike from "./../Components/Bike/Bike";
import "./CommonDesigns.css";
import HeroPart from "../Components/HeroPart/HeroPart";
import About from "../Components/About/About";
import Benefits from "./../Components/Benefits/Benefits";

const Home = () => {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    fetch("https://sleepy-depths-60481.herokuapp.com/bikes")
      .then((res) => res.json())
      .then((data) => setBikes(data));
  }, []);

  return (
    <>
      <CommonHeader></CommonHeader>
      <HeroPart></HeroPart>
      <About></About>
      {bikes && (
        <section className="sectionPadding">
          <Container>
            <h1 className="text-center fw-bold mb-4">
              Our <span className="text-danger">Featured</span> Bikes
            </h1>
            <Row
              xs={1}
              md={2}
              lg={3}
              className="g-5 py-4"
              style={{ marginRight: "0", marginLeft: "0" }}
            >
              {bikes.slice(0, 6).map((bike) => (
                <Bike key={bike._id} info={bike}></Bike>
              ))}
            </Row>
          </Container>
        </section>
      )}
      <Benefits></Benefits>
      <ReviewSlider></ReviewSlider>
      <Footer></Footer>
    </>
  );
};

export default Home;
