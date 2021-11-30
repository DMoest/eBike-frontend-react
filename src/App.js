import './App.scss';
import React from "react";
import Login from "./components/login/Login";
import Home from "./components/customer/Home";

function App() {
  let user = "61a0eebb8ac18115b353cacb";
  return (
    <div className="App">
        <Home user={user} />
    </div>
  );
}

export default App;
