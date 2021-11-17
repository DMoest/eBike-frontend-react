import { useState, useEffect } from 'react'
import axios from 'axios'

import { Marker, Popup } from 'react-leaflet'

function MapMarkers() {
    const url = process.env.REACT_APP_API_BASE_URL + "/api/bike"
    const [markers, setMarkers] = useState([])

    useEffect(() => {
        function fetchData() {
            axios.get(url).then((res) => {
                setMarkers(res.data.bikes)
                console.log('API is called')
            })
        }

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
                return <Marker position={[marker.latitude, marker.longitude]} key={marker.latitude}>
                    <Popup>
                        Lat: { marker.latitude } 
                        <br /> Lan: { marker.longitude }
                    </Popup>
                </Marker>
            }) }
        </div>
    )
}

export default MapMarkers
