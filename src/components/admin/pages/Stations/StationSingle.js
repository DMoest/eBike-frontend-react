import React from 'react'
import '../../css/Table.css'

function ChargingStation({ id, city, capacity, address, postcode, active }) {
    return (
        <div className="table__outer-wrapper">
            <div className="table__column-item">
                {id}
            </div>
            <div className="table__column-item">
                {city}
            </div>
            <div className="table__column-item">
                {capacity}
            </div>
            <div className="table__column-item">
                {address}
            </div>
            <div className="table__column-item">
                {postcode}
            </div>
            <div className="table__column-item">
                {active}
            </div>
        </div>
    )
}

export default ChargingStation
