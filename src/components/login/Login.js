// import BtnPrimary from "@/components/admin/components/global/BtnPrimary/BtnPrimary";
import ebike__bgLogo from "@/assets/img/ebike__bg-logo.svg";
import ebike__loginLogo from "@/assets/img/ebike__login-logo.svg";

import React from "react";
import "./login.scss";

class Login extends React.Component {
  constructor() {
    super();
    this.state = { form: "login" };
    this.toggle = {
      login: "register",
      register: "login",
    };
  }

  render() {
    return (
      <>
        <div className="login__bg">
          <img
            src={ebike__bgLogo}
            className="ebike__bgLogo"
            alt="ebike background logo"
          />
          <div className="login__btn-outer-wrapper">
            <div className="login__inner-wrapper">
              <div className="logo__outer-wrapper">
                <img src={ebike__loginLogo} alt="ebike login logo" />
              </div>
              <h1>Logga in</h1>
              <button
                className="login__btn-secondary"
                onClick={() =>
                  (window.location.href =
                    "http://localhost:8000/login/user/web/github")
                }
              >
                Logga in
              </button>
              <button
                className="login__btn-secondary"
                onClick={() =>
                  (window.location.href =
                    "http://localhost:8000/login/admin/web/github")
                }
              >
                Logga in som admin
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
