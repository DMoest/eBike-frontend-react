import React from 'react'
import '../../css/Nav.css'
import '../../css/App.css'
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <div className="nav__outer-wrapper">
            <div className="nav__brand">eBike</div>
            <div className="nav__menu">
                <NavLink to="/" className="nav__link">Hem</NavLink>
                <NavLink to="/cities" className="nav__link">Städer</NavLink>
                <NavLink to="/bikes" className="nav__link">Cyklar</NavLink>
                <NavLink to="/charging" className="nav__link">Laddstationer</NavLink>
                <NavLink to="/login" className="nav__link nav__btn">Logga in</NavLink>
            </div>
        </div>
    )
}

export default Nav
