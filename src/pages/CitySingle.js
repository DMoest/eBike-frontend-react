import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/global/Header'
import BtnBack from '../components/global/BtnBack'

function City() {
    // Gets the city name
    const location = useLocation()
    const { cityName } = location.state

    return (
        <div className="wrapper">
            <BtnBack url={ "cities" } />
            <Header title={ cityName } />
        </div>
    )
}

export default City
