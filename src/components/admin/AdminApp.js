import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

// CSS
import './css/App.css';
import './css/Global.css'

// Page components
import Bikes from './pages/Bikes/Bikes'
import Charging from './pages/Stations/Stations'
import Logout from '../login/Logout'
import Customers from './pages/Customers.js'
import NavTemp from '../global/Nav'

function AdminApp() {
  // Global city state
  const [city, setCity] = useState('Stockholm');

  const updateCity = city => {
    setCity(city);
  }

  return (
    <div className="App">
      <NavTemp />
      <div className="container__main">
        <Routes>
          <Route path="/" element={ <Bikes city={city} updateCity={updateCity}/> }/>
          <Route path="/charging" element={ <Charging city={city} updateCity={updateCity}/>}/>
          <Route path="/customers" element={ <Customers city={city} updateCity={updateCity}/> }/>
          <Route path="/logout" element={ <Logout />}/>
        </Routes>
      </div>
    </div>
  );
}

export default AdminApp;
