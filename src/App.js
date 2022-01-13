import React from "react";
import { Route, Routes } from "react-router-dom";

// Sections
import CustomerApp from "./components/customer/CustomerApp";
import AdminApp from "./components/admin/AdminApp";
import HomePageApp from "./components/homepage/HomePageApp";

// Components
import Login from "./components/login/Login";
import Logout from "./components/login/Logout";
import Auth from "./Auth";

// Global CSS
import "./css/Global.css";

const App = (props) => {
  const { cookies } = props;
  const token = cookies.get('XSRF-TOKEN');
  var toggle_active = "admin";
  console.log(cookies)

  const toggle = {
    admin: "customer",
    customer: "home",
    home: "admin",
  };

  var content;

  if (toggle_active === "customer") {
    content = <CustomerApp user="1" />;
  } else if (toggle_active === "admin") {
    content = <AdminApp />;
  } else if (toggle_active === "home") {
    content = <HomePageApp />;
  } else {
    content = <Login />;
  }

  return (
    <div>
      <button
        style={{ position: "absolute", zIndex: 100, right: "0" }}
        onClick={() => {
          toggle_active = toggle[toggle_active];
        }}
      >
        {toggle[toggle_active]}
      </button>
      {content}
      <Routes>
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/logout"
          element={<Logout />}
        />
        <Route
          path="/authorize"
          element={<Auth />}
        />
      </Routes>
    </div>
  );
}

export default App;
