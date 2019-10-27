import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './Navbar.css';
import Home from '../Home/Home';
import Transfer from '../Transfer/Transfer';
import Transaction from '../Transaction/Transaction';

const Navbar = () => {
    return (
        <Router>
            <div className="navbar">
                <nav>
                <ul>
                    <li><Link to={'/'}> Home </Link></li>
                    <li><Link to={'/Transfer'}>Transfer</Link></li>
                    <li><Link to={'/Transaction'}>Transaction</Link></li>
                </ul>
                </nav>

                <Switch>
                    <Route exact path='/'>
                        <Home name="Home"/>
                    </Route>
                    <Route path='/Transfer'>
                        <Transfer />
                    </Route> component={Transfer} />
                    <Route path='/Transaction'>
                        <Transaction />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Navbar;