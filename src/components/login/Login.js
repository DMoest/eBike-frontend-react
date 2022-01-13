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
      <div className="container">
        <div className="form-div">
          <p style={{ textAlign: "center" }}>Är du redan medlem?</p>
          <button
            className="change-btn"
            onClick={() =>
              (window.location.href =
                "http://localhost:8000/login/user/web/github")
            }
          >
            Logga in
          </button>
        </div>
        <div className="button-div">
          <p style={{ textAlign: "center" }}>
            Har du inget konto? Registrera dig här!
          </p>
          <button
            className="change-btn"
            onClick={() =>
              (window.location.href = "http://localhost:8000/login/admin/web/github")
            }
          >
            Logga in som admin
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
