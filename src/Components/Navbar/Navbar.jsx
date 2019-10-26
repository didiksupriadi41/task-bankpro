import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './Navbar.css';
import Home from '../Home/Home';
import Transfer from '../Transfer/Transfer';
import Transaction from '../Transaction/Transaction';
// import LogoBank from '../LogoBank/LogoBank';

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
                {/* <LogoBank /> */}
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/Transfer' component={Transfer} />
                    <Route path='/Transaction' component={Transaction} />
                </Switch>
            </div>
        </Router>
    )
}

export default Navbar;