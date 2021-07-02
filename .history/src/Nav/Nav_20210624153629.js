import {}
import React from 'react';
import './Nav.css';


class Nav extends React.Component{
  render(){
    return(
   <nav className="nav">
    <ul className="ul">
        <li><a href="/">Exchange Rates</a></li>
        <li><a href="/sub">Weather forecast</a></li>
        <li><a href="/news">News</a></li>
        <li><a href="/contacts">Contacts</a></li>
    </ul>
</nav>
    )
  }
}

export default Nav;
