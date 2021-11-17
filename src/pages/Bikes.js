import React from 'react'
import axios from "axios"

import Bike from '../components/Bike'
import Header from '../components/global/Header'
import DocumentTitle from 'react-document-title'

import { useState, useEffect } from 'react'

function Bikes() {
    const url = "http://localhost:8000/api/bike"
    const [bikes, setBikes] = useState([])

    useEffect(() => {
        axios.get(url).then((res) => {
          setBikes(res.data.bikes);
        });
    }, []);

    console.log(bikes)
    
    return (
        <div className="wrapper">
            <DocumentTitle title='Cyklar' ></DocumentTitle>
            <Header title="Cyklar"/>

            {/* Break out into separate component? */}
            <input type="text" placeholder="Sök" className="input__search"></input>

            {bikes.map((bike) => {
                return <Bike key={bike._id}
                    // id={bike._id}
                    city={bike.city}
                    lat={bike.latitude}
                    lan={bike.longitude}
                    // latest_travel={bike.latest_travel}
                    // parking={bike.parking}
                    status={bike.status}
                />
            })}
        </div>
    )
}

export default Bikes
