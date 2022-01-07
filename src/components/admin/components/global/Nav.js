import React from "react";
import "../../css/Nav.css";
import "../../css/App.css";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="nav__outer-wrapper">
      <div className="nav__brand">
        <Link to="/home">eBike</Link>
      </div>
      <div className="nav__menu">
        <NavLink to="/home" className="nav__link">
          Hem
        </NavLink>
        <NavLink to="/cities" className="nav__link">
          Städer
        </NavLink>
        <NavLink to="/bikes" className="nav__link">
          Cyklar
        </NavLink>
        <NavLink to="/charging" className="nav__link">
          Laddstationer
        </NavLink>
        <NavLink to="/logout" className="nav__link nav__btn">
          Logga ut
        </NavLink>
      </div>
    </div>
  );
}

export default Nav;
