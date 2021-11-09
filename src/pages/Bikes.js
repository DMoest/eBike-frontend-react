import React from 'react'
import Bike from '../components/Bike'

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
    ]

    return (
        <div className="wrapper">
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
