import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

// CSS
import './css/App.css';
import './css/Global.css'

// Pages
import Bikes from './pages/Bikes/Bikes'
import Charging from './pages/Stations/Stations'
import Logout from '../login/Logout'
import Customers from './pages/Customers/Customers.js'

// Global components
import Nav from '../global/Nav'

function AdminApp() {
  const [city, setCity] = useState('Stockholm');

  // Is this type of handling needed?
  function handleSetCity (city) {
    setCity(city);
  }

  return (
    <div className="App">
      <Nav handleSetCity={ handleSetCity } city= { city }/>
      <div className="container__main">
        <Routes>
          <Route path="/charging" element={ <Charging city={city} />}/>
          <Route path="/customers" element={ <Customers city={city} /> }/>
          <Route path="/logout" element={ <Logout />}/>
          <Route exact path="/" element={ <Bikes city={city} /> }/>
        </Routes>
      </div>
    </div>
  );
}

export default AdminApp;
