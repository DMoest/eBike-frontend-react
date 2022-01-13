
import Nav from "../global/Nav/NavCustomer";
import React from "react";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import Logout from "../login/Logout";
import Login from "../login/Login";
import History from "./History";
import Home from "./Home";
import Payment from "./payment/Payment";
// import Adress from "./components/customer/Adress";

function CustomerApp(props) {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/home" element={<Home user={props.user} />} />
        <Route path="/history" element={<History user={props.user} />} />
        <Route path="/payment" element={<Payment user={props.user} />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/logout" element={<Login user={props.user} />} />
      </Routes>
      <div className="home-container"></div>
    </div>
  );
}

export default CustomerApp;
