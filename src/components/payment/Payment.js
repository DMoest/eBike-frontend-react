import axios from "axios";
import React from "react";
import '../customer/customer.scss'
import ChoosePayment from "./ChoosePayment";
import ShowPayment from "./ShowPayment";;
const url = "http://127.0.0.1:8000";

class Payment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            render: true,
            active: "choose",
        };
        this.toggle = {
            choose: 'show',
            show: 'choose'
        };
        this.button = {
            choose: 'Välj betalningsmetod',
            show: 'Visa mina betalningar'
        };
    }

    // componentDidMount() {
    //     console.log(this.props.user)
    // }

    render() {
        console.log("pay", this.props.user)
        return (
            <div >
                <div  className="button-div">
                    <button className="change-btn" onClick={() => {this.setState({active: this.toggle[this.state.active]})}}>{this.button[this.state.active]}</button>
                </div>
                <div  className="form-div">
                    {this.state.active === 'choose' ?
                        <div><ShowPayment user={this.props.user}/></div>:
                        <div><ChoosePayment user={this.props.user}/></div>
                    }
                </div>

            </div>
        );
    }
}

export default Payment;
