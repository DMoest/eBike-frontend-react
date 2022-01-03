import { useState, useEffect } from 'react';
import axios from 'axios';
import { Marker, Popup, useMap } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { iconBike, iconBikeCharge, iconBikeStopped, iconBikeChargeStopped } from './CustomMarkers';

function MapMarkers({props}) {
    const url = process.env.REACT_APP_API_BASE_URL + '/api/bike';
    const [markers, setMarkers] = useState([]);

    var map = useMap();

    useEffect(() => {
        const fetchData = () => {
            axios.get(url).then((res) => {
                let bikes = getBikesWithinBounds(res.data);
    
                setMarkers(bikes);
            })
        }

        const getBikesWithinBounds = (data) => {
            let bounds = map.getBounds();
                let bikesWithinBounds = [];
    
                let south = bounds.getSouth();
                let north = bounds.getNorth();
                let west = bounds.getWest();
                let east = bounds.getEast();
                
                for (let bike of data.bikes) {
                    if (bike.latitude >= south &&
                        bike.latitude <= north &&
                        bike.longitude >= west &&
                        bike.longitude <= east) 
                    {
                        bikesWithinBounds.push(bike);
                    }
    
                }
    
                return bikesWithinBounds;
        }

        // Fetching immediately the first time
        fetchData();

        // Fetching every 10 seconds
        const fetchDataInterval = setInterval(() => {
            fetchData();
        }, 10000);

        console.log(markers)

        // Clearing is needed
        return () => clearInterval(fetchDataInterval);
    }, [url])

    return (
        <div>
            <MarkerClusterGroup>
                { markers.map((marker) => {
                    let icon = null;

                    marker.battery < 25 ? icon = iconBikeCharge
                    : !marker.active ? icon = iconBikeStopped
                    : !marker.active && marker.battery < 25 ? icon = iconBikeChargeStopped
                    : icon = iconBike;

                    return <Marker position={[marker.latitude, marker.longitude]} icon={icon} key={marker._id}>
                        <Popup>
                            ID: { marker._id }
                            <br /> Lat: { marker.latitude } 
                            <br /> Lan: { marker.longitude }
                            <br /> Battery: { marker.battery }
                            <br /> Speed: { marker.speed }
                        </Popup>
                    </Marker>
                }) }
            </MarkerClusterGroup>
        </div>
    )
}

export default MapMarkers
