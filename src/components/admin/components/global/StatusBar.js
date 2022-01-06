import './StatusBar.css'
import icon__city from '../../assets/img/icons/city_white.svg'

function StatusBar({ city }) {
    return (
        <div className="statusbar__outer-wrapper">
            <div className="statusbar__inner-wrapper">
                <img src={icon__city} alt={icon__city} className="statusbar__city-icon" />
                Stad: { city } 
            </div>
        </div>
    )
}

export default StatusBar
