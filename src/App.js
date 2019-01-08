import React, { Component } from 'react';
import './App.css';
import EmployeePage from './components/employee_page';
import LoginForm from './components/login';
import {HashRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="app">
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/employee" component={EmployeePage} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
