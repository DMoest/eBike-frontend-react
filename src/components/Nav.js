import React from 'react'
import '../css/Nav.css'

function Nav() {
    return (
        <div className="nav__outer-wrapper">
            <div className="nav__brand">eBike Admin</div>
            <div className="nav__menu">
                <a href="#" className="nav__link">Hem</a>
                <a href="#" className="nav__link">Städer</a>
                <a href="#" className="nav__link">Cyklar</a>
                <a href="#" className="nav__link">Laddstationer</a>
                <a href="#" className="nav__link">Städer</a>
                <a href="#" className="nav__link">Logga in</a>
            </div>
        </div>
    )
}

export default Nav
