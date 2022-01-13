import React from "react";
import { Route, Routes } from "react-router-dom";
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

// Sections
import CustomerApp from "./components/customer/CustomerApp";
import AdminApp from "./components/admin/AdminApp";
import HomePageApp from "./components/homepage/HomePageApp";

// Components
import Login from "./components/login/Login";
import Logout from "./components/login/Logout";

// Global CSS
import "./css/Global.css";

class App extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);

    const { cookies } = props;
    this.state = {
      token: cookies.get('XSRF-TOKEN')
    };
  }

  render() {
    var content;

    if (this.state.token) {
      content = <CustomerApp token={this.state.token}/>;
    // } else if (this.state.token === "declined") {
    //   content = <AdminApp />;
    } else {
      content = <HomePageApp />;
    }

    return (
      <div>
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
        </Routes>
      </div>
    );
  }
}

export default withCookies(App);
