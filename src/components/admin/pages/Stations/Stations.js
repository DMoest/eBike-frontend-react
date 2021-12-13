import { useState, useEffect } from 'react'
import DocumentTitle from 'react-document-title'
import axios from 'axios'

// Components
import Header from '../../components/global/Header'
import ChargingStation from './StationSingle'
import Map from '../../components/maps/Map'

function Stations() {
    const url = process.env.REACT_APP_API_BASE_URL + "/api/station"
    const [stations, setStations] = useState([])

    // API call
    useEffect(() => {
        axios.get(url).then((res) => {
          setStations(res.data.stations)
        });
    }, [url])

    return (
        <>
            <DocumentTitle title='Laddstationer' ></DocumentTitle>
            <div className="data-map__wrapper">
                <div className="data__wrapper">
                    <Header title="Laddstationer"/>

                    {/* Break out into separate component? */}
                    {/* <input type="text" placeholder="Sök" className="input__search"></input> */}

                    <div className="data__inner-wrapper">
                        <table className="data__table">
                            <tr>
                                {/* <th>Id</th> */}
                                <th>Stad</th>
                                <th>Kapacitet</th>
                                <th>Address</th>
                                <th>Postnummer</th>
                                <th>Aktiva</th>
                            </tr>
                            {stations.map((station) => {
                                return <ChargingStation key={station._id}
                                    // id={station._id}
                                    city={station.city}
                                    capacity={station.capacity}
                                    address={station.adress}
                                    postcode={station.postcode}
                                    active={station.active}
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

export default Stations
