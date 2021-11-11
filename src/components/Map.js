import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import MapMarkers from './MapMarkers'

function Map() {
    return (
        <div>
			<MapContainer center={[60.192123, 24.945831]} zoom={9} scrollWheelZoom={true}>
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
