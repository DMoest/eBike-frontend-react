import React from 'react'
import '../css/Table.css'
import '../css/Bike.css'

function Bike({ id, city, lat, lan, latest_travel, parking, status }) {
    return (
        <div className="bike__outer-wrapper">
            <div className="table__column-item">
                {id}
            </div>
            <div className="table__column-item">
                {city}
            </div>
            <div className="table__column-item">
                {lat}
            </div>
            <div className="table__column-item">
                {lan}
            </div>
            <div className="table__column-item">
                {latest_travel}
            </div>
            <div className="table__column-item">
                {parking}
            </div>
            <div className="table__column-item">
                {status}
            </div>
        </div>
    )
}

export default Bike
