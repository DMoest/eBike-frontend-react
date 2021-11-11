import React from 'react'
import Header from '../components/global/Header'
import ChargingStation from '../components/ChargingStation'
import DocumentTitle from 'react-document-title'

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
            <DocumentTitle title='Laddstationer' ></DocumentTitle>

            <Header title="Laddstationer"/>
            
            {/* Break out into separate component? */}
            <input type="text" placeholder="Sök" className="input__search"></input>

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
