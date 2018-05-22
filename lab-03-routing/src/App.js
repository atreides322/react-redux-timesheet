import React, {Component} from 'react';

import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';

import './App.css';
import Projects from './components/projects/Projects';
import Employees from './components/employees/Employees';
import Timesheets from './components/timesheets/Timesheets';
import Navigation from './components/nav/Navigation';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation/>
          <Switch>
            <Route path="/projects" component={Projects}/>
            <Route exact path="/employees" component={Employees}/>
            <Route path="/employees/:user_id/timesheets" component={Timesheets}/>
            <Redirect to="/employees"/>
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
