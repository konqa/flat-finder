import React, { Component } from 'react';
import './marker.css';

class Marker extends Component {
  render(){
    return (
      <div className="marker">
        €{this.props.text}
      </div>
    );
  }

}

export default Marker;