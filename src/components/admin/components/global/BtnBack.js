import React from 'react'
import { Link } from 'react-router-dom'

function BtnBack({ url }) {
    return (
        <Link to={"/" + url} className="">Tillbaka</Link>
    )
}

export default BtnBack
