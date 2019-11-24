import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './Navbar.css';
import Home from '../../Container/Home/Home';
import Transfer from '../../Container/Transfer/Transfer';
import Transaction from '../../Container/Transaction/Transaction';
import logo from '../../assets/logo.png';

const Navbar = (props) => {
    const [, setPage] = useState("");  
    
    return (    
        <Router>
            <div className="navbar">
                <nav>
                <ul>
                    {/* {window.location.pathname === '/' && <li><Link to={'/'} id="logo-link"> <img src={logo} alt="logo" className="logo-navbar"/> </Link></li>} */}
                    {/* {window.location.pathname !== '/' && <li><Link to={'/'} onClick={()=>setPage("Home")} id="logo-link"> <img src={logo} alt="logo" className="logo-navbar deactive"/> </Link></li>} */}

                    <li><Link to={'/'} onClick={()=>setPage("Home")} id="logo-link"> <img src={logo} alt="logo" className="logo-navbar deactive"/> </Link></li>

                    { window.location.pathname === '/transfer' && <li><Link to={'/transfer'} id="trf" className="active">Transfer</Link></li>}
                    { window.location.pathname !== '/transfer' && <li><Link to={'/transfer'} id="trf" onClick={()=>setPage("Transfer")} className="deactive">Transfer</Link></li>}

                    { window.location.pathname === '/transaction' && window.location.pathname !== '/' && <li><Link to={'/transaction'} className="active">Transaction</Link></li>}
                    { window.location.pathname !== '/transaction' && <li><Link to={'/transaction'} onClick={()=>setPage("Transaction")}>Transaction</Link></li>}
                    
                    {/* <li>{props.page}</li> */}
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