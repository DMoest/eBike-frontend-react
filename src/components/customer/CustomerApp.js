import Nav from "../global/Nav/NavCustomer";
import React from "react";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import Logout from "../login/Logout";
import Login from "../login/Login";
import History from "./History";
import Home from "./Home";
import Payment from "./payment/Payment";
// import Adress from "./components/customer/Adress";
import { useCookies } from "react-cookie";

function CustomerApp({ cookies }) {
  console.log(cookies);

  // // Token check TEMP
  // if (!cookies.token) {
  //   if (cookies.token === undefined) {
  //     window.location.href = "http://localhost:3000/denied";
  //     return;
  //   }
  // }

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/home" element={<Home user={cookies.user} />} />
        <Route
          exact
          path="/history"
          element={<History user={cookies.user} />}
        />
        <Route
          exact
          path="/payment"
          element={<Payment user={cookies.user} />}
        />
        <Route exact path="/logout" element={<Logout />} />
        <Route exact path="/logout" element={<Login user={cookies.user} />} />
      </Routes>
      <div className="home-container"></div>
    </div>
  );
}

export default CustomerApp;
