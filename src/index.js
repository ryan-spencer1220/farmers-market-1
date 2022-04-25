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

const store = createStore(daysContainerReducer);
store.subscribe(() => console.log(store.getState()));

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
