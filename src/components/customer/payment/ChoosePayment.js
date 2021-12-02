import axios from "axios";
import React from "react";
import '../customer.scss';
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
            price: 0,
            user: {},
            consent: false,
            active: ""
        };
    }

    handlePay = async (childData) => {
        console.log(this.state.user.payment_method)
        console.log(this.state.price)
        let credit = parseInt(this.state.user.payment_method[1]) + parseInt(this.state.price);
        console.log(credit)
        if (childData.status === 200) {
            await axios.put(`${url}/api/user`, {
                _id: this.props.user,
                payment_method: ["credit", credit]
            })
        }
        this.setState({active: ""})

    }

    async componentDidMount() {
        await this.getUser()
        console.log(this.state.user)
        this.setState({render: true})
    }

    getUser = () => {
        axios.get(`${url}/api/user/${this.props.user}`).then((response) => {
            this.setState({user: response.data});
        });
    }

    chooseCredit = async () => {
        if (this.state.user.payment_method[0] === "monthly" && this.state.user.payment_method[1] === "unpaid") {
            alert("din månadsbetalning måste vara betalad innan du kan byta till saldo.")
        } else if (this.state.user.payment_method[0] === "monthly") {
            axios.put(`${url}/api/user`, {
              _id: this.props.user,
              payment_method: ["credit", 0]
            })
            this.setState({active: "credit"});
        } else {
            this.setState({active: "credit"});
        }
    }

    chooseMonth = async () => {
        if (this.state.consent) {
            axios.put(`${url}/api/user`, {
              _id: this.props.user,
              payment_method: ["monthly", ""]
            })
            this.setState({active: "month"});
        } else if (this.state.user.payment_method[0] === "monthly") {
            alert("Ditt konto är redan registrerat för månadsbetalning.")
        } else if (this.state.user.payment_method[0] === "credit") {
            alert("Om du byter till månadsbetalning förlorar du ditt saldo")
            this.setState({active: "agree"});
        }
    }

    render() {
        console.log("lol", this.state.user.payment_method )
        let renderContainer = false;
        let chosen;
        if (this.state.active === "month") {
          chosen = (
            <div class="flex-box chosen">
            <p>Du betalar nu alla dina resor en gång i månaden.</p>
            </div>
          )
        } else if (this.state.active === "credit") {
            chosen = (
              <div class="flex-box chosen">
              <p>Fyll på ditt saldo med den valda summan</p>
              <div class="price" onChange={(e) => this.setState({price: e.target.value})}>
                  <label  style={{backgroundColor: "#ffdb99"}}  class="radiobtn"><input type="radio" value="100" name="price" /> 100 kr</label><br/>
                  <label  style={{backgroundColor: "#ffc966"}} class="radiobtn"><input type="radio" value="250" name="price" /> 250 kr</label><br/>
                  <label  style={{backgroundColor: "#ffb732"}} class="radiobtn"><input type="radio" value="500" name="price" /> 500 kr</label>
              </div>
              <Elements stripe={stripePromise}>
                  <PaymentForm price={this.state.price} parentCallback={this.handlePay}/>
              </Elements>
              </div>
            )
          } else if (this.state.active === "agree") {
              chosen = (
                <div class="flex-box chosen">
                    <button class="pay-btn" onClick={async () => {await this.setState({consent: true}); this.chooseMonth()}}>Jag godkänner att jag förlorar mitt saldo</button>
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
              <div class="payment-container">
                  {chosen}
                  <button className={this.state.active} onClick={this.chooseCredit}>Betala med saldo</button>
                  <button onClick={this.chooseMonth}>Betala varje månad</button><br />
             </div>
        }
        return (renderContainer)
    }
}

export default ChoosePayment;
