import React from "react";
import { Container } from "react-bootstrap";
import ReviewSlider from "../Components/ReviewSlider/ReviewSlider";
import CommonHeader from "./../Components/Common/CommonHeader";
import Footer from "./../Components/Common/Footer";

const Home = () => {
  return (
    <>
      <CommonHeader></CommonHeader>
      <ReviewSlider></ReviewSlider>
      <Container style={{ minHeight: "60vh" }}></Container>
      <Footer></Footer>
    </>
  );
};

export default Home;
