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
        });
    }, [url])

    return (
        <>
            <DocumentTitle title='Cyklar' ></DocumentTitle>

            {/* <input type="text" placeholder="Sök" className="input__search"></input> */}

            <div className="data-map__wrapper">
                <div className="data__wrapper">
                    <Header title="Cyklar"/>

                    {bikes.map((bike) => {
                        return <Bike key={bike._id}
                            city={bike.city}
                            latitude={bike.latitude}
                            longitude={bike.longitude}
                            status={bike.status}
                        />
                    })}
                </div>
                <div className="map__wrapper">
                    <Map />
                </div>
            </div>
        </>
    )
}

export default Bikes
