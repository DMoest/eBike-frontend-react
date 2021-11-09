import React from 'react'
import '../css/Table.css'

function ChargingStation({ id, city }) {
    return (
        <div className="table__outer-wrapper">
            <div className="table__column-item">
                {id}
            </div>
            <div className="table__column-item">
                {city}
            </div>
        </div>
    )
}

export default ChargingStation
