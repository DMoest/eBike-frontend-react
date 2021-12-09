import L from 'leaflet';
import greenIcon from './img/green.svg';
import redIcon from './img/red.svg';
import chargeIcon from './img/charge.svg';
import chargeIconRed from './img/charge_red.svg';
import chargerIcon from './img/charger.svg';

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