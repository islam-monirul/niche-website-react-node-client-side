import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Common/Footer";
import Bikes from "./Components/Bikes/Bikes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BikeDetails from "./Components/BikeDetails/BikeDetails";
import OrderPlacement from "./Pages/OrderPlacement";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider";
import Home from "./Pages/Home";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/bikes">
              <Bikes></Bikes>
            </Route>
            <Route path="/bikedetails/:bikeId">
              <BikeDetails></BikeDetails>
            </Route>

            <Route path="/orderPlacement">
              <OrderPlacement></OrderPlacement>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
        </Router>
        <Footer></Footer>
      </div>
    </AuthProvider>
  );
}

export default App;
