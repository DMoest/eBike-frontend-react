import { useState, useEffect } from "react";
import DocumentTitle from "react-document-title";
import axios from "axios";

// Components
import ChargingStation from "./StationSingle";
import Map from "../../components/maps/Map";
import BtnMap from "../../components/global/BtnMap/BtnMap";
import StatusBar from "../../components/global/Statusbar/StatusBar";

function Stations({ city }) {
  const url = process.env.REACT_APP_API_BASE_URL + "/station/city/" + city;
  const [stations, setStations] = useState([]);

  const getStations = async () => {
    try {
      const res = await axios.get(url);
      setStations(res.data.stations);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getStations();
  }, [city]);

  return (
    <>
      <DocumentTitle title="Laddstationer"></DocumentTitle>
      <BtnMap />
      <StatusBar city={city} />
      <div className="data-map__wrapper">
        <div className="data__wrapper">
          <h1 className="header__top">Stationer</h1>
          <div className="data__inner-wrapper">
            <table className="data__table">
              <tr>
                <th>Stad</th>
                <th>Kapacitet</th>
                <th>Address</th>
                <th>Postnummer</th>
                <th>Aktiva</th>
              </tr>
              {stations.map((station) => {
                return (
                  <ChargingStation
                    key={station._id}
                    city={station.city}
                    capacity={station.capacity}
                    address={station.adress}
                    postcode={station.postcode}
                    active={station.active}
                  />
                );
              })}
            </table>
          </div>
        </div>
        <div className="map__wrapper">
          <Map type={"station"} data={stations} city={city} />
        </div>
      </div>
    </>
  );
}

export default Stations;
