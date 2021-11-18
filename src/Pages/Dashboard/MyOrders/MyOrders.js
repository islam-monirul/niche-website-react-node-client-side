import React, { useEffect, useState } from "react";
import { Container, Row, Spinner, Table } from "react-bootstrap";
import useAuth from "./../../../hooks/useAuth";

const MyOrders = () => {
  const [orders, setOrders] = useState();
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://sleepy-depths-60481.herokuapp.com/orders/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [user.email]);

  return (
    <Container>
      {orders ? (
        <Row>
          <h2 className="text-danger text-center lh-1 mb-4">My orders</h2>

          <Table striped bordered hover responsive>
            <thead>
              <tr className="text-center align-middle">
                <th>Ordered Product</th>
                <th>Quantity</th>
                <th>Cost</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr className="text-center align-middle" key={order._id}>
                  <td>
                    <span className="text-danger">{order?.brand}</span>{" "}
                    {order?.bikeName}
                  </td>
                  <td>{order?.quantity}</td>
                  <td>$ {order?.cost}</td>
                  {order?.status ? (
                    <td className="bg-success text-white">Shipped</td>
                  ) : (
                    <td className="bg-danger text-white">Pending</td>
                  )}
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      ) : (
        <Spinner
          animation="grow"
          variant="danger"
          className="d-block mx-auto"
        />
      )}
    </Container>
  );
};

export default MyOrders;
