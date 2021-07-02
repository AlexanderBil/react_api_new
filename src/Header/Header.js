import React from 'react';
import './Header.css';
import logo from '../Header/logo.png';
import Nav from '../Nav/Nav';

class Header extends React.Component{
  render(){
    return(
<div className="header">
   <div className="header-logo">
       <img src= {logo} alt=""/>
   </div>
   <Nav />
</div>

    )
  }
}

export default Header;
