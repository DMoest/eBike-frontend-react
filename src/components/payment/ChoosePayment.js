import axios from "axios";
import React from "react";
import '../customer/customer.scss';
const url = "http://127.0.0.1:8000";

class ChoosePayment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            render: false,
            active: ""
        };
    }


    async componentDidMount() {
        // await this.getTrips();
        this.setState({render: true})
    }

    chooseCredit = (id) => {
        this.setState({active: "credit"});
        // axios.put(`${url}/user/${id}`, {
        //     body: {
        //         _id: id,
        //         payment_method: "credit"
        //     }
        // })
    }

    chooseMonth = (id) => {
        this.setState({active: "month"});
        // axios.put(`${url}/user/${id}`, {
        //     body: {
        //         _id: id,
        //         payment_method: "month"
        //     }
        // })
    }

    render() {
        console.log("choose",this.props.user)
        let renderContainer = false;
        let chosen;
        if (this.state.active === "month") {
          chosen = (
            <div>
            <p>You have chosen to pay your trips monthly</p>
            </div>
          )
        } else if (this.state.active === "credit") {
            chosen = (
              <div>
              <p>You have chosen to pay with credits</p>
              </div>
            )
        }
        if(this.state.render) {
           renderContainer =
              <div className="payment-container">
                  <p>Du kan välja mellan att betala alla dina resor en gång i månaden</p>
                  <p>eller så kan du fylla på ditt saldo, då kan du betala dina resor och åka tills saldot är slut. </p>
                  <p>För att byta till saldo från månadsbetalning måste du ha betalat månadens faktura.</p>
                  <button onClick={this.chooseCredit}>Betala med saldo</button>
                  <button onClick={this.chooseMonth}>Betala varje månad</button><br />
                  {chosen}
             </div>
        }
        return (renderContainer)
    }
}

export default ChoosePayment;
