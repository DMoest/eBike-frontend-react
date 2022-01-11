import Api from "@/components/admin/helper/api";
import { useState, useEffect } from "react";
import DocumentTitle from "react-document-title";

// Components
import Station from "./StationSingle";
import Map from "@/components/admin/components/maps/Map";
import BtnMap from "@/components/admin/components/global/BtnMap/BtnMap";
import StatusBar from "@/components/admin/components/global/Statusbar/StatusBar";
import ErrorNotice from "@/components/global/ErrorNotice/ErrorNotice";

function Stations({ city }) {
  const [stations, setStations] = useState([]);
  const [error, setError] = useState(null);
  const [hideMap, setHideMap] = useState(true);

  const api = new Api();

  const getStations = () => {
    api
      .getStations(city)
      .then((res) => {
        setStations(res.data.stations);
      })
      .catch((err) => {
        setError(err);
      });
  };

  useEffect(() => {
    getStations();
  }, [city]);

  return (
    <>
      <DocumentTitle title="Laddstationer"></DocumentTitle>
      <BtnMap setHideMap={setHideMap} hideMap={hideMap} />
      <StatusBar city={city} />

      {error ? <ErrorNotice err={error} /> : null}

      <div className="data-map__wrapper">
        <div className="data__wrapper">
          <h1 className="header__top">Stationer</h1>
          <div className="data__inner-wrapper">
            <table className="data__table">
              <thead>
                <tr>
                  <th>Stad</th>
                  <th>Kapacitet</th>
                  <th>Address</th>
                  <th>Postnummer</th>
                  <th>Aktiva</th>
                </tr>
              </thead>
              <tbody>
                {stations.map((station) => {
                  return (
                    <Station
                      key={station._id}
                      city={station.city}
                      capacity={station.capacity}
                      address={station.adress}
                      postcode={station.postcode}
                      active={station.active}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className={hideMap ? "map__hidden" : null}>
          <div className="map__wrapper">
            <Map type={"station"} data={stations} city={city} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Stations;
