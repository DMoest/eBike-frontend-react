import { Route, Routes } from 'react-router-dom'

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
  return (
    <div className="App">
      <NavTemp />
      <div className="container__main">
        <Routes>
          <Route path="/" element={ <Bikes /> }/>
          <Route path="/charging" element={ <Charging />}/>
          <Route path="/logout" element={ <Logout />}/>
          <Route path="/customers" element={ <Customers /> }/>
        </Routes>
      </div>
    </div>
  );
}

export default AdminApp;
