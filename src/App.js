import React, { Component } from 'react';
import './App.css';
import EmployeePage from './components/employee_page';

class App extends Component {
  render() {
    return (
      <div>
        <h1>It's a React App!</h1>
        <EmployeePage />
      </div>
    );
  }
}

export default App;
