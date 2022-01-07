import icon__map from "../../../assets/img/icons/icon__map-white.svg";

import "./BtnMap.css";

function BtnMap({ setHideMap, hideMap }) {
  return (
    <div className="btn__map" onClick={() => setHideMap(!hideMap)}>
      <img src={icon__map} alt="icon__map" />
    </div>
  );
}

export default BtnMap;
