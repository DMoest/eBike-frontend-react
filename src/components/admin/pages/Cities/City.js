import React from 'react'
import './City.css'
import { Link } from 'react-router-dom'

// Img & icons
import map from '../../assets/img/city__map-test.png'
import scooterIcon from '../../assets/img/icons/icon__scooter.svg'
import chargeIcon from '../../assets/img/icons/icon__charge.svg'
import customerIcon from '../../assets/img/icons/icon__customer.svg'

function City({ name, desc, bikes, charge, customers }) {
    return (
        // "State" sets the city name to a param called
        // "cityName" in the child component
        <Link to={"/cities/" +  name.toLowerCase() } state={{ cityName: name }}>
            <div className="city__outer-wrapper">
                <div className="city__img-wrapper">
                    <img src={ map } alt="map"/>
                </div>
                <div className="city__content-wrapper">
                    <h3>{ name }</h3>
                    <p>{ desc }</p>
                    <div className="city__bottom-wrapper">
                        <div className="city__stats-wrapper">
                            <div className="city__stats-item">
                                <img src={ scooterIcon } className="city__icon" alt="Scooter icon"/>{ bikes }
                            </div>
                            <div className="city__stats-item">
                                <img src={ chargeIcon } className="city__icon" alt="Scooter icon"/>{ charge }
                            </div>
                            <div className="city__stats-item">
                                <img src={ customerIcon } className="city__icon" alt="Scooter icon"/>{ customers }
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
