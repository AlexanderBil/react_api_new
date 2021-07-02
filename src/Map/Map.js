import React from 'react';
import './Map.css';


class Map extends React.Component{
  render(){
    return(
     <div className = 'map'>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48370.179244290164!2d-74.03216074210695!3d40.737028408123756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a161980d8a1%3A0x9e5797d5a981701d!2z0J3RjNGOLdCZ0L7RgNC60YHQutCw0Y8g0YTQvtC90LTQvtCy0LDRjyDQsdC40YDQttCw!5e0!3m2!1sru!2sua!4v1613657508846!5m2!1sru!2sua" width="100%" height="450" ></iframe>
     </div>
    )
  }
}

export default Map;
