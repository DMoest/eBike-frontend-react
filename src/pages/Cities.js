import React from 'react'
import City from '../components/City'
import Header from '../components/global/Header'

import '../css/App.css'

function Cities() {
    const cities = [
        {
            name: 'Stockholm',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper quam eu',
            bikes: 272,
            charge: 13,
            customers: 42
        },
        {
            name: 'Stockholm',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper quam eu',
            bikes: 272,
            charge: 13,
            customers: 42
        },
        {
            name: 'Stockholm',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper quam eu',
            bikes: 272,
            charge: 13,
            customers: 42
        }
    ]

    return (
        <div className="wrapper">
            <Header title="Städer"/>
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
    )
}

export default Cities
