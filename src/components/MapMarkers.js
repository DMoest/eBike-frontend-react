import React from 'react'
import { Marker, Popup } from 'react-leaflet'

function MapMarkers() {
    const markers = [
        {
            lat: 60.192123, 
            lan: 24.945831
        },
        {
            lat: 60.292123,
            lan: 24.845831
        },
        {
            lat: 60.392123,
            lan: 24.745831
        },
        {
            lat: 60.492123,
            lan: 24.645831
        }
    ]
    return (
        <div>
            { markers.map((marker) => {
                return <Marker position={[marker.lat, marker.lan]}>
                    <Popup>
                        Lat: { marker.lat } 
                        <br /> Lan: { marker.lan }
                    </Popup>
                </Marker>
            }) }
        </div>
    )
}

export default MapMarkers
