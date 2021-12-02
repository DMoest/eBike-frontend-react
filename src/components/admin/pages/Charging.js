import { useState, useEffect } from 'react'
import Header from '../global/Header'
import ChargingStation from '../ChargingStation'
import DocumentTitle from 'react-document-title'
import axios from 'axios'

function Charging() {
    const url = process.env.REACT_APP_API_BASE_URL + "/api/station"
    const [stations, setStations] = useState([])

    useEffect(() => {
        axios.get(url).then((res) => {
          setStations(res.data.stations)
        });
    }, [url])

    return (
        <div className="wrapper">
            <DocumentTitle title='Laddstationer' ></DocumentTitle>
            <Header title="Laddstationer"/>

            {/* Break out into separate component? */}
            <input type="text" placeholder="Sök" className="input__search"></input>

            {stations.map((station) => {
                return <ChargingStation key={station._id}
                    id={station._id}
                    city={station.city}
                    capacity={station.capacity}
                    address={station.adress}
                    postcode={station.postcode}
                    active={station.active}
                />
            })}
        </div>
    )
}

export default Charging
