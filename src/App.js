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
      <Routes>
        <Route
          path="/"
          element={<HomePageApp />}
        />
        <Route
          path="/logout"
          element={<Logout />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/admin"
          element={<AdminApp />}
        />
        <Route
          path="/user"
          element={<CustomerApp />}
        />
    </Routes>
    </div>
  );
}

export default App;
