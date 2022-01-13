import { Marker, Popup } from "react-leaflet";
import { iconBikeCharge } from "./CustomMarkers";

function StationMarkers({ data }) {
  return (
    <>
      {data.map((station) => {
        return (
          <Marker
            position={[station.latitude, station.longitude]}
            icon={iconBikeCharge}
          >
            <Popup>
              ID: {data.station._id}
              <br /> Lat: {data.station.latitude}
              <br /> Lan: {data.station.longitude}
              <br /> City: {data.station.city}
            </Popup>
          </Marker>
        );
      })}
    </>
  );
}

export default StationMarkers;
