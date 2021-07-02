import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import News from './News/News';
import Contacts from './Contacts/Contacts';
import Weather from './Weather/Weather';
import Map from './Map/Map';
import Rate from './Rate/Rate';
import Error404 from './Error404/Eror404';


class App extends React.Component{
  constructor(props){
    super (props);
  }
  render(){
    return(
     <div className="wrapper">
       <Router basename = '/api-react-app'>
        <Header />
          <Switch>
            <Route exact path = '/' component = {Rate} />
            <Route path = '/news' component = {News} />
            <Route  path = '/contacts' component = {Contacts} />
            <Route  path = '/sub' component = {Weather} />
            <Route  path = '/map' component = {Map} />
            <Route  component = {Error404} />
          </Switch>
          <Footer />
       </Router>
     </div>
    )
  }
}

export default App;
