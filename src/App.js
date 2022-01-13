import React from "react";
import { Route, Routes } from "react-router-dom";

// Sections
import CustomerApp from "./components/customer/CustomerApp";
import AdminApp from "./components/admin/AdminApp";
import HomePageApp from "./components/homepage/HomePageApp";
import Denied from "./components/Denied/Denied";

// Components
import Login from "./components/login/Login";
import Logout from "./components/login/Logout";
import Auth from "./Auth";

// TEMP
import Stations from "./components/admin/pages/Stations/Stations";

// Global CSS
import "./css/Global.css";

// Params
const queryParams = new URLSearchParams(window.location.search) || null;
const id = queryParams.get("_id") || null;
const userClass = queryParams.get("userClass") || null;
const token = queryParams.get("token") || null;

const App = (props) => {
  const { cookies } = props;
  // const token = cookies.get("XSRF-TOKEN");
  console.log(cookies);
  console.log(id, userClass, token);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePageApp />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminApp cookies={cookies} />} />
        {/* <Route
          path="/admin/stations"
          element={<Stations city={"Stockholm"} />}
        /> */}
        <Route path="/user" element={<CustomerApp cookies={cookies} />} />
        <Route path="/denied" element={<Denied />} />
      </Routes>
    </>
  );
};

export default App;
