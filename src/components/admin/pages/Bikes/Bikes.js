import axios from "axios";
import DocumentTitle from "react-document-title";
import { useState, useEffect } from "react";
import Lottie from "react-lottie";

// Components
import Bike from "./BikeSingle";
import Map from "../../components/maps/Map";
import BtnMap from "../../components/global/BtnMap/BtnMap";
import StatusBar from "../../components/global/Statusbar/StatusBar";

// Lottie animations
import loading__lottie from "../../assets/lottie/loading__lottie.json";

function Bikes({ city }) {
  const url = process.env.REACT_APP_API_BASE_URL + "/bike/city/" + city;
  const [bikes, setBikes] = useState([]);
  const [lottieIsStopped, setLottieIsStopped] = useState(true);
  const [hideMap, setHideMap] = useState(true);

  // TODO: Breakout this
  const getBikes = async () => {
    try {
      const res = await axios.get(url);
      setBikes(res.data.bikes);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBikes();
    setLottieIsStopped(false);

    const fetchDataInterval = setInterval(() => {
      getBikes();
      console.log("New positions set");
      setLottieIsStopped(false);
    }, 10000);

    return () => clearInterval(fetchDataInterval);
  }, [city]);

  // Lottie animation options
  const defaultLottieOptions = {
    loop: false,
    autoplay: false,
    animationData: loading__lottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // Status color
  function getBikeStatusColor(bike) {
    return bike.status === "available"
      ? "#28C941"
      : bike.status === "in_service"
      ? "#F4D25E"
      : bike.status === "broken"
      ? "#EE6A6A"
      : "#EE6A6A";
  }

  // Status to swedish
  function getBikeStatusSwedish(bike) {
    return bike.status === "available"
      ? "Tillgänglig"
      : bike.status === "in_service"
      ? "Repereras"
      : bike.status === "broken"
      ? "Ur funktion"
      : "Ingen information";
  }

  // Activity to swedish
  function getBikeActiveSwedish(bike) {
    return bike.active === "true" ? "Ja" : "Nej";
  }

  return (
    <>
      <DocumentTitle title="Cyklar"></DocumentTitle>
      <BtnMap setHideMap={setHideMap} hideMap={hideMap} />
      <StatusBar city={city} />
      <div className="data-map__wrapper">
        <div className="data__wrapper">
          <div className="data__heading-wrapper">
            <h1 className="header__top">Cyklar</h1>
            <Lottie
              options={defaultLottieOptions}
              height={30}
              width={30}
              isStopped={lottieIsStopped}
              eventListeners={[
                {
                  eventName: "complete",
                  callback: () => setLottieIsStopped(true),
                },
              ]}
            />
          </div>

          <div className="data__inner-wrapper">
            <table className="data__table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Stad</th>
                  <th>Hastighet</th>
                  <th>Batteri</th>
                  <th>Status</th>
                  <th>Aktiv</th>
                </tr>
              </thead>
              <tbody>
                {bikes.map((bike) => {
                  bike.statusColor = getBikeStatusColor(bike);
                  bike.status_swedish = getBikeStatusSwedish(bike);
                  bike.active = getBikeActiveSwedish(bike);

                  return (
                    <Bike
                      key={bike._id}
                      id={bike._id}
                      city={bike.city}
                      speed={bike.speed}
                      battery={bike.battery}
                      status={bike.status_swedish}
                      statusColor={bike.statusColor}
                      active={bike.active}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className={hideMap ? "map__hidden" : null}>
          <div className="map__wrapper">
            <Map type={"bike"} data={bikes} city={city} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Bikes;
