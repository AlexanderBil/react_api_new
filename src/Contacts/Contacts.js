import React from 'react';
import './Contacts.css';


class Contacts extends React.Component{
  render(){
    return(
<div className="contacts">
    <div className = 'contacts-block'>
        <p> Address : 11 Wall St, New York, NY 10005</p>
        <p><a href ='#'> Tel : +380 (50) 477 75 06</a></p>
        <div>
            <p> Mo-Fr 09:00-20:00</p>
            <p>Sa-Su 10:00-19:00</p>
        </div>
    </div>
     <div className = "link"><a href = '/map'> <span>Show on the map</span> </a></div>
</div>
    )
  }
}

export default Contacts;
