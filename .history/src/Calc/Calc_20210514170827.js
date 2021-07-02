import React from 'react';
import './Calc.css';


class Calc extends React.Component{
  constructor(props){
    super (props);
    this.state = {
      result: 0
    }
  }

  static getDerivedStateFromProps(props, state){
    return {rate: props.rate}
  }

  calcRate = (e) =>{
   e.preventDefault();
   let elements = e.target.elements;
   let countCurrency = elements['count-currency'].value;
   let typeCurrency = elements['type-currency'].value;
   this.setState({result: (countCurrency/this.state.rate[typeCurrency]).toFixed(2)})
  }
  
  render(){
    return(
      <div className="calс">
      <div className="calk-title">Exchange calculator </div>
      <div className="calc-change ">
          <div className="calc-change-block">
              <p>Give</p>
              <form onSubmit = {this.calcRate}>
              <input type="number" defaultValue ="0" name = 'count-currency'/>
              <select name="type-currency" id="">
                  {Object.keys(this.props.rate).map((item, i) =>
            ( 
              <option key = {item} value = {item}>{item}</option>
            )
            )}
              </select>
              <button className='btn-1' type="submit">Translate</button>
              </form>
              
          </div>
          <div className="calc-change-block">
              <p>Get</p>
              <ul className="calc-res">
                  <li>EUR {this.state.result}</li>

              </ul>
          </div>
      </div>
      </div>
    )
  }
}

export default Calc;
