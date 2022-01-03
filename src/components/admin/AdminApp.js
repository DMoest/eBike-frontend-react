import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

// CSS
import './css/App.css';
import './css/Global.css'

// Page components
import Bikes from './pages/Bikes/Bikes'
import Charging from './pages/Stations/Stations'
import Logout from '../login/Logout'
import Customers from './pages/Customers/Customers.js'
import Nav from '../global/Nav'

function AdminApp() {
  const [city, setCity] = useState('Stockholm');

  // Is this type of handling needed?
  function handleSetCity (city) {
    setCity(city);
    console.log(city);
  }

  return (
    <div className="App">
      <Nav handleSetCity={handleSetCity}/>
      <div className="container__main">
        <Routes>
          <Route path="/" element={ <Bikes city={city} /> }/>
          <Route path="/charging" element={ <Charging city={city} />}/>
          <Route path="/customers" element={ <Customers city={city} /> }/>
          <Route path="/logout" element={ <Logout />}/>
        </Routes>
      </div>
    </div>
  );
}

export default AdminApp;
