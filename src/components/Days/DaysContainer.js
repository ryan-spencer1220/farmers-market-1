import React from 'react';
import Form from 'react-bootstrap/Form';
import Option from './../Utilities/Option.js';
import DayDetail from './DayDetail';
import NewDayForm from './NewDayForm';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';

const marketSchedule = [
  {
    id: 0,
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A"
  },
  {
    id: 1,
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C"
  },
  {
    id: 2,
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F"
  },
  {
    id: 3,
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E"
  },
  {
    id: 4,
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D"
  },
  {
    id: 5,
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G"
  }
];

class DaysContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedDay: null,
      formVisibleOnPage: false,
      editing: false
    };
  }

  changeHandler(e) {
    this.setState({ selectedDay: e.target.value })
  };

  handleClick = () => {
    if (this.state.selectedDay != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedDay: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }))
    }
  }

  handleAddingNewDayToList = (newDay) => {
    const { dispatch } = this.props;
    const { day, location, hours, booth } = newDay;
    const action = {
      type: "ADD_EDIT_DAY",
      day: day,
      location: location,
      hours: hours,
      booth: booth,
    };
    dispatch(action);
    this.setState({ formVisibleOnPage: false })
    marketSchedule.push(newDay);
  };

  handleEditingNewDayToList = (newDay) => {
    const { dispatch } = this.props;
    const { day, location, hours, booth } = newDay;
    const action = {
      type: "ADD_EDIT_DAY",
      day: day,
      location: location,
      hours: hours,
      booth: booth,
    };
    dispatch(action);
    this.setState({ editing: false, selectedDay: null })
  };

  render() {
    let selectedDay = this.state.selectedDay;
    let buttonText = null;
    let currentlyVisibleState = '';
    if (this.state.formVisibleOnPage === false) {
      buttonText = "Add a day";
      let detail;
      if (this.state.selectedDay != null) {
        detail = <DayDetail day={marketSchedule[this.state.selectedDay]} />
      } else {
        detail = '';
      }
      currentlyVisibleState =
        <React.Fragment>
          <Form.Select aria-label="Select day" onChange={(e) => this.changeHandler(e)}>
            {marketSchedule.map((market, index) =>
              <Option key={index} value={index} text={market.day} />
            )}
          </Form.Select>
          {detail}
        </React.Fragment>
    } else {
      buttonText = "Cancel";
      currentlyVisibleState =
        <React.Fragment>
          <NewDayForm onNewDayCreation={this.handleAddingNewDayToList} />

        </React.Fragment>
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <Button variant="dark" onClick={this.handleClick}>{buttonText}</Button>
      </React.Fragment>
    );
    // return (
    //   <React.Fragment>
    //     <Form.Select aria-label="Select day" onChange={(e) => this.changeHandler(e)}>
    //       {marketSchedule.map((market, index) =>
    //         <Option key={index} value={index} text={market.day} />
    //       )}
    //     </Form.Select>
    //     <div className="h-25">
    //       {renderText}

    //     </div>
    //   </React.Fragment>
    // )
  }

}

DaysContainer = connect()(DaysContainer);
export default DaysContainer;


/*

DaysContainer() {
    return (
      <React.Fragment>
        <Form.Select aria-label="Select day">
          {marketSchedule.map((market, index) =>
            <Option key={index} val={market.day} />
          )}
        </Form.Select>
        <div className="h-25">
            <DayInfo day={marketSchedule[2]}/>
        </div>
      </React.Fragment>
    );
  }


*/
