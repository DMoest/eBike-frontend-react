import React from 'react'

// CSS
import '../../css/Table.css'
import './Bikes.css'

function Bike({ city, latitude, longitude, status }) {
    return (
        <tr>
            <td>{city}</td>
            <td>{latitude}</td>
            <td>{longitude}</td>
            <td>{status}</td>
        </tr>
    )
}

export default Bike
