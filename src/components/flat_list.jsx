import React from 'react';
import Flat from './flat';



const FlatList = (props) => {
  // iterates through data passing it onto the flat component to create a flat component in the list.
  // selected is checking if the flat name being iterated through is also the current selected as supplied via the app prop
  const renderList = () => {
    return props.flats.map ((flat, index) => {
      return (
        <Flat 
          flat={flat}
          key={flat.lat}
          selected={flat.name === props.selectedFlat.name}
          index={index}
          selectFlat={props.selectFlat}    
        />
      );
    });
  }

  return (
    //renderList was extracted out into a seperate method for readability
    <div className="flat-list">
      {renderList()}
    </div>
  );
};


export default FlatList;