import React from "react";
import axios from "axios";

class Auth extends React.Component {
    constructor() {
        super();
        this.state = {form: 'login'};
    }

    onSubmit = async (type) => {
        // e.preventDefault();
        let url = "http://localhost:8000";
        if (type === 'login') {
            await axios.post(`${url}/token`, {
                code:"def50200e286222d94f8c47cdafb36629187904cb82dc29e7942c75d0e547dd62e38e31bbe191cdd2fd4fff2317f00a14240b01c23cc332b8a6c82dc967c371127d558c6b4ab7b788ada4e6215384861c63ee45c476c0a3fa8c0d32ad20588500bb36726896d77bc951b62e2caddcce3e09d8d50a7dc086cf94a88ae6bd6c05cb30d62528665df35a534da554e7626559261dcc6454b205b829dde706ec25dbac0e859a6588dcfa6a37a6cd818dfc06fb2c919359ff5a06801068986283c211d5524624dc5bfb4e82da31a60fb7a81b6e285d7a8c131dfbd6421d1963d0cc18434b1dc0ad908bcf8d66afe699db42054cadfdd8497f2afb42eb9046e231b209f7b75bf3d923fa2643829983d4344518148bf4965995cd4ed2c05805ecefc48655678ac8866554e4d890ebb1fd1f2fd7e0c1625eea9cbf23f71bf4f78a7ce8177a40949fb9d5162633ec1faa0f23f416559561ebcdf0e5e12cdb58390",
                grant_type: "authorization_code",
                client_id: 1,
                client_secret: "K1PRys1O9ZWPmUs4lQsHFXh5ie0AcnGW7Z5JDWoT",
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
        return (
            <div className="container">
            </div>
        );
    }
}

export default Auth;
