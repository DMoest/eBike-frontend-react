// import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import City from './pages/City'
import Bike from './pages/Bike'
import Charging from './pages/Charging'
import Map from './pages/Map'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/about" element={ <About /> }/>
        <Route path="/city" element={ <City /> }/>
        <Route path="/bike" element={ <Bike /> }/>
        <Route path="/charging" element={ <Charging />}/>
        <Route path="/map" element={ <Map /> }/>
      </Routes>
    </div>
  );
}

export default App;
