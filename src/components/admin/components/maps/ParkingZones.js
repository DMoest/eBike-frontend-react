import { useState, useEffect } from "react";
import { Polygon } from "react-leaflet"; //, useMap
import Api from "@/components/admin/helper/api";

// import MarkerClusterGroup from 'react-leaflet-markercluster';
// import L from 'leaflet';

function ParkingZones() {
  const [markers, setMarkers] = useState([]);
  const [error, setError] = useState(null);

  // var map = useMap();
  const api = new Api();

  const getParkingZones = () => {
    api
      .getParkingZones()
      .then((res) => {
        setMarkers(res.data.parking_zones);
      })
      .catch((err) => {
        setError(err);
      });
  };

  useEffect(() => {
    getParkingZones();
  }, []);

  return (
    <div>
      {markers.map((marker) => {
        return (
          <Polygon
            key={marker._id}
            pathOptions={{ color: "green" }}
            positions={[
              [marker.ne_latitude, marker.ne_longitude],
              [marker.se_latitude, marker.se_longitude],
              [marker.sw_latitude, marker.sw_longitude],
              [marker.nw_latitude, marker.nw_longitude],
            ]}
          />
        );
      })}
    </div>
  );
}

export default ParkingZones;
