// CSS
import "./Bikes.css";

function Bike({ id, city, speed, battery, status, statusColor, active }) {
  return (
    <tr>
      <td data-label="Id">{id}</td>
      <td data-label="Stad">{city}</td>
      <td data-label="Hastighet">{speed} km/h</td>
      <td data-label="Batteri">{battery}%</td>
      <td data-label="Status">
        <div className="bike__status-wrapper">
          <div
            className="bike__status-dot"
            style={{ backgroundColor: statusColor }}
          ></div>
          {status}
        </div>
      </td>
      <td data-label="Aktiv">{active}</td>
    </tr>
  );
}

export default Bike;
