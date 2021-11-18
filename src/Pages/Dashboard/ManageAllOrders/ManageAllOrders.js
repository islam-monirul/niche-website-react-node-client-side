import React, { useState, useEffect } from "react";
import { Alert, Container, Row, Spinner, Table } from "react-bootstrap";
import "../Dashboard.css";
import { FaTrashAlt, FaCheckCircle } from "react-icons/fa";
import "./ManageAllOrders.css";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState();
  const [updateStatus, setUpdateStatus] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(false);

  // fetch all orders
  useEffect(() => {
    fetch("https://sleepy-depths-60481.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [orders]);

  const handleStatusUpdate = (id) => {
    setUpdateStatus(true);

    const order = { id: id };
    fetch("https://sleepy-depths-60481.herokuapp.com/updateorderStatus", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setUpdateStatus(false);
        }
      });
  };

  const handleDelete = (id) => {
    setDeleteStatus(false);

    fetch(`https://sleepy-depths-60481.herokuapp.com/deleteOrder/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setDeleteStatus(true);
        }
      });
  };

  return (
    <Container>
      {orders ? (
        <Row>
          <h2 className="text-danger text-center lh-1 mb-4">Manage orders</h2>
          {deleteStatus && (
            <Alert
              variant="success"
              className="mt-3"
              onClose={() => setDeleteStatus(false)}
              dismissible
            >
              Order Deleted successfully
            </Alert>
          )}
          <Table striped bordered hover responsive>
            <thead>
              <tr className="text-center align-middle">
                <th>Ordered Product</th>
                <th>Customer Name</th>
                <th>Cost</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr className="text-center align-middle" key={order._id}>
                  <td>
                    <span className="text-danger">{order?.brand}</span>{" "}
                    {order?.bikeName}
                  </td>
                  <td>{order?.name}</td>
                  <td>$ {order?.cost}</td>
                  {updateStatus ? (
                    <Spinner variant="danger" animation="grow" />
                  ) : (
                    <>
                      {order?.status ? (
                        <td className="bg-success text-white">Completed</td>
                      ) : (
                        <td className="bg-danger text-white">Pending</td>
                      )}
                    </>
                  )}
                  <td>
                    {!order.status && (
                      <abbr title="Mark as Done">
                        <FaCheckCircle
                          className="text-success cursorStyle me-2"
                          onClick={() => handleStatusUpdate(order?._id)}
                        />
                      </abbr>
                    )}

                    <abbr title="Delete this order">
                      <FaTrashAlt
                        className="text-danger cursorStyle"
                        onClick={() => handleDelete(order?._id)}
                      />
                    </abbr>
                  </td>
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

export default ManageAllOrders;
