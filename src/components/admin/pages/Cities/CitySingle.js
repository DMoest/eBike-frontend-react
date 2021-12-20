import { useLocation } from 'react-router-dom'
import DocumentTitle from 'react-document-title'

// Components
import Header from '../../components/global/Header'
import BtnBack from '../../components/global/BtnBack'

function City() {
    // Gets the city name
    const location = useLocation()
    const { cityName } = location.state

    return (
        <div className="wrapper">
            <DocumentTitle title={ cityName } ></DocumentTitle>
            <BtnBack url={ "cities" } />
            <Header title={ cityName } />
        </div>
    )
}

export default City
