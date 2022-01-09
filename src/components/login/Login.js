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

    onSubmit = async (type) => {
        // e.preventDefault();
        let url = "http://localhost:8000";
        if (type === 'login') {
            await axios.post(`${url}/oauth/token`, {
              code:"def50200676798a01cdf3ede0ac25623d67cc622c3361e0653b9b54d427a59dfc6d937f0e8e4aaa0d21782f1efce811a146c6e036c7371fe2fa8616f5b99084f1db43eed62a22cc88568d9b253e0798aaddcf3e4bb48bddbd477c2ffd4917b9433fe5943aa6c1d8318eca794294d3df89411e390808b39094082abdbf7f4d61126e7a706f76a928d474cac12ec23a85fa25577c52823c64242fbb40e6f3dd4a379549727479ec1acc1c1082b21353dd5682fc04e45da44507b1bbe93534205dc3cad869ade8c77993ddae745239cec67e317770ea79f7aff6a44b4d17342554e13c6a82755e846766e934898954710ffbcf1a93c1657d5813c4e7745424bcc45bbd1bd31a1019ce8f5686485faefd069683969ac80d2df20b04ed88e25875d81b64624310e097111f454dd882ef64c8f92397411b62e06395c5c8fca0ff8474c7e97ec4f067bdda8d913257dbe33dfd201a20032704cb839bf7af375",
              grant_type: "authorization_code",
              client_id: 3,
              client_secret: "kV2aZqHFMMhcur4DaQFI2IQBt1EuERC4cofZhedr",
              redirect_uri: "http://localhost:3000/home"
            })
            .then(res => {
                console.log(res,res.data);
            })
        } else {
            axios.get(`${url}/register`).then((response) => {
                this.setState({ user: response.data });
            });
        }
    }

    render() {
        // console.log(this.props.user)
        return (
            <div className="container">
            <div className="form-div">
                <p style={{textAlign: "center"}}>Är du redan medlem?'</p>
                <button className="change-btn" onClick={() => {this.onSubmit("login")}}>Logga in</button>
            </div>
                <div className="button-div">
                    <p style={{textAlign: "center"}}>Har du inget konto? Registrera dig här!</p>
                    <button className="change-btn" onClick={this.onSubmit("register")}>Registrera dig</button>
                </div>
            </div>
        );
    }
}

export default Login;
