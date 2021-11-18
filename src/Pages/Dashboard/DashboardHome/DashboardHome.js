import React from "react";
import { Container, Image } from "react-bootstrap";
import "./DashboardHome.css";
import useAuth from "./../../../hooks/useAuth";

const DashboardHome = () => {
  const { user } = useAuth();

  const imgUrl = `https://i.ibb.co/kH3FGYS/welcome.png`;

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <div>
        <Image src={imgUrl} fluid />
        <h1 className="text-center lh-1 mt-4 fw-bold">{user.displayName}</h1>
      </div>
    </Container>
  );
};

export default DashboardHome;
