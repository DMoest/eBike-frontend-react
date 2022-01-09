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

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      active: "",
      toggle: "home",
      test_user: "1",
    };
  }

  handleLogin = (childData) => {};

  handleLogout = (childData) => {};

  render() {
    const toggle = {
      admin: "customer",
      customer: "home",
      home: "admin",
    };

    var content;

    if (this.state.active === "customer" || this.state.toggle === "customer") {
      content = <CustomerApp user={this.state.test_user} />;
    } else if (this.state.active === "admin" || this.state.toggle === "admin") {
      content = <AdminApp />;
    } else if (this.state.active === "home" || this.state.toggle === "home") {
      content = <HomePageApp />;
    } else {
      content = <Login parentCallback={this.handleLogin} />;
    }

    return (
      <div>
        <button
          style={{ position: "absolute", zIndex: 100, right: "0" }}
          onClick={() => {
            this.setState({ toggle: toggle[this.state.toggle] });
          }}
        >
          {toggle[this.state.toggle]}
        </button>
        {content}
        <Routes>
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/logout"
            element={<Logout parentCallback={this.handleLogout} />}
          />
          <Route
            path="/authorize"
            element={<Auth parentCallback={this.handleLogin} />}
          />
        </Routes>
      </div>
    );
  }
}

export default App;
