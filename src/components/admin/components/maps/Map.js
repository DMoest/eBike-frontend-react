import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useEffect, useState } from "react";

// CSS
import "./Map.css";

// Components
import BikeMarkers from "./markers/BikeMarkers";
import StationMarkers from "./markers/StationMarkers";
import ParkingZones from "./ParkingZones";

function Map({ type, data, city }) {
  const [mapCenterCoordinates, setMapCenterCoordinates] = useState([
    59.334591, 18.06324,
  ]);
  // console.log("MAP data: ", data);

  useEffect(() => {
    // Setting up map centering based on city
    switch (city) {
      case "Stockholm":
        setMapCenterCoordinates([59.334591, 18.06324]);
        break;
      case "Göteborg":
        setMapCenterCoordinates([57.70887, 11.97456]);
        break;
      case "Umeå":
        setMapCenterCoordinates([63.821, 20.3028]);
        break;
      default:
        setMapCenterCoordinates([59.334591, 18.06324]);
    }
  }, [city]);

  return (
    <>
      <MapContainer
        preferCanvas={true}
        center={mapCenterCoordinates}
        zoom={12}
        scrollWheelZoom={true}
        key={JSON.stringify([mapCenterCoordinates[0], mapCenterCoordinates[1]])}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        {type === "bike" ? (
          <>
            <StationMarkers data={data} />
            <BikeMarkers data={data} />
            <ParkingZones city={city} />
          </>
        ) : type === "station" ? (
          <StationMarkers data={data} />
        ) : null}
      </MapContainer>
    </>
  );
}

export default Map;
