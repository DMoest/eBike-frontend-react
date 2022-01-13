import DocumentTitle from "react-document-title";
import { useState, useEffect } from "react";
import Lottie from "react-lottie";

// helpers
import Api from "@/components/admin/helper/api";
import {
  getBikeStatusColor,
  getBikeStatusSwedish,
  getBikeActiveSwedish,
} from "@/components/admin/helper/functions";

// Components
import Bike from "./BikeSingle";
import Map from "@/components/admin/components/maps/Map";
import BtnMap from "@/components/admin/components/global/BtnMap/BtnMap";
import StatusBar from "@/components/admin/components/global/Statusbar/StatusBar";
import ErrorNotice from "@/components/global/ErrorNotice/ErrorNotice";

// Lottie animations
import loading__lottie from "@/components/admin/assets/lottie/loading__lottie.json";

function Bikes({ city, token }) {
  const [bikes, setBikes] = useState([]);
  const [lottieIsStopped, setLottieIsStopped] = useState(true);
  const [hideMap, setHideMap] = useState(true);
  const [error, setError] = useState(null);

  const api = new Api(token);

  const getBikes = () => {
    api
      .getBikes(city || "Stockholm")
      .then((res) => {
        console.log("CYKLAR: ", res.data.bikes.length);
        setBikes(res.data.bikes);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  };

  useEffect(() => {
    getBikes();
    setLottieIsStopped(false);

    // Call every n seconds
    const fetchDataInterval = setInterval(() => {
      getBikes();
      setLottieIsStopped(false);
      console.log("New positions set");
    }, process.env.REACT_APP_API_INTERVAL || 10000);

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

  return (
    <>
      <DocumentTitle title="Cyklar"></DocumentTitle>
      <BtnMap setHideMap={setHideMap} hideMap={hideMap} />
      <StatusBar city={city} />

      {error ? <ErrorNotice err={error} /> : null}

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
                  bike.activity = getBikeActiveSwedish(bike);

                  return (
                    <Bike
                      key={bike._id}
                      id={bike._id}
                      city={bike.city}
                      speed={bike.speed}
                      battery={bike.battery}
                      status={bike.status_swedish}
                      statusColor={bike.statusColor}
                      active={bike.activity}
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
