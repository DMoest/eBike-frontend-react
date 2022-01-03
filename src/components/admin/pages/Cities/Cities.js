import { useState, useEffect } from 'react';
import DocumentTitle from 'react-document-title';
import axios from 'axios';

// CSS
import '../../css/App.css';

// Components
import City from './City';
import Header from '../../components/global/Header';

function Cities({ city }) {
    const url = process.env.REACT_APP_API_BASE_URL + '/api/city';
    const [cities, setCities] = useState([]);

    // API call
    useEffect(() => {
        axios.get(url).then((res) => {
          setCities(res.data);
        })
    }, [url]);

    return (
        <div className="wrapper">
            <DocumentTitle title='Städer' ></DocumentTitle>
            <Header title="Städer"/>
            <div className="city__grid">
                { cities.map((cityData) => {
                    if (cityData.name === city) {
                        return <City key={cityData._id}
                            name={cityData.name}
                            // desc={city.desc}
                            // bikes={city.bikes}
                            // charge={city.charge}
                            // customers={city.customers}
                        />
                    }
                }) }
            </div>
        </div>
    )
}

export default Cities
