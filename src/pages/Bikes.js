import React from 'react'
import Bike from '../components/Bike'
import Header from '../components/global/Header'
import DocumentTitle from 'react-document-title'

function Bikes() {
    // Mock data for the grid
    const bikes = [
        {
            id: 123,
            city: 'Stockholm',
            lat: '12.212313',
            lan: '52.123123',
            latest_travel: '12:41 - 11.3.2021',
            parking: 'Inte tillgänglig',
            status: 'Upptagen'
        },
        {
            id: 124,
            city: 'Stockholm',
            lat: '13.212313',
            lan: '53.123123',
            latest_travel: '12:42 - 11.3.2021',
            parking: 'Parkering #2',
            status: 'Ledig'
        },
        {
            id: 123,
            city: 'Stockholm',
            lat: '12.212313',
            lan: '52.123123',
            latest_travel: '12:41 - 11.3.2021',
            parking: 'Inte tillgänglig',
            status: 'Upptagen'
        },
        {
            id: 124,
            city: 'Stockholm',
            lat: '13.212313',
            lan: '53.123123',
            latest_travel: '12:42 - 11.3.2021',
            parking: 'Parkering #2',
            status: 'Ledig'
        },
    ]

    return (
        <div className="wrapper">
            <DocumentTitle title='Cyklar' ></DocumentTitle>

            <Header title="Cyklar"/>

            {/* Break out into separate component? */}
            <input type="text" placeholder="Sök" className="input__search"></input>

            {bikes.map((bike) => {
                return <Bike
                    id={bike.id}
                    city={bike.city}
                    lat={bike.lat}
                    lan={bike.lan}
                    latest_travel={bike.latest_travel}
                    parking={bike.parking}
                    status={bike.status}
                />
            })}
        </div>
    )
}

export default Bikes
