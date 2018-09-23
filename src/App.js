import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './App.css';
import Flat from './components/flat';
import Marker from './components/marker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: [],
      selectedFlat: null
    };
  }

  componentDidMount() {
    let url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json";
    fetch(url) // AJAX
    .then(response => response.json())
    .then((data) => {
      this.setState({
        flats: data
      })
    })
  }


  selectFlat = (flat) => {
    console.log('iyi', flat);
    this.setState({    
      selectedFlat: flat
    })
  }

  render() {

    const center = {
      lat: 48.8566,
      lng: 2.3522
    }

    return (
      <div className="App">
        <div className="main">

          <div className="search"></div>

          <div className="flats">
            {this.state.flats.map((flat) => {
              return <Flat 
              key={flat.id} 
              flat={flat} 
              selectFlat={
                this.selectFlat
              } />
            })}
          </div>

          </div>

          <div className="map">
            <GoogleMapReact
            // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
            center={center}
            zoom={11}
            >
            {this.state.flats.map((flat) => {
              return <Marker key={flat.id} lat={flat.lat} lng={flat.lng} text={flat.price} />
            })}
            </GoogleMapReact>
          </div>

        </div>
    );
  }
}

export default App;
