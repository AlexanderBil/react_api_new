//Компонент для курса валют(калькулятор обмена и курс валют)
import React from 'react';
import './Rate.css';
import Calc from '../Calc/Calc';
// import foto from './1.png'


class Rate extends React.Component{
  constructor(props){
    super (props);
    this.state = {
      'date': '',
      'currencyRate': {}
    }
    this.currency = ['USD', 'GBP', 'RUB', 'CAD', 'PLN', 'PHP'];  
  }

  componentDidMount(){
    fetch ('https://api.exchangeratesapi.io/v1/latest?access_key=86f275c0f3b8ecb3f793b22859847c3a')
   .then(data => {
     return data.json();
   })
   .then(data => {
    this.setState({date: data})
    let result = {};
    for(let i = 0; i < this.currency.length; i++){
      result[this.currency[i]] = data.rates[this.currency[i]]
    }
    this.setState({currencyRate: result})
   }) 
  }

  render(){
    return(
      <div className="rate">
      <Calc rate = {this.state.currencyRate}/>
      {/* <img src={foto} className = 'foto2' alt="" /> */}

      <div className="rate-title">Exchange rates for {this.state.date}</div>
      {Object.keys(this.state.currencyRate).map((item, i) =>
            ( 
              
            <div className="rate-block" key = {item}>
            <div className="rate-block-out">For 1 EUR you can buy:</div>
            <div className="rate-block-in" >{this.state.currencyRate[item].toFixed(2)}</div>
            <div className="rate-block-name">{item}</div>
           </div>
           )
            )}
      </div>
    )
  }
}

export default Rate;
