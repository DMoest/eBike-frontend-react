import L from 'leaflet';
import greenIcon from '../../assets/img/icons/green.svg';
import redIcon from '../../assets/img/icons/red.svg';
import chargeIcon from '../../assets/img/icons/charge.svg';
import chargeIconRed from '../../assets/img/icons/charge_red.svg';
import chargerIcon from '../../assets/img/icons/charger.svg';

const iconBike = new L.Icon({
    iconUrl: greenIcon,
    iconSize:     [30, 30], // size of the icon
    iconAnchor:   [7, 7], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 15]
});

const iconBikeStopped = new L.Icon({
    iconUrl: redIcon,
    iconSize:     [30, 30], // size of the icon
    iconAnchor:   [7, 7], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 15]
});

const iconBikeCharge = new L.Icon({
    iconUrl: chargeIcon,
    iconSize:     [30, 30], // size of the icon
    iconAnchor:   [7, 7], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 15]
});

const iconBikeChargeStopped = new L.Icon({
    iconUrl: chargeIconRed,
    iconSize:     [30, 30], // size of the icon
    iconAnchor:   [7, 7], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 15]
});

const iconCharger = new L.Icon({
    iconUrl: chargerIcon,
    iconSize:     [30, 30], // size of the icon
    iconAnchor:   [20, 20], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 30]
});

export { iconBike, iconBikeStopped, iconBikeCharge, iconBikeChargeStopped, iconCharger };