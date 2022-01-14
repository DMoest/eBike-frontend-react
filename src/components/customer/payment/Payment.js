import React from "react";
import "../customer.scss";
import ChoosePayment from "./ChoosePayment";
import ShowPayment from "./ShowPayment";

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      render: true,
      active: "choose",
    };
    this.toggle = {
      choose: "show",
      show: "choose",
    };
    this.button = {
      choose: "Välj betalningsmetod",
      show: "Visa mina betalningar",
    };
  }

  render() {
    return (
      <div className="payment-outer">
        <div className="button-div">
          <button
            className="change-btn"
            onClick={() => {
              this.setState({ active: this.toggle[this.state.active] });
            }}
          >
            {this.button[this.state.active]}
          </button>
        </div>
        <div className="payment-inner">
          {this.state.active === "choose" ? (
            <div>
              <ShowPayment id={this.props.id} />
            </div>
          ) : (
            <div>
              <ChoosePayment id={this.props.id} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Payment;
