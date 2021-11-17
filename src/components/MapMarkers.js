import { useState, useEffect } from 'react'
import axios from 'axios'

import { Marker, Popup } from 'react-leaflet'

function MapMarkers() {
    const url = process.env.REACT_APP_API_BASE_URL + "/api/bike"
    const [markers, setMarkers] = useState([])

    useEffect(() => {
        axios.get(url).then((res) => {
          setMarkers(res.data.bikes)
        });
    }, [url])

    return (
        <div>
            { markers.map((marker) => {
                return <Marker position={[marker.latitude, marker.longitude]}>
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
