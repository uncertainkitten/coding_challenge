import React, { Component } from 'react';
import './App.css';
import HobbyIndex from './components/hobby_index';

class App extends Component {
  render() {
    return (
      <div>
        <h1>It's a React App!</h1>
        <HobbyIndex />
      </div>
    );
  }
}

export default App;
