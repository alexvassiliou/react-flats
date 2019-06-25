import React from 'react';
import { Component } from 'react';
import Flat from 'react';


//parent
class FlatList extends Component {

  renderList() {
    return this.props.flats.map ((flat, index) => {
      <Flat flat={flat} key={flat.lat}/>
    });
  }

  render() {
    return (
      <div className="flat-list">
        {this.renderList()}
      </div>
    );
  }
}


export default FlatList;