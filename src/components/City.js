import React from 'react'
import '../css/City.css'
import map from '../assets/img/city__map-test.png'

function City({ name, desc, bikes, charge, customers }) {
    return (
        <div className="city__outer-wrapper">
            <div className="city__img-wrapper">
                <img src={ map } alt="test"/>
            </div>
            <div className="city__content-wrapper">
                <h3>{ name }</h3>
                <p>{ desc }</p>
                <div class="city__stats-wrapper">
                    { bikes }
                    { charge }
                    { customers }
                </div>
            </div>
        </div>
    )
}

export default City
