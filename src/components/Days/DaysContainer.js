import React from 'react';
import Form from 'react-bootstrap/Form';
import Option from './../Utilities/Option.js';
import DayInfo from './DayInfo';

const marketSchedule = [  
  {  
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A"
  },
  {  
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C"
  },
  {  
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F"
  },
  {  
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E"
  },
  {  
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D"
  },
  {  
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
      selectedValue: 0
    };
  }
  
  changeHandler(e) {
    this.setState({selectedValue: e.target.value})
  };
  
  render() {
    let selectedValue = this.state.selectedValue;

    // const {selectedValue, another, oneMore} = this.state;

    return (
      <React.Fragment>
        <Form.Select aria-label="Select day" onChange={(e) => this.changeHandler(e)}>
          {marketSchedule.map((market, index) => 
            <Option key={index} value={index} text={market.day} />
          )}
        </Form.Select>
        <div className="h-25">
          <DayInfo day={marketSchedule[selectedValue]}/>
        </div>
      </React.Fragment>
    )
  }
  
}
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