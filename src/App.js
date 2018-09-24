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
      allFlats: [],
      selectedFlat: null,
      search: ''
    };
  }

  componentDidMount() {
    let url = "https://raw.githubusercontent.com/konqa/flats-boilerplate/master/flats.json";
    fetch(url) // AJAX
    .then(response => response.json())
    .then((data) => {
      this.setState({
        flats: data,
        allFlats: data
      })
    })
  }

  selectFlat = (flat) => {
    this.setState({    
      selectedFlat: flat
    })
  }

  handleSearch = (event) => {
    // console.log(event.target.value);
    this.setState({
      search: event.target.value,
      flats: this.state.allFlats.filter((flat) => new RegExp(event.target.value, "i").exec(flat.name))
    })
  }

  render() {

    let center = {
      lat: -46.410744,
      lng: 168.3715803
    }

    if(this.state.selectedFlat){
      center = {
        lat: this.state.selectedFlat.lat,
        lng: this.state.selectedFlat.lng
      }
    }

    return (
      <div className="App">
        <div className="main">

          <div className="search">
            <input type="text"
            placeholder="Search..."
            value={this.state.search}
            onChange={this.handleSearch}
            />

          </div>

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
            zoom={14}
            >
            {this.state.flats.map((flat) => {
              return <Marker 
              key={flat.id} 
              lat={flat.lat} 
              lng={flat.lng} 
              rating={flat.rating} 
              text={flat.price}
              selected={flat === this.state.selectedFlat}
              />
            })}
            </GoogleMapReact>
          </div>

        </div>
    );
  }
}

export default App;
