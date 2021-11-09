import React from 'react'
import City from '../components/City'
import Header from '../components/global/Header'

import '../css/App.css'

function Cities() {
    // Mock data for the grid
    const cities = [
        {
            name: 'Stockholm',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper quam eu',
            bikes: 272,
            charge: 13,
            customers: 42
        },
        {
            name: 'Linköping',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper quam eu',
            bikes: 152,
            charge: 9,
            customers: 21
        },
        {
            name: 'Helsingfors',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper quam eu',
            bikes: 92,
            charge: 5,
            customers: 41
        }
    ]

    return (
        <div className="wrapper">
            <Header title="Städer"/>
            <div className="city__grid">
                { cities.map((bike) => {
                    return <City 
                        name={bike.name} 
                        desc={bike.desc} 
                        bikes={bike.bikes} 
                        charge={bike.charge} 
                        customers={bike.customers}
                    />
                }) }
            </div>
        </div>
    )
}

export default Cities
