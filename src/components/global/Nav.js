import { NavLink } from 'react-router-dom'
import { useState } from 'react'

// CSS
import './Nav.css'

// Icons
import icon__scooter from '../admin/assets/img/icons/icon__scooter-white.svg'
import icon__charge from '../admin/assets/img/icons/icon__charge-white.svg'
import icon__profile from '../admin/assets/img/icons/icon__profile-white.svg'
import icon__logo from '../admin/assets/img/icons/icon__logo-white.svg'
import icon__city from '../admin/assets/img/icons/city_white.svg'
import icon__city_menu from '../admin/assets/img/icons/city-menu__arrow.svg'


function Nav({ handleSetCity, city }) {
    const [cityNav, setCityNav] = useState(false);

    return (
        <div className="nav-left__outer-wrapper">
            <div classNAme="nav-left__brand-wrapper">
                <img src={icon__logo} alt={icon__logo}/>
            </div>
            <div className="nav-left__menu-wrapper">
                <NavLink to="/" className="nav-left__menu-item">
                    <img src={icon__scooter} alt={icon__scooter} className="nav-left__menu-item-icon" />
                </NavLink>
                <NavLink to="/charging" className="nav-left__menu-item">
                    <img src={icon__charge} alt={icon__charge} className="nav-left__menu-item-icon" />
                </NavLink>
                <NavLink to="/customers" className="nav-left__menu-item">
                    <img src={icon__profile} alt={icon__profile} className="nav-left__menu-item-icon" />
                </NavLink>
                <div className="nav-left__btn-city-wrapper nav-left__menu-item" onClick={() => setCityNav(!cityNav)}>
                    <img src={icon__city} alt={icon__city} className="nav-left__menu-item-icon"/>
                    { cityNav ?  
                        <div className="nav-left__city-menu">
                            <img src={icon__city_menu} alt={icon__city_menu} className="nav-left__city-menu-icon"/>

                            <div className="btn__city-wrapper">
                                <div className={"btn__city-dot " + (city === 'Stockholm' ? 'btn__city-active': '')}></div>
                                <div className="btn__city" onClick={() => handleSetCity('Stockholm')}>Stockholm</div>
                            </div>
                            <div className="btn__city-wrapper">
                                <div className={"btn__city-dot " + (city === 'Göteborg' ? 'btn__city-active': '')}></div>
                                <div className="btn__city" onClick={() => handleSetCity('Göteborg')}>Göteborg</div>
                            </div>
                            <div className="btn__city-wrapper">
                                <div className={"btn__city-dot " + (city === 'Umeå' ? 'btn__city-active': '')}></div>
                                <div className="btn__city" onClick={() => handleSetCity('Umeå')}>Umeå</div>
                            </div>
                        </div>
                    : null }
                </div>
            </div>
            <div className="nav-left__bottom-wrapper">
                <p className="user__name">Admin</p>
            </div>
        </div>
    )
}

export default Nav
