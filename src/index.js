import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import AuthWrapper from "./AuthWrapper";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CookiesProvider>
        <AuthWrapper />
      </CookiesProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
