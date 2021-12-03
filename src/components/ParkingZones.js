import { useState, useEffect } from 'react'
import axios from 'axios'
import L from 'leaflet';
import { Marker, Polygon, Popup, useMap } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster';

import { iconBike, iconBikeCharge, iconBikeStopped, iconBikeChargeStopped } from './CustomMarkers'

function ParkingZones(props) {
    const url = process.env.REACT_APP_API_BASE_URL + "/api/parking"
    const [markers, setMarkers] = useState([])

    var map = useMap();


    function fetchData() {
        axios.get(url).then((res) => {
            setMarkers(res.data.parking_zones);
        })
    }


    useEffect(() => {

        // Fetching immediately the first time
        fetchData()

        // Clearing is needed
    }, [url])

    return (
        <div>
            { markers.map((marker) => {
                if (marker.city == "Umeå") {
                    return <Polygon pathOptions={ {color: 'green'} } positions={[
                        [marker.ne_latitude, marker.ne_longitude],
                        [marker.se_latitude, marker.se_longitude],
                        [marker.sw_latitude, marker.sw_longitude],
                        [marker.nw_latitude, marker.nw_longitude]
                    ]} />
                }
            }) }
        </div>
    )
}

export default ParkingZones
