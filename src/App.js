import './App.scss';
import React from "react";
import Login from "./components/login/Login";
import Home from "./components/customer/Home";

function App() {
  let user = "619623db70b64292ff279272";
  return (
    <div className="App">
        <Home user={user} />
    </div>
  );
}

export default App;
