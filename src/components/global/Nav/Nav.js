import { NavLink } from "react-router-dom";
import { useState } from "react";

// Components
import CityMenu from "./CityMenu";

// CSS
import "./Nav.css";

// Icons
import icon__scooter from "@/components/admin/assets/img/icons/icon__scooter-white.svg";
import icon__charge from "@/components/admin/assets/img/icons/icon__charge-white.svg";
import icon__profile from "@/components/admin/assets/img/icons/icon__profile-white.svg";
import icon__logo from "@/components/admin/assets/img/icons/icon__logo-white.svg";
import icon__city from "@/components/admin/assets/img/icons/city_white.svg";
import icon__logout from "@/components/admin/assets/img/icons/icon__logout.svg";

function Nav({ handleSetCity, city }) {
  const [cityNav, setCityNav] = useState(false);

  return (
    <div className="nav-left__outer-wrapper">
      <div className="nav-left__brand-wrapper">
        <img src={icon__logo} alt={icon__logo} />
      </div>
      <div className="nav-left__menu-wrapper">
        <NavLink to="/" className="nav-left__menu-item">
          <img
            src={icon__scooter}
            alt={icon__scooter}
            className="nav-left__menu-item-icon"
          />
        </NavLink>
        <NavLink to="/charging" className="nav-left__menu-item">
          <img
            src={icon__charge}
            alt={icon__charge}
            className="nav-left__menu-item-icon"
          />
        </NavLink>
        <NavLink to="/customers" className="nav-left__menu-item">
          <img
            src={icon__profile}
            alt={icon__profile}
            className="nav-left__menu-item-icon"
          />
        </NavLink>
        <div
          className="nav-left__btn-city-wrapper nav-left__menu-item"
          onClick={() => setCityNav(!cityNav)}
        >
          <img
            src={icon__city}
            alt={icon__city}
            className="nav-left__menu-item-icon"
          />
          {cityNav ? (
            <CityMenu handleSetCity={handleSetCity} city={city} />
          ) : null}
        </div>
      </div>
      <div className="nav-left__bottom-wrapper">
        <NavLink to="/logout" className="nav-left__menu-item ">
          <img
            src={icon__logout}
            alt={icon__logout}
            className="nav-left__menu-item-icon"
          />
        </NavLink>
      </div>
    </div>
  );
}

export default Nav;
