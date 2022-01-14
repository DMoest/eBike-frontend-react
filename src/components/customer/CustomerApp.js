import Nav from "../global/Nav/NavCustomer";
import React from "react";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import Logout from "../login/Logout";
import Login from "../login/Login";
import History from "./History";
import Home from "./Home";
import Payment from "./payment/Payment";
// import Adress from "./components/customer/Adress";

function CustomerApp({ token, id }) {
  // Token check
  if (!token) {
    window.location.href = "http://localhost:3000/denied";
    return;
  }

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home id={id} token={token} />} />
        <Route
          exact
          path="/history"
          element={<History id={id} token={token} />}
        />
        <Route
          exact
          path="/payment"
          element={<Payment id={id} token={token} />}
        />
        <Route exact path="/logout" element={<Logout />} />
      </Routes>
      <div className="home-container"></div>
    </div>
  );
}

export default CustomerApp;
