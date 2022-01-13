import React from "react";

const handleLogout = () => {
  window.location.href = "http://localhost:3000/";
};

function Logout() {
  return <div>{handleLogout()}</div>;
}

export default Logout;
