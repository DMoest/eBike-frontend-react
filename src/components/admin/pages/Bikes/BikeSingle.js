// CSS
import '../../css/Table.css'
import './Bikes.css'

function Bike({ city, speed, battery, status, statusColor, active }) {
    return (
        <tr>
            <td>{city}</td>
            <td>{speed} km/h</td>
            <td>{battery}%</td>
            <td className="bike__status-wrapper">
                <div className="bike__status-dot" style={{backgroundColor: statusColor}}></div>
                {status}
            </td>
            <td>{active}</td>
        </tr>
    )
}

export default Bike
