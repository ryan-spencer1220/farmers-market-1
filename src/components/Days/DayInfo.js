import React from 'react';


function DayInfo(props) {
  return (
    <React.Fragment>
      <h4>{props.day.day}</h4>
      <p>{props.day.location} | Booth: {props.day.booth}</p> 
      <p>{props.day.hours}</p>
    </React.Fragment>    
  );
} 

export default DayInfo;