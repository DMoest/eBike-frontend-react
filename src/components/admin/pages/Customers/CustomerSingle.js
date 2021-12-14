import React from 'react'

function Customer({ firstname, lastname, adress, postcode, city, phone, email, paymentMethod, paymentStatus }) {
    return (
        <tr>
            <td>{firstname}</td>
            <td>{lastname}</td>
            <td>{adress}</td>
            <td>{postcode}</td>
            <td>{city}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{paymentMethod}</td>
            <td>{paymentStatus}</td>
        </tr>
    )
}

export default Customer