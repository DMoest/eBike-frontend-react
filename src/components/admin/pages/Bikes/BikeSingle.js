import React from 'react'

// CSS
import '../../css/Table.css'
import './Bikes.css'

function Bike({ city, latitude, longitude, status, statusColor }) {
    return (
        <tr>
            <td>{city}</td>
            <td>{latitude}</td>
            <td>{longitude}</td>
            <td className="bike__status-wrapper">
                <div className="bike__status-dot" style={{backgroundColor: statusColor}}></div>
                {status}
            </td>
        </tr>
    )
}

export default Bike
