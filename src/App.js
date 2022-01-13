import React from "react";
import { Route, Routes } from "react-router-dom";

// Sections
import CustomerApp from "./components/customer/CustomerApp";
import AdminApp from "./components/admin/AdminApp";
import HomePageApp from "./components/homepage/HomePageApp";

// Components
import Login from "./components/login/Login";
import Logout from "./components/login/Logout";

// Global CSS
import "./css/Global.css";

const queryParams = new URLSearchParams(window.location.search) || null;
const id = queryParams.get("_id") || null;
const userClass = queryParams.get("userClass") || null;
const token = queryParams.get("token") || null;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      token: token,
      id: id,
      userClass: userClass,
    };
  }

  render() {
    var content;

    if (this.state.token) {
      if (this.state.userClass === "user") {
        content = <CustomerApp token={this.state.token} id={this.state.id} />;
      }

      if (this.state.userClass === "admin") {
        content = <AdminApp token={this.state.token} id={this.state.id} />;
      }
    } else {
      content = <HomePageApp />;
    }

    return (
      <div>
        {content}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    );
  }
}

export default App;
