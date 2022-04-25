import React from 'react';
import Form from 'react-bootstrap/Form';
import Option from './../Utilities/Option.js';
import DayDetail from './DayDetail';
import NewDayForm from './NewDayForm';
import DayList from './DayList';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import { v4 } from "uuid";

const marketSchedule = [
  {
    id: v4(),
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A"
  },
  {
    id: v4(),
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C"
  },
  {
    id: v4(),
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F"
  },
  {
    id: v4(),
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E"
  },
  {
    id: v4(),
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D"
  },
  {
    id: v4(),
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


  handlePopulateButton = () => {
    const { dispatch } = this.props;
    marketSchedule.forEach(function (market) {
      const action = {
        type: "ADD_EDIT_DAY",
        day: market.day,
        location: market.location,
        hours: market.hours,
        booth: market.booth,
        id: market.id
      };
      dispatch(action);
    });
  }

  handleChangingSelectedDay = (id) => {
    const selectedDay = this.props.mainDayList[id.target.value];
    this.setState({ selectedDay: selectedDay });
    // console.log(selectedDay)
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
    const { id, day, location, hours, booth } = newDay;
    const action = {
      type: "ADD_EDIT_DAY",
      day: day,
      location: location,
      hours: hours,
      booth: booth,
      id: id
    };
    dispatch(action);
    this.setState({ formVisibleOnPage: false })
    // marketSchedule.push(newDay);
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
    // if (this.state.formVisibleOnPage === false) {
    //   buttonText = "Add a day";
    //   let detail;
    //   if (this.state.selectedDay != null) {
    //     // detail = <DayDetail day={marketSchedule[this.state.selectedDay]} />
    //     detail = <DayDetail />
    //   } else {
    //     detail = '';
    //   }
    //   currentlyVisibleState =
    //     <React.Fragment>
    //       <Form.Select aria-label="Select day" onChange={(e) => this.changeHandler(e)}>
    //         {Object.values(this.mainDayList).map((market, index) =>
    //           <Option key={index} value={index} text={market.day} />
    //         )}
    //       </Form.Select>
    //       {detail}
    //     </React.Fragment>
    // } else {
    //   buttonText = "Cancel";
    //   currentlyVisibleState =
    //     <React.Fragment>
    //       <NewDayForm onNewDayCreation={this.handleAddingNewDayToList} />

    //     </React.Fragment>
    // }

    if (this.state.selectedDay != null) {
      currentlyVisibleState = (
        <DayDetail
          day={this.state.selectedDay}
        // onClickingDelete={this.handleDeletingTicket}
        // onClickingEdit={this.handleEditClick}
        />
      );
      buttonText = "Return to Day List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewDayForm onNewDayCreation={this.handleAddingNewDayToList} />
      );
      buttonText = "Return to Day List";
    } else {
      currentlyVisibleState = (
        <DayList
          onDaySelection={this.handleChangingSelectedDay}
          dayList={this.props.mainDayList}
        // onTicketSelection={this.handleChangingSelectedDay}
        />

        // <Form.Select aria-label="Select day" onChange={(e) => this.changeHandler(e)}>
        //   {console.log("here ", this.props.mainDayList)}
        //   {Object.values(this.props.mainDayList).map((market, index) =>
        //     <Option key={index} value={market.id} text={market.day} />
        //   )}
        // </Form.Select>
      );
      buttonText = "Add Day";
    }



    return (
      <React.Fragment>
        {currentlyVisibleState}
        <Button variant="dark" onClick={this.handleClick}>{buttonText}</Button>
        <Button variant="dark" onClick={this.handlePopulateButton}>Populate</Button>
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

// EditDayForm.propTypes = {
//   day: PropTypes.object,
//   onEditTicket: PropTypes.func,
// };

DaysContainer.propTypes = {
  mainDayList: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    mainDayList: state,
  };
};


DaysContainer = connect(mapStateToProps)(DaysContainer);
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
