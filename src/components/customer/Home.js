import './customer.scss';
import React from "react";
import { Route, Routes, Link, NavLink } from 'react-router-dom'
import Login from "../login/Login";
import History from "./History";
import Payment from "../payment/Payment";
// import Adress from "./components/customer/Adress";


function Home(props) {
  console.log(props.user)
  return (
    <div className="App">
        <div className="nav__outer-wrapper">
            <div className="nav__brand">
                <Link to="/">eBike</Link>
            </div>
            <div className="nav__menu">
                <NavLink to="/history" className="nav__link">Historik</NavLink>
                <NavLink to="/login" className="nav__link">Login</NavLink>
                <NavLink to="/payment" className="nav__link">Betalning</NavLink>
            </div>
        </div>
        <Routes>
            <Route path="/history" element={ <History user={props.user} /> }/>
            <Route path="/payment" element={ <Payment user={props.user} />}/>
            <Route path="/login" element={ <Login user={props.user} />}/>
        </Routes>
    </div>
  );
}

export default Home;
