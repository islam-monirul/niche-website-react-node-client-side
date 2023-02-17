import React, { useState, useEffect } from "react";
import { Alert, Container, Image, Row, Spinner, Table } from "react-bootstrap";
import "../Dashboard.css";
import { FaTrashAlt } from "react-icons/fa";
import "./ManageAllProducts.css";

const ManageAllProducts = () => {
  const [bikes, setBikes] = useState();
  const [deleteStatus, setDeleteStatus] = useState(false);

  // fetch all orders
  useEffect(() => {
    fetch("https://motomaze.onrender.com/bikes")
      .then((res) => res.json())
      .then((data) => {
        setBikes(data);
      });
  }, [bikes]);

  const handleDelete = (id) => {
    setDeleteStatus(false);

    const deleteOk = window.confirm("Are you sure to delete the order?");

    if (deleteOk) {
      fetch(`https://motomaze.onrender.com/deleteProduct/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            setDeleteStatus(true);
          }
        });
    }
  };

  return (
    <Container>
      {bikes ? (
        <Row className="py-5">
          <h2 className="text-danger text-center lh-1 mb-4">Manage Products</h2>
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

          <Table bordered responsive>
            <thead>
              <tr className="text-center align-middle">
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bikes.map((bike) => (
                <tr className="text-center align-middle" key={bike._id}>
                  <td>
                    <Image
                      thumbnail={true}
                      src={bike?.image}
                      className="productImage"
                      fluid
                    />
                  </td>
                  <td>
                    <span className="text-danger">{bike?.brand}</span>{" "}
                    {bike?.name}
                  </td>
                  <td>$ {bike?.price}</td>
                  <td>
                    <abbr title="Delete this product">
                      <FaTrashAlt
                        className="text-danger cursorStyle"
                        onClick={() => handleDelete(bike?._id)}
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

export default ManageAllProducts;
