import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";
import daysContainerReducer from "./reducers/days-container-reducer";
import { Provider } from "react-redux";
import { v4 } from "uuid";
const store = createStore(daysContainerReducer);
store.subscribe(() => console.log(store.getState()));

// const marketSchedule = [
//   {
//     id: v4(),
//     day: "Sunday",
//     location: "Lents International",
//     hours: "9:00am - 2:00pm",
//     booth: "4A"
//   },
//   {
//     id: v4(),
//     day: "Monday",
//     location: "Pioneer Courthouse Square",
//     hours: "10:00am - 2:00pm",
//     booth: "7C"
//   },
//   {
//     id: v4(),
//     day: "Tuesday",
//     location: "Hillsboro",
//     hours: "5:00pm - 8:30pm",
//     booth: "1F"
//   },
//   {
//     id: v4(),
//     day: "Wednesday",
//     location: "Shemanski Park",
//     hours: "10:00am - 2:00pm",
//     booth: "3E"
//   },
//   {
//     id: v4(),
//     day: "Thursday",
//     location: "Northwest Portland",
//     hours: "2:00pm - 6:00pm",
//     booth: "6D"
//   },
//   {
//     id: v4(),
//     day: "Saturday",
//     location: "Beaverton",
//     hours: "10:00am - 1:30pm",
//     booth: "9G"
//   }
// ];


// marketSchedule.forEach(function (market) {
//   const action = {
//     type: "ADD_EDIT_DAY",
//     day: market.day,
//     location: market.location,
//     hours: market.hours,
//     booth: market.booth,
//     id: market.id
//   };
//   dispatch(action);
// });



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
