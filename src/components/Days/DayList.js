import React from "react";
import PropTypes from "prop-types";
import Form from 'react-bootstrap/Form';
function DayList(props) {
  return (
    <React.Fragment>
      <Form.Select aria-label="Select day" onChange={(e) => props.onDaySelection(e)}>
        {Object.values(props.dayList).map((day) =>
          <option value={day.id} key={day.id}>{day.day}</option>
        )}
      </Form.Select>
    </React.Fragment >
  )
}

DayList.propTypes = {
  dayList: PropTypes.object,
  onDaySelection: PropTypes.func,
};

export default DayList;
