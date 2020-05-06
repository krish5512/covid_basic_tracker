import React from 'react';
import Header from './Header'
import { slide as Menu } from 'react-burger-menu';
import { Link, BrowserRouter as Router,Route } from 'react-router-dom';
import App from '../App';
import StateData from '../Components/StateData';
 import MapData from '../Components/MapData';

const Sidebar = () => {

    return (
        <div>
        <Header />
        <Router>
        <Menu>
            <div> <Link to="/">Home</Link></div> 
            <div><Link to="/StateData">State Wise</Link></div> 
            <div> <Link to="/MapData">Map Data</Link></div>
            <div>
            <Route exact path="/" component={App} />
            <Route path="/StateData" component={StateData} />
            <Route path="/MapData" component={MapData} />
            </div>
            </Menu>
        </Router>
        



        </div>
    )
}

export default Sidebar;


// 
// <BrowserRouter>

// </BrowserRouter>