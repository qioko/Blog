import React, { Component } from 'react';
import BackBrick from './List';
import BoxGenerator from './BoxGenerator'
import './index.scss'
import work from './Work'

export default class Content extends Component {
  constructor() {
    super()
    this.state={
      display:'ALL'
    }
  }
  onSwitch=(name)=>{
    this.setState({
      display:name
    })
  }
  render() {
    const { display } =this.state
    return (
      <div className="content-main">
        <BackBrick />
        <div className="content-subarea">
          {work.map(content=><BoxGenerator content={content} display={display} onSwitch={this.onSwitch}/>)}
        </div>
      </div>
    );
  }
}
