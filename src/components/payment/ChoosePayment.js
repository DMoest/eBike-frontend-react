import axios from "axios";
import React from "react";
import '../customer/customer.scss';
import './payment.scss';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm"; // not implemented yet
const url = "http://127.0.0.1:8000";

const stripePromise = loadStripe('pk_test_51JxuwuKh30a9IIAiSICB1wjtE3TwULgIyarKPNsteitiGFFavpdy4bjcNZaqWA20p8u3AwvAIV6fW3VuC0jh9zL3006yJMCYqP');

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
            <Elements stripe={stripePromise}>
              <PaymentForm />
            </Elements>
            </div>
          )
        } else if (this.state.active === "credit") {
            chosen = (
              <div>
              <p>You have chosen to pay with credits</p>
              <Elements stripe={stripePromise}>
                <PaymentForm />
              </Elements>
              </div>
            )
        } else {
          chosen = (
            <div>
            <p>Du kan välja mellan att betala alla dina resor en gång i månaden</p>
            <p>eller så kan du fylla på ditt saldo, då kan du betala dina resor och åka tills saldot är slut. </p>
            <p>För att byta till saldo från månadsbetalning måste du ha betalat månadens faktura.</p>
            </div>
          )
        }
        if(this.state.render) {
           renderContainer =
              <div className="payment-container">
                  {chosen}
                  <button onClick={this.chooseCredit}>Betala med saldo</button>
                  <button onClick={this.chooseMonth}>Betala varje månad</button><br />
             </div>
        }
        return (renderContainer)
    }
}

export default ChoosePayment;
