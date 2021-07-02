import React from 'react';
import './Footer.css';
import foto from './1.png'


class Footer extends React.Component{
  render(){
    return(
<div className="footer">
    <div className = 'footer-about'>
        <p>Made on</p>
        <div className = "footer-about-foto">
        <img src={foto} className = 'foto3' alt="" />
        </div>
        <p>Alexander</p>
    </div>
</div>
    )
  }
}

export default Footer;
