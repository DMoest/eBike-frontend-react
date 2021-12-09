import { useState, useEffect } from 'react'
import axios from 'axios'
import { Marker, Popup, useMap } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster';

import { iconBike, iconBikeCharge, iconBikeStopped, iconBikeChargeStopped } from './CustomMarkers'

function MapMarkers(props) {
    const url = process.env.REACT_APP_API_BASE_URL + "/api/bike"
    const [markers, setMarkers] = useState([])

    var map = useMap();

    function getBikesWithinBounds(data) {
        let bounds = map.getBounds();
            let bikesWithinBounds = [];

            let s = bounds.getSouth();
            let n = bounds.getNorth();
            let w = bounds.getWest();
            let e = bounds.getEast();
            
            for (let bike of data.bikes) {
                if (bike.latitude >= s &&
                    bike.latitude <= n &&
                    bike.longitude >= w &&
                    bike.longitude <= e) {
                        bikesWithinBounds.push(bike);
                }

            }

            return bikesWithinBounds;
    }

    function fetchData() {
        axios.get(url).then((res) => {
            let bikes = getBikesWithinBounds(res.data);

            setMarkers(bikes);
        })
    }


    useEffect(() => {

        // Fetching immediately the first time
        fetchData()

        // Fetching every 10 seconds
        const fetchDataInterval = setInterval(() => {
            fetchData()
        }, 10000)

        // Clearing is needed
        return () => clearInterval(fetchDataInterval)
    }, [url])

    return (
        <div>
            <MarkerClusterGroup>
                { markers.map((marker) => {
                    let icon = null;

                    if (marker.active && marker.battery < 25) {
                        icon = iconBikeCharge;
                    } else if (!marker.active && marker.battery < 25) {
                        icon = iconBikeChargeStopped;
                    } else {
                        icon = iconBike;
                    }


                    return <Marker position={[marker.latitude, marker.longitude]} icon={icon} key={marker._id}>
                        {marker.active && marker.battery >= 25 ?
                        <Popup>
                            Lat: { marker.latitude } 
                            <br /> Lan: { marker.longitude }
                            <br /> Battery: { marker.battery }
                            <br /> Speed: { marker.speed }
                        </Popup> :
                        <Popup>
                            <ul className="popup-list">
                                <li>
                                    Send to charger
                                </li>
                            </ul>
                        </Popup>}
                    </Marker>
                }) }
            </MarkerClusterGroup>
        </div>
    )
}

export default MapMarkers
