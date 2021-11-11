import React from 'react'
import '../css/Other.css'
import '../css/App.css'
import Header from '../components/global/Header'
import Map from '../components/Map'

function Home() {
    return (
        <div className="wrapper">
            <Header title="Hem"/>
            <Map />
        </div>
    )
}

export default Home
