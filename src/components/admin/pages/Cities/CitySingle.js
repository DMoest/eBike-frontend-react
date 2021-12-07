import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../global/Header'
import BtnBack from '../../global/BtnBack'
import DocumentTitle from 'react-document-title'

function City() {
    // Gets the city name
    const location = useLocation()
    const { cityName } = location.state

    return (
        <div className="wrapper">
            <DocumentTitle title={ cityName } ></DocumentTitle>
            <BtnBack url={ "cities" } />
            <Header title={ cityName } />
        </div>
    )
}

export default City
