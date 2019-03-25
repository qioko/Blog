import React, { Component } from 'react';
import BeginAnimation from './BeginAnimation';
import Entry from './Entry';
import Content from './Content'
import './App.scss';

class App extends Component {
  constructor(){
    super()
    this.state={
      hasContent:false,
      hasEntry:true,
    }
  }

  showContent = () => {
    this.setState({hasContent:true})
  }
  showEntry = () => {
    this.setState({hasEntry:false},()=>this.setState({hasEntry:true}))
  }
  
  render() {
    const { hasContent, hasEntry } = this.state
    return (
      <div className="App">
        {hasEntry && <Entry showContent={this.showContent} showEntry={this.showEntry}/>}
        {hasContent && <Content/>}
        <BeginAnimation />
      </div>
    );
  }
}

export default App;
