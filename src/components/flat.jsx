import React, { Component } from 'react';


class Flat extends Component {
  // passes index to selectFlat method in app to set the flat as being the index clicked on.
  // which will change the flat highlighted on screen.
  handleClick = () => {
    this.props.selectFlat(this.props.index);
  }

  render() {
    return (
      <div className={this.props.selected ? 'card active' : 'card'} 
           style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.flat.imageUrl}')` }}>
        <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
          <p>{this.props.flat.lat} {this.props.flat.lng}</p>
        </div>
        <a className="card-link" href="#" onClick={this.handleClick}></a>
      </div>
    );
  }
}

export default Flat;
