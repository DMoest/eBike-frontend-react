import { MapContainer, TileLayer } from 'react-leaflet'

// CSS
import './Map.css'

// Components
import MapMarkers from './markers/MapMarkers'
import ParkingZones from './markers/ParkingZones'
import Chargers from './markers/Chargers'

function Map() {

    return (
			<MapContainer preferCanvas={true} center={[59.334591, 18.063240]} zoom={15} scrollWheelZoom={true}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
					url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
				/>
				<MapMarkers />
				<ParkingZones />
				<Chargers />
			</MapContainer>
    )
}

export default Map
