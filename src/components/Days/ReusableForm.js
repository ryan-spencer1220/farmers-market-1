import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function ReusableForm(props) {
  return (
    <form onSubmit={props.formSubmissionHandler}>
      <Form.Group className="mb-3" controlId="formDay">
        <Form.Label>Day</Form.Label>
        <Form.Control type="text" placeholder="Day of Week" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formLocation">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="Location" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formHours">
        <Form.Label>Hours</Form.Label>
        <Form.Control type="text" placeholder="Hours" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBooth">
        <Form.Label>Day</Form.Label>
        <Form.Control type="text" placeholder="Booth" />
      </Form.Group>
      <Button variant="primary" type="submit">
        {props.buttonText}
      </Button>
    </form>
  )
}

export default ReusableForm;
