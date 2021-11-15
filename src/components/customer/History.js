// import axios from "axios";
import React from "react";
import './customer.scss';
const GEOCODE_URL = "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=pjson&langCode=EN&location=";

class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            render: false,
            trips: [],
            test:  [
                {
                    bike_id: 123,
                    city: "Umeå",
                    start_time: '2021-09-11 12:30:12',
                    stop_time: '2021-09-11 12:39:39',
                    start_longitude: 20.26218702049231,
                    start_latitude: 63.82083799007685,
                    stop_longitude: 20.26506354569229,
                    stop_latitude: 63.83095680023798,
                    price: 30,
                    status: "betalad"
                },
                {
                    bike_id: 124,
                    city: "Umeå",
                    start_time: '2021-11-10 14:39:32',
                    stop_time: '2021-11-10 15:01:59',
                    start_longitude: 20.26928702049231,
                    start_latitude: 63.82083799007685,
                    stop_longitude: 20.26506358969229,
                    stop_latitude: 63.83091480023798,
                    price: 45,
                    status: "betalad"
                }
            ]
        };
    }

    async componentWillMount() {
        for (const trip of this.state.test) {
            await this.getAddress("start", trip.start_longitude, trip.start_latitude)
            await this.getAddress("stop", trip.stop_longitude, trip.stop_latitude)
            let start = this.getDate(trip.start_time);
            let stop = this.getDate(trip.stop_time);
            this.state.trips.push({
                bike_id: trip.bike_id,
                city: trip.city,
                date: stop.date,
                year: stop.year,
                start_time: start.time,
                stop_time: stop.time,
                start_spot: this.state.start,
                stop_spot: this.state.stop,
                price: trip.price,
                status: trip.status
            })
        }
        this.setState({render: true})
    }



    getDate(timestamp) {
        let months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"]
        let stamp = timestamp.split(" ");
        let date = stamp[0].split("-");
        let time = stamp[1].split(":")
        let datetime = {
            date: `${date[2]}/${date[1]}/${date[0]}`,
            time: `${time[0]}:${time[1]}`,
            year: `${months[date[1]-1]} ${date[0]}`
        };
        return datetime;
    }

    async getAddress(spot, lng, lat)  {
        await fetch(GEOCODE_URL+`${lng},${lat}`)
        .then(response => {
            return response.json();
        })
        .then(result => {
            let res = (result.address !== undefined) ? result.address.ShortLabel : "Okänd adress";
            if (spot === "start") {
                this.setState({start: res})
            } else {
                this.setState({stop: res})
            }
        });

    }

    // function getCity(id) {
        // axios.get(`${url}/city/${id}`).then((response) => {
        //     const city = respons.data.name
        // });
        // return city;
    // }

    render() {
        let renderContainer = false;
        let year = "November 2021";
        if(this.state.render) {
           renderContainer =
              <div className="grid-container">
              <h1>Dina tidigare resor</h1>
              <h2>{year}</h2><br />
                 <div className="trips-container">
                     {this.state.trips.map((trip) => {
                           return <div className="trips-div">
                               <p>Cykel-id: {trip.bike_id}</p><br />
                               <p>Stad: {trip.city}</p><br />
                               <p>Datum: {trip.date}</p><br />
                               <p>Start: {trip.start_spot}, {trip.start_time}</p><br />
                               <p>Stop: {trip.stop_spot}, {trip.stop_time}</p><br />
                               <p>Pris: {trip.price} kr</p><br />
                               <p>Status: {trip.status}</p>
                           </div>
                       })}
                   </div>
             </div>
        }
        return (renderContainer)
    }
}

export default History;
