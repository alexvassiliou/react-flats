import React from 'react';
import { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import FlatList from './flat_list.jsx';
import flats from './flats.js';
import Marker from './marker.jsx'


class App extends Component {
  constructor(props) {
    super(props);

    // this sets the starting values for the highlighted flat whilst also supplying the flats data object
    this.state = {
      selectedFlat: flats[0],
      flats
    };
  }

  // this sets the centre position of the map on load as the first hotel position
  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  // self explanatory, changes selected flat on index input
  selectFlat = (index) => {
    this.setState({
      selectedFlat: flats[index]
    });
  }
  
  render() {
    return (
      // supplying array of hotel objects to flatlist component, as well as the currentl selectedflat and updated flat index
      <div>
        <FlatList 
          flats={this.state.flats} 
          selectedFlat={this.state.selectedFlat}
          selectFlat={this.selectFlat}
        />
        <div className="map-container">
        <GoogleMapReact defaultCenter={this.center()} defaultZoom={12}>
          <Marker lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng} />
        </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;