import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Bikes from "./Components/Bikes/Bikes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BikeDetails from "./Components/BikeDetails/BikeDetails";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider";
import Home from "./Pages/Home";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import CommonHeader from "./Components/Common/CommonHeader";
import Footer from "./Components/Common/Footer";
import Success from "./Pages/Success";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";

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
              <CommonHeader></CommonHeader>
              <Bikes></Bikes>
              <Footer></Footer>
            </Route>

            <PrivateRoute path="/bikedetails/:bikeId">
              <BikeDetails></BikeDetails>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/success">
              <Success></Success>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="*">
              <NotFoundPage></NotFoundPage>
            </Route>
          </Switch>
        </Router>
        {/* <Footer></Footer> */}
      </div>
    </AuthProvider>
  );
}

export default App;
