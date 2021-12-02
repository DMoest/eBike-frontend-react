import './css/App.css';
import './css/Other.css'
import { Route, Routes } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Cities from './pages/Cities'
import Bikes from './pages/Bikes'
import Charging from './pages/Charging'
import Logout from '../login/Logout'

// For the single city page. Needed?
import CitySingle from './pages/CitySingle'

// Global components
import Nav from './global/Nav'

// TODO: Figure out global state

function AdminApp() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/home" element={ <Home /> }/>
        <Route path="/about" element={ <About /> }/>
        <Route path="/cities" element={ <Cities /> }/>
        <Route path="/cities/:city" element={ <CitySingle />}/>
        <Route path="/bikes" element={ <Bikes /> }/>
        <Route path="/charging" element={ <Charging />}/>
        <Route path="/logout" element={ <Logout />}/>
      </Routes>
    </div>
  );
}

export default AdminApp;
