import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Bikes from "./Components/Bikes/Bikes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BikeDetails from "./Components/BikeDetails/BikeDetails";
import OrderPlacement from "./Pages/OrderPlacement";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider";
import Home from "./Pages/Home";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/bikes">
              <Bikes></Bikes>
            </Route>
            <Route path="/bikedetails/:bikeId">
              <BikeDetails></BikeDetails>
            </Route>

            <PrivateRoute path="/orderPlacement">
              <OrderPlacement></OrderPlacement>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
        </Router>
        {/* <Footer></Footer> */}
      </div>
    </AuthProvider>
  );
}

export default App;
