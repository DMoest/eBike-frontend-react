import React from 'react'
import { Marker } from 'react-leaflet'

function MapMarkers() {
    const markers = [
        {
            lat: 60.192123, 
            lan: 24.945831
        },
        {
            lat: 60.292123,
            lan: 24.845831
        }
    ]
    return (
        <div>
            { markers.map((marker) => {
                return <Marker position={[marker.lat, marker.lan]} ></Marker>
            }) }
        </div>
    )
}

export default MapMarkers
