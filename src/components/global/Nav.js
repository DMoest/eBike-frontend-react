import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'
import icon__scooter from '../admin/assets/img/icons/icon__scooter-white.svg'
import icon__charge from '../admin/assets/img/icons/icon__charge-white.svg'
import icon__profile from '../admin/assets/img/icons/icon__profile-white.svg'
import icon__logo from '../admin/assets/img/icons/icon__logo-white.svg'
// import icon__profile_bottom from '../admin/assets/img/icons/icon__profile-bottom-test.png'

function Nav({ handleSetCity }) {
    return (
        <div className="nav-left__outer-wrapper">
            <div classNAme="nav-left__brand-wrapper">
                <img src={icon__logo} alt={icon__logo}/>
            </div>
            <div className="nav-left__menu-wrapper">
                <NavLink to="/" className="nav-left__menu-item menu-item__active">
                    <img src={icon__scooter} alt={icon__scooter} className="nav-left__menu-item-icon" />
                </NavLink>
                <NavLink to="/charging" className="nav-left__menu-item">
                    <img src={icon__charge} alt={icon__charge} className="nav-left__menu-item-icon" />
                </NavLink>
                <NavLink to="/customers" className="nav-left__menu-item">
                    <img src={icon__profile} alt={icon__profile} className="nav-left__menu-item-icon" />
                </NavLink>
                <button classNam="btn__city" onClick={() => handleSetCity('Stockholm')}>Stockholm</button>
                <button classNam="btn__city" onClick={() => handleSetCity('Göteborg')}>Göteborg</button>
                <button classNam="btn__city" onClick={() => handleSetCity('Umeå')}>Umeå</button>
            </div>
            <div className="nav-left__bottom-wrapper">
                <p className="user__name">Admin</p>
            </div>
        </div>
    )
}

export default Nav
