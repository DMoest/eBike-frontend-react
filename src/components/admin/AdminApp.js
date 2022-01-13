import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

// Pages
import Bikes from "./pages/Bikes/Bikes";
import Stations from "./pages/Stations/Stations";
import Logout from "../login/Logout";
import Customers from "./pages/Customers/Customers.js";

// Global components
import Nav from "../global/Nav/Nav";

function AdminApp({ cookies }) {
  const [city, setCity] = useState("Stockholm");
  // const [isAuthenticated, userHasAuthenticated] = useState(false);

  function handleSetCity(city) {
    setCity(city);
  }

  // async function onLoad() {
  //   try {
  //     await Auth.currentSession();
  //     userHasAuthenticated(true);
  //   } catch (e) {
  //     alert(e);
  //   }
  // }

  // useEffect(() =>{
  //   onLoad();
  // })

  // // Token check TEMP
  // if (!cookies.token) {
  //   if (cookies.token === undefined) {
  //     window.location.href = "http://localhost:3000/denied";
  //     return;
  //   }
  // }

  return (
    <div className="App">
      <Nav handleSetCity={handleSetCity} city={city} />
      <div className="container__main">
        <Routes>
          <Route exact path="/stations" element={<Stations city={city} />} />
          <Route path="/customers" element={<Customers city={city} />} />
          <Route path="/logout" element={<Logout />} />
          <Route exact path="/" element={<Bikes city={city} />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminApp;
