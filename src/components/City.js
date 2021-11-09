import React from 'react'
import '../css/City.css'
import map from '../assets/img/city__map-test.png'

function City() {
    return (
        <div className="city__outer-wrapper">
            <div className="city__img-wrapper">
                <img src={ map } alt="test"/>
            </div>
            <div className="city__content-wrapper">
                <h3>Stockholm</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper quam eu</p>
            </div>
        </div>
    )
}

export default City
