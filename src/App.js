import React from "react";
import Login from "./components/login/Login";
import Logout from "./components/login/Logout";
import CustomerApp from "./components/customer/CustomerApp";
import AdminApp from "./components/admin/AdminApp";
import HomePageApp from "./components/homepage/HomePageApp";
import { Route, Routes } from 'react-router-dom';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            active: '',
            toggle: 'home', // add customer or admin
            test_user: "61a0eebb8ac18115b353cacb"
        };
    }

    handleLogin = (childData) => {
    }

    handleLogout = (childData) => {
    }

    render() {
        const toggle = {
          admin: 'customer',
          customer: 'admin',
          home: 'home',
        };

        var content;

        if (this.state.active === 'customer' || this.state.toggle === 'customer') {
            content = <CustomerApp user={this.state.test_user}/>;
        } else if (this.state.active === 'admin' || this.state.toggle === 'admin') {
            content = <AdminApp/>;
        } else if (this.state.active === 'home' || this.state.toggle === 'home') {
            content = <HomePageApp/>;
        } else {
            content = <Login parentCallback = {this.handleLogin} />
        }

        return (
            <div>
                <button onClick={() => {this.setState({toggle: toggle[this.state.toggle]})}}>{toggle[this.state.toggle]}</button>
                {content}
                <Routes>
                    <Route path="/login" element={ <Login parentCallback = {this.handleLogin}/> }/>
                    <Route path="/logout" element={ <Logout parentCallback = {this.handleLogout}/> }/>
                </Routes>
            </div>
        );
    }
}

export default App;
