import React from 'react'
import City from '../components/City'
import Header from '../components/global/Header'

import '../css/App.css'

function Cities() {
    return (
        <div className="wrapper">
            <Header title="Städer"/>
            <City />
        </div>
    )
}

export default Cities
