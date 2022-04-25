import './../css/App.css';
import React from "react";
import Header from './Header/Header.js';
import MonthsContainer from './Months/MonthsContainer';
import DaysContainer from './Days/DaysContainer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="row px-5 pt-2">
        <div className="col-sm-6">
          <MonthsContainer />
        </div>
        <div className="col-sm-2">
          
        </div>
        <div className="col-sm-4">
          <DaysContainer />
        </div>
      </div>
    </React.Fragment>
  ); 
}

export default App;


// X-Small	None	<576px
// Small	sm	≥576px
// Medium	md	≥768px
// Large	lg	≥992px
// Extra large	xl	≥1200px
// Extra extra large	xxl	≥1400px

//The classes are named using the format {property}{sides}-{size} for xs and {property}{sides}-{breakpoint}-{size} for sm, md, lg, xl, and xxl.