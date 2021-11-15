
// const url = "api";
const test = [
    {
        bike_id: 123,
        city: "Umeå",
        start_time: '2021-11-11 12:30:12',
        stop_time: '2021-11-11 12:39:39',
        start_longitude: 20.26218702049231,
        start_latitude: 63.82083799007685,
        stop_longitude: 20.26506354569229,
        stop_latitude: 63.83095680023798,
        price: 30,
        status: "betalad"
    }
]

export default function History() {
  const [trips, setTrips] = useState();

  useEffect((trips) => {
      // axios.get(`${url}/travel/user/${this.props.user}`).then((response) => {
          test.map((trip) => {
              let tri = [];
              let start = getDate(trip.start_time);
              let stop = getDate(trip.stop_time);
              tri.push({
                  bike_id: trip.bike_id,
                  city: trip.city,
                  // city: getCity(trip.city_id),
                  date: start.date,
                  start_time: start.time,
                  stop_time: stop.time,
                  start_spot: getAddress(trip.start_longitude, trip.start_latitude),
                  stop_spot: getAddress(trip.stop_longitude, trip.stop_latitude),
                  price: trip.price,
                  status: trip.status
              })
                setTrips(tri);
                console.log(tri)
          })
      // });
  }, []);

    // function getCity(id) {
        // axios.get(`${url}/city/${id}`).then((response) => {
        //     const city = respons.data.name
        // });
        // return city;
    // }

    function getDate(timestamp) {
        let stamp = timestamp.split(" ");
        let date = stamp[0].split("-");
        let time = stamp[1].split(":")
        let datetime = {
            date: `${date[2]}/${date[1]}`,
            time: `${time[0]}.${time[1]}`
        };
        return datetime;
    }

    async function getAddress(lng, lat)  {
        const data = await ( await fetch(GEOCODE_URL+`${lng},${lat}`)).json();
        console.log(data.address);
        const address = (data.address !== undefined) ? data.address.ShortLabel : "Unknown";
        return address;
    }

  // if (!trips) return "Det finns inga resor i din historik";
    return (
      <div>
          <h1>Dina tidigare resor</h1>
          <div className="trips-container">
          {trips.map((trip) =>
              <div className="trips-div">
                  <p>Cykel-id: {trip.bike_id}</p><br />
                  <p>Stad: {trip.city}</p><br />
                  <p>Datum: {trip.date}</p><br />
                  <p>Start: kl {trip.start_time} {trip.start_spot}</p><p>Stop: kl {trip.stop_time} {trip.stop_spot}</p><br />
                  <p>Pris: {trip.price}</p><br />
                  <p>Status: {trip.status}</p>
              </div>
          )}
          </div>
      </div>
    );
}
