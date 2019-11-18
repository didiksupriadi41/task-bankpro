import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './Navbar.css';
import Home from '../../Container/Home/Home';
import Transfer from '../../Container/Transfer/Transfer';
import Transaction from '../../Container/Transaction/Transaction';
import logo from '../../assets/logo.png';

const Navbar = (props) => {
    return (
        <Router>
            <div className="navbar">
                <nav>
                <ul>
                    <li><Link to={'/'} id="logo-link"> <img src={logo} alt="logo" className="logo-navbar"/> </Link></li>
                    <li><Link to={'/transfer'}>Transfer</Link></li>
                    <li><Link to={'/transaction'}>Transaction</Link></li>
                    <li><Link to={'/'} onClick={props.onLogout}>Logout</Link></li>
                </ul>
                </nav>

                <Switch>
                    <Route exact path='/'>
                        <Home name="Home"/>
                    </Route>
                    <Route path='/transfer'>
                        <Transfer />
                    </Route>
                    <Route path='/transaction'>
                        <Transaction />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Navbar;