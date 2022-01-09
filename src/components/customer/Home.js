import axios from "axios";
import React from "react";
import './customer.scss';
const url = "http://127.0.0.1:8000";

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
        this.setState({render: true})
    }
    getUser = async () => {
        await axios.get(`${url}/api/v1/user/${this.props.user}`).then((response) => {
            this.setState({user: response.data});
            console.log(response.data)
        });
    }


    render() {
        let renderContainer = false;
        if (this.state.render) {
            let user = this.state.user.payment_method;
            console.log(this.state.user.payment_method)
            if (this.state.user.payment_method === "credit") {
              user = (
                <div>
                <p>Du betalar dina resor med saldo.</p>
                <p>Ditt saldo: {this.state.user.payment_status} kr</p>
                </div>
              )
            } else if (this.state.user.payment_method === "monthly") {
              user = (
                <p>Du betalar dina resor sista dagen varje månad.</p>
              )
           }
           renderContainer =
              <div className="grid-container">
              <h2>Hej {this.state.user.firstname}!</h2><br />
                  <div className="trips-container">
                      {user}
                  </div>
              </div>
        }
        return (renderContainer)
    }
}

export default Home;
