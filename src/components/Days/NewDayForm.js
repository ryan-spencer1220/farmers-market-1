import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewDayForm(props) {
  function handleNewDayFormSubmission(event) {

    event.preventDefault();
    props.onNewDayCreation({
      day: event.target.formDay.value,
      location: event.target.formLocation.value,
      hours: event.target.formHours.value,
      booth: event.target.formBooth.value,
      id: v4(),
    });

  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewDayFormSubmission}
        buttonText="Add New Day"
      />
    </React.Fragment>
  );
}

NewDayForm.propTypes = {
  onNewDayCreation: PropTypes.func,
};

export default NewDayForm;
