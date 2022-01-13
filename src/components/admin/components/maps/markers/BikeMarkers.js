import { useState, useEffect } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";

// Custom markers
import {
  iconBike,
  iconBikeCharge,
  iconBikeStopped,
  iconBikeChargeStopped,
} from "./CustomMarkers";

function BikeMarkers({ data }) {
  const [markers, setMarkers] = useState([]);
  let map = useMap();

  useEffect(() => {
    function getMarkersWithinBounds(data) {
      let bounds = map.getBounds();
      let bikesWithinBounds = [];

      let south = bounds.getSouth();
      let north = bounds.getNorth();
      let west = bounds.getWest();
      let east = bounds.getEast();

      for (let bike of data) {
        if (
          bike.latitude >= south &&
          bike.latitude <= north &&
          bike.longitude >= west &&
          bike.longitude <= east
        ) {
          bikesWithinBounds.push(bike);
        }
      }

      return bikesWithinBounds;
    }

    let markers = getMarkersWithinBounds(data);
    setMarkers(markers);
    console.log("Markers set");
  }, [data]);

  return (
    <div>
      <MarkerClusterGroup>
        {markers.map((marker) => {
          let icon = null;

          marker.battery < 25
            ? (icon = iconBikeCharge)
            : !marker.active
            ? (icon = iconBikeStopped)
            : !marker.active && marker.battery < 25
            ? (icon = iconBikeChargeStopped)
            : (icon = iconBike);

          return (
            <Marker
              position={[marker.latitude, marker.longitude]}
              icon={icon}
              key={marker._id}
            >
              <Popup>
                ID: {marker._id}
                <br /> Lat: {marker.latitude}
                <br /> Lan: {marker.longitude}
                <br /> Battery: {marker.battery}
                <br /> Speed: {marker.speed}
                <br /> City: {marker.city}
              </Popup>
            </Marker>
          );
        })}
      </MarkerClusterGroup>
    </div>
  );
}

export default BikeMarkers;
