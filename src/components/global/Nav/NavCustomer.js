import { NavLink } from "react-router-dom";
import { useState } from "react";

// CSS
import "./Nav.css";

// Icons
import icon__scooter from "@/components/admin/assets/img/icons/icon__scooter-white.svg";
import icon__charge from "@/components/admin/assets/img/icons/icon__charge-white.svg";
import icon__profile from "@/components/admin/assets/img/icons/icon__profile-white.svg";
import icon__logo from "@/components/admin/assets/img/icons/icon__logo-white.svg";
import icon__city from "@/components/admin/assets/img/icons/city_white.svg";
import icon__logout from "@/components/admin/assets/img/icons/icon__logout.svg";
import icon__payment from "@/components/admin/assets/img/icons/icon__payment-white.svg";

function Nav() {
  return (
    <div className="nav-left__outer-wrapper">
      <div className="nav-left__brand-wrapper">
        <img src={icon__logo} alt={icon__logo} />
      </div>
      <div className="nav-left__menu-wrapper">
        <NavLink to="/home" className="nav-left__menu-item">
          <img
            src={icon__profile}
            alt={icon__profile}
            className="nav-left__menu-item-icon"
          />
        </NavLink>
        <NavLink to="/history" className="nav-left__menu-item">
          <img
            src={icon__scooter}
            alt={icon__scooter}
            className="nav-left__menu-item-icon"
          />
        </NavLink>
        <NavLink to="/payment" className="nav-left__menu-item">
          <img
            src={icon__payment}
            alt={icon__payment}
            className="nav-left__menu-item-icon"
          />
        </NavLink>
      </div>
      <div className="nav-left__bottom-wrapper">
        <img
          src={icon__logout}
          alt={icon__logout}
          className="nav-left__menu-item-icon"
        />
      </div>
    </div>
  );
}

export default Nav;
