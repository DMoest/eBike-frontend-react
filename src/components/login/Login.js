import React from "react";
import './login.scss';
import axios from 'axios';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {form: 'login'};
        this.toggle = {
            login: 'register',
            register: 'login'
        };
        this.button = {
            login: 'registrera dig via github',
            register: 'logga in via github'
        };
    }

    onSubmit = (e) => {
        e.preventDefault();
        let url = "http://localhos:8000/auth/github";
        if (this.state.form === 'login') {
            axios.post(`${url}`, {
                // email: e.target.email.value,
                // password: e.target.password.value,
            })
            .then(response => {
               return response
            })
            .then(data => {
               console.log(data)
            })
            .catch(error => {
               console.log(error)
            })
        } else {
            axios.post(`${url}/register`, {
                firstname: e.target.fname.value,
                lastname: e.target.lname.value,
                email: e.target.email.value,
                password: e.target.password.value,
                adress: e.target.adress.value,
                postcode: e.target.postcode.value,
                city: e.target.city.value,
            })
        }
    }

    render() {
        console.log(this.props.user)
        return (
            <div className="container">
            <div style={{transform: `translate(${this.state.form === 'login' ? 0 : -350}px, 0px)`}} className="form-div">
                <p>Är du redan medlem?'</p>
                <button className="change-btn" onClick={() => {this.setState({form: this.toggle[this.state.form]})}}>{this.button[this.state.form]}</button>
            </div>
                <div style={{transform: `translate(${this.state.form === 'login' ? 0 : -350}px, 0px)`}} className="button-div">
                    <p>Har du inget konto? Registrera dig här!</p>
                    <button className="change-btn" onClick={() => {this.setState({form: this.toggle[this.state.form]})}}>{this.button[this.state.form]}</button>
                </div>
            </div>
        );
    }
}

export default Login;
