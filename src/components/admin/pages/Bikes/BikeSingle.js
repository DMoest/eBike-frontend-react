import React from 'react'

// CSS
import '../../css/Table.css'
import './Bike.css'

function Bike({ city, latitude, longitude, status }) {
    return (
        <div className="table__outer-wrapper">
            <div className="table__column-item">
                {city}
            </div>
            <div className="table__column-item">
                {latitude}
            </div>
            <div className="table__column-item">
                {longitude}
            </div>
            <div className="table__column-item">
                {status}
            </div>
        </div>
    )
}

export default Bike
