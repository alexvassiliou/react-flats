import React, { Component } from 'react';
import flats from './flats';

class Flat extends Component {
  render() {
    return (
      <div className="card" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.flat.imageUrl}')` }}>
        <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
          <p>{this.props.flat.lat} {this.props.flat.lng}</p>
        </div>
      </div>
    );
  }
}

export default Flat;
