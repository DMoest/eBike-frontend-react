import './customer.scss';
import React from "react";
import { Route, Routes, Link, NavLink } from 'react-router-dom'
import Logout from "../login/Logout"
import Login from "../login/Login";
import History from "./History";
import Home from "./Home";
import Payment from "./payment/Payment";
// import Adress from "./components/customer/Adress";


function CustomerApp(props) {
  console.log(props.user)
  return (
    <div className="App">
        <div className="nav__outer-wrapper">
            <div className="nav__brand">
                <Link to="/home">eBike</Link>
            </div>
            <div className="nav__menu">
                <NavLink to="/history" className="nav__link">Historik</NavLink>
                <NavLink to="/payment" className="nav__link">Betalning</NavLink>
                <NavLink to="/login" className="nav__link nav__btn">Logga in</NavLink>
                <NavLink to="/logout" className="nav__link nav__btn">Logga ut</NavLink>
            </div>
        </div>
        <Routes>
            <Route path="/home" element={ <Home user={props.user}/> }/>
            <Route path="/history" element={ <History user={props.user} /> }/>
            <Route path="/payment" element={ <Payment user={props.user} />}/>
            <Route path="/logout" element={ <Logout />}/>
            <Route path="/logout" element={ <Login user={props.user} />}/>
        </Routes>
        <div className="home-container">
        </div>
    </div>
  );
}

export default CustomerApp;
