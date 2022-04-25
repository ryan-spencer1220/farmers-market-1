import React from 'react';
import PropTypes from 'prop-types';

function Option(props) {
  return (
      <option value={props.value}>{props.text}</option>
  );
}

Option.propTypes = {
  text: PropTypes.string,
  value: PropTypes.number
}

export default Option;