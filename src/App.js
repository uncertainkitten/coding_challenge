import React, { Component } from 'react';
import './App.css';
import NewEmployeeForm from './components/new_employee_form';

class App extends Component {
  render() {
    return (
      <div>
        <h1>It's a React App!</h1>
        <NewEmployeeForm firstName="Bob" lastName="McAsshole" street="Street Street" city="City of Cities" state="Of Confusion" zip="90210"/>
      </div>
    );
  }
}

export default App;
