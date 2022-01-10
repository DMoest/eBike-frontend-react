import React from "react";
import "./login.scss";
import axios from "axios";

class Login extends React.Component {
    constructor() {
        super();
        this.state = {form: 'login'};
        this.toggle = {
            login: 'register',
            register: 'login'
        };
    }

    onSubmit = (e) => {
        e.preventDefault();
        let url = "http://localhos:8000";
        if (this.state.form === 'login') {
            axios.get(`${url}/oauth/authorize`).then((response) => {
                this.setState({ user: response.data });
            })
            .then(response => {
               return response
            })
            .then(data => {
               console.log(data)
               this.props.parentCallback(data.access_token);
            })
            .catch(error => {
               console.log(error)
            })
        } else {
            axios.get(`${url}/register`).then((response) => {
                this.setState({ user: response.data });
            })
            .then(response => {
               return response
            })
            .then(data => {
               console.log(data)
               this.props.parentCallback(data.access_token);
            })
            .catch(error => {
               console.log(error)
            })
        }
    }

    render() {
        console.log(this.props.user)
        return (
            <div className="container">
            <div className="form-div">
                <p style={{textAlign: "center"}}>Är du redan medlem?'</p>
                <button className="change-btn" onClick={() => window.location.href="http://localhost:8000/oauth/authorize"}>Logga in</button>
            </div>
                <div className="button-div">
                    <p style={{textAlign: "center"}}>Har du inget konto? Registrera dig här!</p>
                    <button className="change-btn" onClick={() => window.location.href="http://localhost:8000/register"}>Registrera dig</button>
                </div>
            </div>
        );
    }
}
// {this.setState({form: "login"})}
// {this.setState({form: "register"})}

export default Login;