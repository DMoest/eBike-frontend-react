import React from 'react'
import '../css/Other.css'
import '../css/App.css'
import Header from '../global/Header'
import Map from '../Map'
import DocumentTitle from 'react-document-title'

function Home() {
    return (
        <div className="wrapper">
            <DocumentTitle title='Hem' ></DocumentTitle>
            <Header title="Hem"/>
            <Map />
        </div>
    )
}

export default Home