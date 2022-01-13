import React from 'react';
import { Route, Routes } from "react-router-dom";
import { withCookies } from 'react-cookie';
import App from './App';

const AuthWrapper = (props) => {
return (
        <App cookies={props.cookies}/>
    )
}

export default withCookies(AuthWrapper);
