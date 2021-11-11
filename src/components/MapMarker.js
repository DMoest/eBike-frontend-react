import React from 'react'
import { Marker } from 'react-leaflet'

function MapMarker({ lat, lan }) {
    return (
        <div>
            <Marker position={[lat, lan]} ></Marker>
        </div>
    )
}

export default MapMarker
