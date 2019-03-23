import React, { Component } from 'react';
import BeginAnimation from './BeginAnimation';
import Entry from './Entry';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Entry/>
        {/* <BeginAnimation /> */}
      </div>
    );
  }
}

export default App;
