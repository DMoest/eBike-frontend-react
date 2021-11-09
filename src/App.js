import './css/App.css';
import './css/Other.css'
import { Route, Routes } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Cities from './pages/Cities'
import Bikes from './pages/Bikes'
import Charging from './pages/Charging'
import Login from './pages/Login'
import City from './pages/City'

// Global components
import Nav from './components/global/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/about" element={ <About /> }/>
        <Route path="/cities" element={ <Cities /> }/>
        <Route path="/bikes" element={ <Bikes /> }/>
        <Route path="/charging" element={ <Charging />}/>
        <Route path="/login" element={ <Login />}/>
        <Route path="/city" element={ <City />}/>
      </Routes>
    </div>
  );
}

export default App;
