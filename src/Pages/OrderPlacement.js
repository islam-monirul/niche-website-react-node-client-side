import React from "react";
import { useLocation, useHistory } from "react-router-dom";

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
    <div>
      <h1>Order Placement</h1>
    </div>
  );
};

export default OrderPlacement;
