import React from 'react'
import '../../css/Nav.css'
import '../../css/App.css'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className="nav__outer-wrapper">
            <div className="nav__brand">eBike</div>
            <div className="nav__menu">
                <Link to="/" className="nav__link">Hem</Link>
                <Link to="/cities" className="nav__link">Städer</Link>
                <Link to="/bikes" className="nav__link">Cyklar</Link>
                <Link to="/charging" className="nav__link">Laddstationer</Link>
                <Link to="/login" className="nav__link nav__btn">Logga in</Link>
            </div>
        </div>
    )
}

export default Nav
