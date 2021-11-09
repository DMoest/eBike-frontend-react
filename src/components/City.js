import React from 'react'
import '../css/City.css'
import map from '../assets/img/city__map-test.png'
import { Link } from 'react-router-dom'

function City({ name, desc, bikes, charge, customers }) {
    return (
        // "State" sets the city name to a param called 
        // "cityName" in the child component
        <Link to={"/cities/" +  name.toLowerCase() } state={{ cityName: name }}>
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
        </Link>
    )
}

export default City
