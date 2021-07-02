import {Link} from 'react-router-dom';
import React from 'react';
import './Nav.css';
import


class Nav extends React.Component{
  render(){
    return(
   <nav className="nav">
    <ul className="ul">
        <li><Link to="/">Exchange Rates</Link></li>
        <li><Link to="/sub">Weather forecast</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
    </ul>
</nav>
    )
  }
}

export default Nav;
