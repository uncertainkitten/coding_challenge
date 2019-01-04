import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/login';

class App extends Component {
  render() {
    return (
      <div>
        <h1>It's a React App!</h1>
        <LoginForm />
      </div>
    );
  }
}

export default App;
