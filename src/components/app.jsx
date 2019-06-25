import React from 'react';
import { Component } from 'react';
// import GoogleMapReact from 'google-map-react';

import FlatList from './flat_list.jsx';
import flats from './flats.js';
// import Marker from './marker.jsx'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats
    };
  }
  
  render() {
    return (
      <div>
        <FlatList flats={this.state.flats} />
        <div className="map-container">
        </div>
      </div>
    );
  }
}

export default App;