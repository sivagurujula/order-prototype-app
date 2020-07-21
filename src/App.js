import React from 'react';
import './App.css';
// import {BrowserRouter as Router , Route,  Switch } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
// import AppointmentsContainer from './containers/AppointmentsContainer';
// import Products from '../src/components/Products'
// import HorizontalLinearStepper from './components/ProgressSteps';
import Checkout from './components/Checkout';

function App(props) {
  
   return (
      <React.Fragment>
         <Navbar expand="lg" bg="primary" variant="dark">
           
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      BT
    </Navbar.Brand>
  </Navbar>
  
  <div className="container">
    <br></br>
  
  {/* <HorizontalLinearStepper /> */}
  <Checkout />
  {/* <Router>
     
      <Switch>
        <Route  path="/reserve" component={AppointmentsContainer} />        
        <Route exact path="/home" component={Products} />
        <Route exact path="/" component={Checkout} />        
      </Switch>      
    </Router> */}
  
            </div>
        
      </React.Fragment>
      
  );
}

export default App;
