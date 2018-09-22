import React, { Component } from 'react';
import './App.css';
import Flat from './components/flat';

class App extends Component {
  render() {

      const flat = {
        "id": 145,
        "name": "Charm at the Steps of the Sacre Coeur/Montmartre",
        "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
        "price": 164,
        "priceCurrency": "EUR",
        "lat": 48.884211,
        "lng": 2.346890
      };



    return (
      <div className="App">
        <div className="main">
          <div className="search"></div>
          <div className="flats">
            <Flat flat={flat} className="flat"/>
            <Flat flat={flat} className="flat"/>
            <Flat flat={flat} className="flat"/>
          </div>
          <div className="map"></div>
        </div>
      </div>
    );
  }
}

export default App;
