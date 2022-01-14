// import Api from "@/components/admin/helper/api";
import axios from "axios";
import React from "react";
import "./customer.scss";

const url = "http://localhost:8000/api/v1";
const GEOCODE_URL =
  "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=pjson&langCode=EN&location=";

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      render: false,
      trips: [],
    };
  }

  async componentDidMount() {
    await this.getTrips();
    this.setState({ render: true });
  }
  getTrips = async () => {
    // var travels = Api.getTravels();
    var travels;
    await axios.get(`${url}/travel/user/${this.props.id}`).then((response) => {
      travels = response.data;
    });
    for (const trip of travels) {
      console.log(trip);
      await this.getAddress("start", trip.start_longitude, trip.start_latitude);
      await this.getAddress("stop", trip.stop_longitude, trip.stop_latitude);
      let start = this.getDate(trip.created_at);
      let stop = this.getDate(trip.updated_at);
      this.state.trips.push({
        bike_id: trip.bike_id,
        city: this.state.city,
        date: stop.date,
        year: stop.year,
        start_time: start.time,
        stop_time: stop.time,
        start_spot: this.state.start,
        stop_spot: this.state.stop,
        price: trip.price,
        payment_status: trip.payment_status,
      });
    }
  };

  getDate(timestamp) {
    let months = [
      "Januari",
      "Februari",
      "Mars",
      "April",
      "Maj",
      "Juni",
      "Juli",
      "Augusti",
      "September",
      "Oktober",
      "November",
      "December",
    ];
    let stamp = timestamp.split("T");
    let date = stamp[0].split("-");
    let time = stamp[1].split(":");
    let datetime = {
      date: `${date[2]}/${date[1]}/${date[0]}`,
      time: `${time[0]}:${time[1]}`,
      year: `${months[date[1] - 1]} ${date[0]}`,
    };
    return datetime;
  }

  async getAddress(spot, lng, lat) {
    await fetch(GEOCODE_URL + `${lng},${lat}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        let res =
          result.address !== undefined
            ? result.address.ShortLabel
            : "Okänd adress";
        let city =
          result.address !== undefined ? result.address.City : "Okänd Stad";
        if (spot === "start") {
          this.setState({ start: res });
          this.setState({ city: city });
        } else {
          this.setState({ stop: res });
          this.setState({ city: city });
        }
      });
  }

  render() {
    let renderContainer = false;
    if (this.state.render) {
      renderContainer = (
        <div className="grid-container">
          <h2>Tidigare resor</h2>
          <br />
          {this.state.trips.length > 0 ?
            <div className="trips-container">
              {this.state.trips.map((trip) => {
                return (
                  <div className="trips-div">
                    <p>
                      Cykel-id <br /> {trip.bike_id}
                    </p>
                    <br />
                    <p>
                      Stad <br /> {trip.city}
                    </p>
                    <br />
                    <p>
                      Datum <br /> {trip.date}
                    </p>
                    <br />
                    <p>
                      Start <br /> {trip.start_time}, {trip.start_spot}
                    </p>
                    <br />
                    <p>
                      Stop <br /> {trip.stop_time}, {trip.stop_spot}
                    </p>
                    <br />
                    <p>
                      Pris <br /> {trip.price} kr
                    </p>
                    <br />
                    {trip.payment_status === "unpaid" ? (
                      <p>
                        Status <br />
                        Obetald
                      </p>
                    ) : (
                      <p>
                        Status <br />
                        Betald
                      </p>
                    )}
                  </div>
                );
              })}
            </div>:
            <p>Du har inga resor i din historik</p>
          }
        </div>
      );
    }
    return (renderContainer)
  }
}

export default History;
