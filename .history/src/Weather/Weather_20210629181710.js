import React from 'react';
import './Weather.css';
import foto from './1.png'



class Weather extends React.Component{
  constructor(props){
    super (props);
    this.state = {
      'weather': {}
    }
  }



weatherShow = (e) => {
  e.preventDefault();
  let elements = e.target.elements;
  let townName = elements.town.value;
  if(townName == ''){
    alert('Enter the town')
  }
else{
  fetch(`httpі://api.openweathermap.org/data/2.5/weather?q=${townName}&appid=b55fa2065395d8fb34e5fcd609ccf1c0`)
  .then(data => data.json())
  .then(data => {
    let obj = {};
    obj.Town = data.name
    obj.Temperature = (data.main.temp -273).toFixed(0) + '℃'
    obj.Humidity = data.main.humidity + '%'
    obj.Pressure = data.main.pressure + 'mmHg'
    this.setState({weather: obj})
  })
}

}

  render(){
    return(
    <div className = 'weather-main'>
      <div className="weather_bg"></div>
         <img src={foto} className = 'foto' alt="" />
    <form className = 'form-2' action="" onSubmit = {this.weatherShow}>
    <input type = "text"  name = 'town' placeholder = 'Enter city '/>
    <button type = 'submit'>Show</button>
    </form>

      <div className="weather-block-main">
      {Object.entries(this.state.weather).map((item, i) =>
            ( 
            <div className="weather-block" key = {item}>
            <div className="weather-block-name">{item[0]} - {item[1]}</div>
           </div>
           )
            )}
      </div>
 
      </div>
    )
  }
}



export default Weather;
