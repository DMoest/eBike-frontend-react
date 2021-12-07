import DocumentTitle from 'react-document-title'

// CSS
import '../css/Other.css'
import '../css/App.css'

// Components
import Header from '../components/global/Header'
import Map from '../components/maps/Map'

function Home() {
    return (
        <div className="wrapper">
            <DocumentTitle title='Hem' ></DocumentTitle>
            <Header title="Hem"/>
            <Map />
        </div>
    )
}

export default Home
