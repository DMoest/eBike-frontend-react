import axios from "axios";
import React from "react";
import '../customer/customer.scss';
const url = "http://127.0.0.1:8000";

class ShowPayment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            render: false
        };
    }


    async componentDidMount() {
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
        console.log("show",this.props.user)
        let renderContainer = false;
        if(this.state.render) {
           renderContainer =
              <div className="payment-container">
                  <p>Här visas betalningar/saldo/fakturor</p>
             </div>
        }
        return (renderContainer)
    }
}

export default ShowPayment;
