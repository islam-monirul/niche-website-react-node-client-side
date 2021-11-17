import React from "react";
import { Container } from "react-bootstrap";
import { useLocation, useHistory } from "react-router-dom";
import CommonHeader from "./../Components/Common/CommonHeader";
import Footer from "./../Components/Common/Footer";

const OrderPlacement = () => {
  const location = useLocation();
  const history = useHistory();

  // getting the order details
  const data = location?.state?.orderDetails;
  if (!data) {
    history.push("/bikes");
  } else {
    console.log(data);
  }

  return (
    <>
      <CommonHeader></CommonHeader>
      <Container
        style={{ minHeight: "60vh" }}
        className="d-flex align-items-center"
      >
        <h2>{data?.pName}</h2>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default OrderPlacement;
