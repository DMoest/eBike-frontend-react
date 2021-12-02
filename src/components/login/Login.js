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
            login: 'registrera dig',
            register: 'logga in'
        };
    }

    onSubmit = (e) => {
        e.preventDefault();
        let url = "http://127.0.0.1:8000/auth/github";
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
                <div style={{transform: `translate(${this.state.form === 'login' ? 0 : 350}px, 0px)`}} className="form-div">
                    {this.state.form === 'login' ?
                        <form onSubmit={this.onSubmit}>
                            <input name="email" placeholder="Email" type="text" />
                            <input name="password" placeholder="Lösenord" type="password" />
                            <button className="button-primary">Logga in</button>
                        </form>:
                        <form onSubmit={this.onSubmit}>
                            <input name="fname" placeholder="Förnamn" type="text" />
                            <input name="lname" placeholder="Efternamn" type="text" />
                            <hr/>
                            <input name="email" placeholder="Email" type="text" />
                            <input name="phone" placeholder="Telefon" type="text" />
                            <input name="password" placeholder="Lösenord" type="password" />
                            <input name="password" placeholder="Upprepa lösenord" type="password" />
                            <hr/>
                            <input name="adress" placeholder="Address" type="text" />
                            <input name="postcode" placeholder="Postkod" type="text" />
                            <input name="city" placeholder="Stad" type="text" />
                            <button className="button-primary">Registrera dig</button>
                        </form>
                    }
                </div>
                <div style={{transform: `translate(${this.state.form === 'login' ? 0 : -350}px, 0px)`}} className="button-div">
                    <p>{this.state.form === 'login' ? 'Har du inget konto? Registrera dig här!' : 'Är du redan medlem?'}</p>
                    <button className="change-btn" onClick={() => {this.setState({form: this.toggle[this.state.form]})}}>{this.button[this.state.form]}</button>
                </div>
            </div>
        );
    }
}

export default Login;
