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

  return (
    <div>
      <HomePageApp />
      <Routes>
        <Route
          path="/"
          element={<HomePageApp />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/logout"
          element={<Logout />}
        />
        <Route
          path="/user"
          element=<CustomerApp user="1" />
        />
        <Route
          path="/admin"
          element={<AdminApp />}
        />
      </Routes>
    </div>
  );
}

export default App;
