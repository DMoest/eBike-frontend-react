// Icons
import icon__city_menu from "../../admin/assets/img/icons/city-menu__arrow.svg";

function CityMenu({ handleSetCity, city }) {
  return (
    <div className="nav-left__city-menu">
      <img
        src={icon__city_menu}
        alt={icon__city_menu}
        className="nav-left__city-menu-icon"
      />

      <div className="btn__city-wrapper">
        <div
          className={
            "btn__city-dot " + (city === "Stockholm" ? "btn__city-active" : "")
          }
        ></div>
        <div className="btn__city" onClick={() => handleSetCity("Stockholm")}>
          Stockholm
        </div>
      </div>
      <div className="btn__city-wrapper">
        <div
          className={
            "btn__city-dot " + (city === "Göteborg" ? "btn__city-active" : "")
          }
        ></div>
        <div className="btn__city" onClick={() => handleSetCity("Göteborg")}>
          Göteborg
        </div>
      </div>
      <div className="btn__city-wrapper">
        <div
          className={
            "btn__city-dot " + (city === "Umeå" ? "btn__city-active" : "")
          }
        ></div>
        <div className="btn__city" onClick={() => handleSetCity("Umeå")}>
          Umeå
        </div>
      </div>
    </div>
  );
}

export default CityMenu;
