import React from 'react'
import Header from '../components/global/Header'

function City({ city = 'Stockholm' }) {
    return (
        <div className="wrapper">
            <Header title={ city } />
        </div>
    )
}

export default City
