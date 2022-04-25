import React from 'react';
import Button from 'react-bootstrap/Button';

function DayDetail(props) {
  return (
    <React.Fragment>
      {/* {console.log(props)} */}
      <h4>{props.day.day}</h4>
      <p>{props.day.location} | Booth: {props.day.booth}</p>
      <p>{props.day.hours}</p>
      {/* <Button variant="dark" type="button">Edit</Button>
      <Button variant="danger" type="button" className="ms-3" >Delete</Button> */}
    </React.Fragment>
  );
}

export default DayDetail;
