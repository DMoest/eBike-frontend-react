import axios from 'axios'
import DocumentTitle from 'react-document-title'
import { useState, useEffect } from 'react'

// Components
import Bike from './BikeSingle'
import Header from '../../components/global/Header'
import Map from '../../components/maps/Map'

function Bikes() {
    const url = process.env.REACT_APP_API_BASE_URL + "/api/bike"
    const [bikes, setBikes] = useState([])

    // API call
    useEffect(() => {
        axios.get(url).then((res) => {
          setBikes(res.data.bikes)
        }).catch((err) => {
            console.log(err)
        });
    }, [url])

    return (
        <>
            <DocumentTitle title='Cyklar' ></DocumentTitle>
            <div className="data-map__wrapper">
                <div className="data__wrapper">
                    <Header title="Cyklar"/>
                    
                    <div className="data__inner-wrapper">
                        <table className="data__table">
                            <tr>
                                <th>Stad</th>
                                <th>Latitude</th>
                                <th>Longitude</th>
                                <th>Status</th>
                            </tr>
                            {bikes.map((bike) => {

                            // Set bike status color
                            bike.status === 'available' ? bike.statusColor = '#28C941' 
                            : bike.status === 'in_service' ? bike.statusColor = '#F4D25E'
                            : bike.status === 'broken' ? bike.statusColor = '#EE6A6A'
                            : bike.statusColor = '#EE6A6A'

                            return <Bike 
                                key={bike._id}
                                city={bike.city}
                                latitude={bike.latitude}
                                longitude={bike.longitude}
                                status={bike.status}
                                statusColor={bike.statusColor}
                            />
                            })}
                        </table>
                    </div>
                </div>
                <div className="map__wrapper">
                    <Map />
                </div>
            </div>
        </>
    )
}

export default Bikes
