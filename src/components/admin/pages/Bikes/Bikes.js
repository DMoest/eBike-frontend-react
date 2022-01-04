import axios from 'axios'
import DocumentTitle from 'react-document-title'
import { useState, useEffect } from 'react'

// Components
import Bike from './BikeSingle'
import Header from '../../components/global/Header'
import Map from '../../components/maps/Map'
import BtnMap from '../../components/global/BtnMap'

function Bikes({ city }) {
    const url = process.env.REACT_APP_API_BASE_URL + "/api/bike/city/" + city;
    const [bikes, setBikes] = useState([]);

    // Getting bikes
    const getBikes = async () => {
        try {
            const res = await axios.get(url);
            setBikes(res.data.bikes);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getBikes();

        const fetchDataInterval = setInterval(() => {
            getBikes();
            console.log('New positions set');
        }, 10000);

        return () => clearInterval(fetchDataInterval);
    }, [city]);

    return (
        <>
            <DocumentTitle title='Cyklar' ></DocumentTitle>
            <BtnMap/>
            <div className="data-map__wrapper">
                <div className="data__wrapper">
                    <Header title="Cyklar"/>
                    
                    <div className="data__inner-wrapper">
                        <table className="data__table">
                            <tr>
                                <th>Stad</th>
                                <th>Hastighet</th>
                                <th>Batteri</th>
                                <th>Status</th>
                                <th>Aktiv</th>
                            </tr>
                            {bikes.map((bike) => {
                                // Set bike status color
                                bike.status === 'available' ? bike.statusColor = '#28C941'
                                : bike.status === 'in_service' ? bike.statusColor = '#F4D25E'
                                : bike.status === 'broken' ? bike.statusColor = '#EE6A6A'
                                : bike.statusColor = '#EE6A6A';

                                // Set bike status in Swedish
                                bike.status === 'available' ? bike.status_swedish = 'Tillgänglig'
                                : bike.status === 'in_service' ? bike.status_swedish = 'Repereras'
                                : bike.status === 'broken' ? bike.status_swedish = 'Ur funktion'
                                : bike.status_swedish = 'Ingen information';

                                // Set bike active in Swedish
                                bike.active === 'true' ? bike.active = 'Ja' : bike.active = 'Nej';

                                return <Bike 
                                    key={bike._id}
                                    city={bike.city}
                                    speed={bike.speed}
                                    battery={bike.battery}
                                    status={bike.status_swedish}
                                    statusColor={bike.statusColor}
                                    active={bike.active}
                                />
                            })}
                        </table>
                    </div>
                </div>
                <div className="map__wrapper map__hidden">
                    <Map type={'bike'} data={bikes} city={city} />
                </div>
            </div>
        </>
    )
}

export default Bikes
