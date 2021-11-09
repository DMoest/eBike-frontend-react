import React from 'react'
import Header from '../components/global/Header'
import { useLocation } from 'react-router-dom'

function City() {
    // Gets the city name
    const location = useLocation()
    const { cityName } = location.state

    return (
        <div className="wrapper">
            <Header title={ cityName } />
        </div>
    )
}

export default City
