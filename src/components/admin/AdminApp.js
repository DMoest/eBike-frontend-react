import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

// Pages
import Bikes from "./pages/Bikes/Bikes";
import Stations from "./pages/Stations/Stations";
import Logout from "../login/Logout";
import Customers from "./pages/Customers/Customers.js";

// Global components
import Nav from "../global/Nav/Nav";

function AdminApp({ token, id }) {
  const [city, setCity] = useState("Stockholm");

  function handleSetCity(city) {
    setCity(city);
  }

  // Token check
  if (!token) {
    window.location.href = "http://localhost:3000/denied";
    return;
  }

  return (
    <div className="App">
      <Nav handleSetCity={handleSetCity} city={city} id={id} />
      <div className="container__main">
        <Routes>
          <Route
            exact
            path="/stations"
            element={<Stations city={city} token={token} id={id} />}
          />
          <Route
            path="/customers"
            element={<Customers city={city} token={token} id={id} />}
          />
          <Route path="/logout" element={<Logout />} token={token} id={id} />
          <Route
            exact
            path="/"
            element={<Bikes city={city} token={token} id={id} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default AdminApp;
