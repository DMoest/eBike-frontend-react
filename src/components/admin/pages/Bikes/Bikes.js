import axios from 'axios'
import DocumentTitle from 'react-document-title'
import { useState, useEffect } from 'react'

// Components
import Bike from './BikeSingle'
import Header from '../../components/global/Header'

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
        <div className="wrapper">
            <DocumentTitle title='Cyklar' ></DocumentTitle>
            <Header title="Cyklar"/>

            <input type="text" placeholder="Sök" className="input__search"></input>

            {bikes.map((bike) => {
                return <Bike key={bike._id}
                    city={bike.city}
                    latitude={bike.latitude}
                    longitude={bike.longitude}
                    status={bike.status}
                />
            })}
        </div>
    )
}

export default Bikes
