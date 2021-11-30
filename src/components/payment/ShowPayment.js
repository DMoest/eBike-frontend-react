import axios from "axios";
import React from "react";
import '../customer/customer.scss';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm"; // not implemented yet
const url = "http://127.0.0.1:8000";
const stripePromise = loadStripe('pk_test_51JxuwuKh30a9IIAiSICB1wjtE3TwULgIyarKPNsteitiGFFavpdy4bjcNZaqWA20p8u3AwvAIV6fW3VuC0jh9zL3006yJMCYqP');

class ShowPayment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            trips: [],
            months: [],
            price: 0,
            active: "",
            render: false
        };
    }

    handlePay = async (childData) => {
        console.log(childData)
        if (childData.status === 200) {
            await axios.put(`${url}/api/user`, {
                _id: this.props.user,
                payment_method: ["monthly", "paid"]
            })
            await this.payUnpaid();
            await this.getUser();
            await this.calInvoice();
        }
        this.setState({active: ""})
    }

    payUnpaid = async () => {
        await this.state.trips.forEach((item, i) => {
            if (item.status === "unpaid") {
              axios.put(`${url}/api/travel`, {
                  _id: item._id,
                  status: "paid"
              })
            }
        });
    }

    async componentDidMount() {
        await this.getUser();
        await axios.get(`${url}/api/travel`).then((response) => {
            this.setState({trips: response.data.travels});
            console.log("trips", response.data.travels)
        });
        this.calInvoice();
        this.setState({render: true});
    }

    getUser = () => {
        axios.get(`${url}/api/user/${this.props.user}`).then((response) => {
            this.setState({user: response.data});
        });
    }

    calInvoice = async () => {
        this.setState({months: []});
        let months = [["Januari", 0], ["Februari", 0], ["Mars", 0], ["April", 0], ["Maj", 0], ["Juni", 0], ["Juli", 0], ["Augusti", 0], ["September", 0], ["Oktober", 0], ["November", 0], ["December", 0]]
        let amount = 0;
        let bills = []
        await this.state.trips.forEach((item, i) => {
            let month = item.created_at.split("-")[1] - 1;
            let previous = months[month-1]
            console.log(previous, month, months[month])
            if (months[month] !== previous) {
                previous = months[month][0]
            }
            if (item.status === "unpaid") {
                months[month][1] += item.price;
            }
        });
        await months.forEach((item, i) => {
            if (i === months.length-2 && this.state.user.payment_method[1] === "unpaid") {
                item.push("button");
                this.setState({price: item[1]});
            }
            if (item[1] !== 0) {
                bills.push(item);
            }
        });
        this.setState({months: bills})
        console.log("Months", this.state.months, "trips", this.state.trips)
    }

    render() {
        let renderContainer = false;
        let button;
        let content;
        if (this.state.active === "pay") {
            content = (
              <div class="flex-box">
              <br/><p>Fyll i kortuppgifter för at betala månadens resor.</p><br/>
              <Elements stripe={stripePromise}>
                  <PaymentForm price={this.state.price} parentCallback={this.handlePay}/>
              </Elements>
              </div>
            )
        } else if (this.state.months.length === 0){
            content = (
                <p>Du har inga väntande betalningar.</p>
            )

        } else {
            content = (
            <div className="payment-container">
            {this.state.months.map((trip) => {
                  console.log("trip", trip)
                  return <div className="trips-div">
                      <p>Månad: {trip[0]}</p><br />
                      <p>Summa: {trip[1]}</p><br />
                      {this.state.user.payment_method[0] === "monthly" ? (<p>Status: {this.state.user.payment_method[1]}</p>):(<p>Betald med saldo</p>)}<br/>
                      {trip[2] === 'button' ? (<button onClick={() => {this.setState({active: "pay"})}}>Betala</button>):(<p>Denna månad är betalad</p>)}
                  </div>
              })}
           </div>)
        }
        if(this.state.render) {
           renderContainer = (
              <div>{content}</div>
           )
        }
        if (this.state.months === []) return "Det finns inga resor i din historik";
        return (renderContainer)
    }
}

export default ShowPayment;
