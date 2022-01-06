// CSS
import '../../css/Table.css'
import './Bikes.css'

function Bike({ id, city, speed, battery, status, statusColor, active }) {
    return (
        <tr>
            <td data-label="Id">{id}</td>
            <td data-label="Stad">{city}</td>
            <td data-label="Hastighet">{speed} km/h</td>
            <td data-label="Batteri">{battery}%</td>
            <td data-label="Status" className="bike__status-wrapper">
                <div className="bike__status-dot" style={{backgroundColor: statusColor}}></div>
                {status}
            </td>
            <td data-label="Aktivitet">{active}</td>
        </tr>
    )
}

export default Bike
