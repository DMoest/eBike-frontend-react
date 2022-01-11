import axios from "axios";
import React from "react";
import './customer.scss';
const url = "http://localhost:8000/api/v1";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            render: false,
            user: []
        };
    }

    async componentDidMount() {
        await this.getUser();
        // localStorage.setItem('code', "lol");
        let code = localStorage.getItem('code1')
        console.log("session", code)
        this.setState({render: true})
    }
    getUser = async () => {
        await axios.get(`${url}/user/${this.props.user}`).then((response) => {
            this.setState({user: response.data});
            console.log(response.data)
        });
    }


    render() {
        let renderContainer = false;
        if (this.state.render) {
            let user = this.state.user;
            let payment;
            console.log(user.payment_method)
            if (user.payment_method === "credit") {
              payment = (
                <div>
                <p>Du betalar dina resor med saldo.</p>
                <p>Ditt saldo: {user.payment_status} kr</p>
                </div>
              )
            } else if (user.payment_method === "monthly") {
              payment = (
                <p>Du betalar dina resor sista dagen varje månad.</p>
              )
           }
           renderContainer =
              <div className="grid-container">
              <h2>Hej {this.state.user.firstname}!</h2><br />
                  <div>
                      {payment}
                      <br />
                      <h2>Dina personuppgifter</h2>
                      <br />
                      <div className="trips-div">
                        <p>
                          Namn <br /> {user.firstname} {user.lastname}
                        </p>
                        <br />
                        <p>
                          Adress <br /> {user.adress}, {user.postcode}, {user.city}
                        </p>
                        <br />
                        <p>
                          Email <br /> {user.email}
                        </p>
                        <br />
                        <p>
                          Telefon <br /> {user.phone}
                        </p>
                      </div>
                  </div>
              </div>
        }
        return (renderContainer)
    }
}

export default Home;
