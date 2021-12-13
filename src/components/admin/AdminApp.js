import { Route, Routes } from 'react-router-dom'

// CSS
import './css/App.css';
import './css/Global.css'

// Page components
import Bikes from './pages/Bikes/Bikes'
import Charging from './pages/Stations/Stations'
import Logout from '../login/Logout'
import Customers from './pages/Customers.js'

// For the single city page. Needed?
// import Cities from './pages/Cities/Cities'
// import CitySingle from './pages/Cities/CitySingle'

// Global components
// import Nav from './components/global/Nav'
import NavTemp from '../global/Nav'

function AdminApp() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <NavTemp />
      <div className="container__main">
        <Routes>
          {/* <Route path="/cities" element={ <Cities /> }/>
          <Route path="/cities/:city" element={ <CitySingle />}/> */}
          <Route path="/bikes" element={ <Bikes /> }/>
          <Route path="/charging" element={ <Charging />}/>
          <Route path="/logout" element={ <Logout />}/>
          <Route path="/customers" element={ <Customers /> }/>
        </Routes>
      </div>
    </div>
  );
}

export default AdminApp;
