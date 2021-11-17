import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const { user, logout } = useAuth();
  return (
    <div
      style={{ padding: "100px 0" }}
      className="d-flex justify-content-center"
    >
      {user.email ? (
        <div>
          <p className="text-center">{user.displayName}</p>
          <Button onClick={logout}>Logout</Button>
        </div>
      ) : (
        <Button as={NavLink} to="/login">
          Login
        </Button>
      )}
    </div>
  );
};

export default Home;
