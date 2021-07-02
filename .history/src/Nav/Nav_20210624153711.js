import {Link} from 'react-router-dom';
import React from 'react';
import './Nav.css';


class Nav extends React.Component{
  render(){
    return(
   <nav className="nav">
    <ul className="ul">
        <li><Link to="/">Exchange Rates</Link></li>
        <li><Link to="/sub">Weather forecast</Link></li>
        <li><a href="/news">News</a></li>
        <li><a href="/contacts">Contacts</a></li>
    </ul>
</nav>
    )
  }
}

export default Nav;
