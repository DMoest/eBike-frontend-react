// CSS
import '../../css/Table.css'

function StationSingle({ city, capacity, address, postcode, active }) {
    return (
        <tr>
            {/* <td>{id}</td> */}
            <td>{city}</td>
            <td>{capacity}</td>
            <td>{address}</td>
            <td>{postcode}</td>
            <td>{active}</td>
        </tr>
    )
}

export default StationSingle
