import axios from "axios";
import React from "react";
import '../customer/customer.scss';
const url = "http://127.0.0.1:8000";

class ShowPayment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            trips: [],
            render: false
        };
    }

    async componentDidMount() {
        await axios.get(`${url}/api/user/${this.props.user}`).then((response) => {
            this.setState({user: response.data});
            console.log("user", response.data)
        });
        await axios.get(`${url}/api/travel`).then((response) => {
            this.setState({trips: response.data.travels});
            console.log("trips", response.data.travels)
        });
        this.setState({render: true})
        this.calInvoice();
    }

    calInvoice = () => {
        let months = [["Januari", 0], ["Februari", 0], ["Mars", 0], ["April", 0], ["Maj", 0], ["Juni", 0], ["Juli", 0], ["Augusti", 0], ["Oktober", 0], ["November", 0], ["December", 0]]
        let amount = 0;
        // let previous = 0;
        this.state.trips.forEach((item, i) => {
            console.log(item)
            let month = item.created_at.split("-")[1] - 1;
            let previous = months[month-1]
            console.log(previous, month, months[month])
            if (months[month] !== previous) {
                months[month][1] += parseInt(item.user_id)
                previous = months[month][0]
            }
            months[month][1] += parseInt(item.user_id)
        });

    }


    render() {
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
