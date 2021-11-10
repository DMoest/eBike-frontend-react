import React from 'react'
import Header from '../components/global/Header'
import ChargingStation from '../components/ChargingStation'

function Charging() {
    // Mock data for the grid
    const chargingStations = [
        {
            id: 123,
            city: 'Stockholm',
        },
        {
            id: 124,
            city: 'Stockholm',
        },
        {
            id: 123,
            city: 'Stockholm',
        },
        {
            id: 124,
            city: 'Stockholm',
        },
    ]

    return (
        <div className="wrapper">
            <Header title="Laddstationer"/>
            {chargingStations.map((station) => {
                return <ChargingStation
                    id={station.id}
                    city={station.city}
                />
            })}
        </div>
    )
}

export default Charging
