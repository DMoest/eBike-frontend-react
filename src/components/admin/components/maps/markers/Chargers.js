import { useState, useEffect } from 'react'
import axios from 'axios'
import { Marker, Popup, Tooltip, useMap } from 'react-leaflet'
import { iconCharger } from './CustomMarkers'

function MapMarkers(props) {
    const url = process.env.REACT_APP_API_BASE_URL + "/api/station"
    const [markers, setMarkers] = useState([])

    var map = useMap();

    function getStationsWithinBounds(data) {
        let bounds = map.getBounds();
            let stationsWithinBounds = [];

            let s = bounds.getSouth();
            let n = bounds.getNorth();
            let w = bounds.getWest();
            let e = bounds.getEast();
            
            for (let station of data.stations) {
                if (station.latitude >= s &&
                    station.latitude <= n &&
                    station.longitude >= w &&
                    station.longitude <= e) {
                        stationsWithinBounds.push(station);
                }

            }

            return stationsWithinBounds;
    }

    function fetchData() {
        axios.get(url).then((res) => {
            let stations = getStationsWithinBounds(res.data);

            setMarkers(stations);
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
                { markers.map((marker) => {
                    return <div>
                        <Marker position={[marker.latitude, marker.longitude]} icon={iconCharger} key={marker._id}>
                            <Popup>
                                <select>
                                    <option>
                                        Bikes
                                    </option>
                                </select>
                            </Popup>
                            <Tooltip direction="top" offset={[10, -20]} permanent>
                                3
                            </Tooltip>
                        </Marker>
                    </div>
                }) }
        </div>
    )
}

export default MapMarkers
