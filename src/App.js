import React, { Component } from 'react';
import BeginAnimation from './BeginAnimation';
import Entry from './Entry';
import Content from './Content'
import './App.scss';

class App extends Component {
  constructor(){
    super()
    this.state={
      hasContent:true,
    }
  }

  showContent = () => {
    this.setState({hasContent:true})
  }
  
  render() {
    const { hasContent } = this.state
    return (
      <div className="App">
        {/* <Entry showContent={this.showContent}/> */}
        {hasContent && <Content/>}
        {/* <BeginAnimation /> */}
      </div>
    );
  }
}

export default App;
