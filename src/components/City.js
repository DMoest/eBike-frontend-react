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
                <div className="city__bottom-wrapper">
                    <div className="city__stats-wrapper">
                        <div className="city__stats-item">
                            { bikes }
                        </div>
                        <div className="city__stats-item">
                            { charge }
                        </div>
                        <div className="city__stats-item">
                            { customers }
                        </div>
                    </div>

                    -{'>'}
                </div>
            </div>
        </div>
    )
}

export default City
