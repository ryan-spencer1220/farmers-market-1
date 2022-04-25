import React from 'react';

function ProduceListing(props) {
  return (
    <ul>
      {props.selections.map((produce, index) => 
        <li id={index} key={index}>{produce}</li>
      )}
    </ul>
  );
}

export default ProduceListing;