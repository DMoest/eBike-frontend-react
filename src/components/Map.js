import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import MapMarker from './MapMarker'

function Map() {
    return (
        <div>
			<MapContainer center={[60.192123, 24.945831]} zoom={9} scrollWheelZoom={true}>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<MapMarker lat={60.192123} lan={24.945831}/>
				<MapMarker lat={60.292123} lan={24.845831}/>
			</MapContainer>
		</div>
    )
}

export default Map
