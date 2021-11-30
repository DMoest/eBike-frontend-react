import { useState, useEffect } from 'react'
import axios from 'axios'

import { Marker, Popup, useMap } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster';

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
                    return <Marker position={[marker.latitude, marker.longitude]} key={marker._id}>
                        <Popup>
                            Lat: { marker.latitude } 
                            <br /> Lan: { marker.longitude }
                        </Popup>
                    </Marker>
                }) }
            </MarkerClusterGroup>
        </div>
    )
}

export default MapMarkers
