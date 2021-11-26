import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import MapMarkers from './MapMarkers'

function Map() {
    return (
        <div>
			<MapContainer preferCanvas={true} center={[-21.769985, 125.491771]} zoom={2} scrollWheelZoom={true}>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<MapMarkers />
			</MapContainer>
		</div>
    )
}

export default Map
