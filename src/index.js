import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
//import createLogger from 'redux-logger'
//import cartReducer from './reducers/cartReducer';

// import { Router , Route,  Switch } from 'react-router-dom';
// import { browserHistory } from 'react-router';
import appointmentsReducer from './reducers/appointmentsReducer';




const middleware = applyMiddleware(thunk)
const store = createStore(appointmentsReducer, middleware)


ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <Provider store={store}>
     <App />
    {/* <Router history={history}> */}
    
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
