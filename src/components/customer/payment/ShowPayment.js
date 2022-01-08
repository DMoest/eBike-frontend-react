import axios from "axios";
import React from "react";
import '../customer.scss';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm"; // not implemented yet
const url = "http://127.0.0.1:8000";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

class ShowPayment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            trips: [],
            months: [],
            current: ["", 0],
            price: 0,
            active: "",
            render: false
        };
    }

    async componentDidMount() {
        await this.getUser();
        await axios.get(`${url}/api/v1/travel`).then((response) => {
            this.setState({trips: response.data.travels});
            console.log("trips", response.data.travels)
        });
        this.calInvoice();
        const date = this.countdown();
        console.log("HALLÅ",date)
        if (date === 0) {
            this.payUnpaid();
        }
        this.setState({render: true});
    }

    getUser = () => {
        axios.get(`${url}/api/v1/user/${this.props.user}`).then((response) => {
            this.setState({user: response.data});
        });
    }

    checkPayStatus = async () => {
        console.log(this.state.current[1])
        if (this.state.current[1] > 0) {
            axios.put(`${url}/api/v1/user`, {
              _id: this.props.user,
              payment_method: ["monthly", "unpaid"]
            })
        }
    }

    payUnpaid = async () => {
        await this.state.trips.forEach((item, i) => {
              if (item.status === "unpaid") {
                axios.put(`${url}/api/v1/travel`, {
                    _id: item._id,
                    status: "paid"
                })
            }
        });
    }

    calInvoice = async () => {
        this.setState({months: []});
        let months = [["Januari", 0], ["Februari", 0], ["Mars", 0], ["April", 0], ["Maj", 0], ["Juni", 0], ["Juli", 0], ["Augusti", 0], ["September", 0], ["Oktober", 0], ["November", 0], ["December", 0]];
        let bills = []
        const d = new Date();
        const m = d.getMonth();
        let curMonth = months[m][0];
        let unpaid = 0
        await this.state.trips.forEach((item, i) => {
            let month = item.created_at.split("-")[1] - 1;
            let previous = months[month-1]
            if (months[month] !== previous) {
                previous = months[month][0]
            }
            if (month === m && item.status === "unpaid") {
                unpaid += item.price;
            } else {
                months[month][1] += item.price
            }
        });
        await months.forEach((item, i) => {
            if (item[0] === curMonth) {
                this.setState({price: item[1]});
            }
            if (item[1] !== 0) {
                bills.push(item);
                console.log(item)
            }
        });
        await this.setState({months: bills, current: [curMonth, unpaid, this.countdown()]})
        await this.checkPayStatus();
        console.log("Months", this.state.months, "current", this.state.current)
    }

    countdown = () => {
        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        var currentMonth = currentDate.getMonth();
        var currentMonthLastDate = (new Date(currentYear, currentMonth, 0)).getDate();
        var daysLeftInMonth = currentMonthLastDate - currentDate.getDate();
        return daysLeftInMonth;
    }

    render() {
        let renderContainer = false;
        let content;
        console.log("current", this.state.user.payment_method)
        if (this.state.active === "pay") {
            content = (
              <div class="flex-box">
              <br/><p>Fyll i kortuppgifter för att betala månadens resor.</p><br/>
              <Elements stripe={stripePromise}>
                  <PaymentForm price={this.state.price} parentCallback={this.handlePay}/>
              </Elements>
              </div>
            )
        } else if (this.state.months.length === 0){
            content = (
                <p>Du har inga väntande eller tidigare betalningar.</p>
            )
        } else {
            content = (
            <div className="payment-container">
            <h4>Kommande betalningar</h4>
            {this.state.current[1] > 0 ?
                <div className="trips-div">
                    <p>Månad: {this.state.current[0]}</p><br />
                    <p>Summa: {this.state.current[1]} kr</p><br />
                    {this.state.current[2] ? (<p>Dagar kvar till betalning: {this.state.current[2]}</p>):(<p></p>)}<br/>
                </div>:
                <p>Inga kommande betalningar</p>
            }

            <br /><h4>Tidigare betalningar</h4>
            {this.state.months.map((trip) => {
                  return <div className="trips-div">
                      <p>Månad: {trip[0]}</p><br />
                      <p>Summa: {trip[1]} kr</p><br />
                      {trip[2] === 'unpaid' ? (<p>Dagar kvar till betalning: {trip[3]}</p>):(<p>Denna månad är betalad</p>)}
                  </div>
              })}

           </div>)
        }
        if(this.state.render) {
           renderContainer = (
              <div>{content}</div>
           )
        }
        if (this.state.months === []) return "Det finns inga väntande betalningar";
        return (renderContainer)
    }
}

export default ShowPayment;
