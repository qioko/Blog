import React, { Component } from 'react';
import BackBrick from './BackBrick';
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

  onReturn=()=>{
    const { display } = this.state
    if (display!=='ALL') {
      this.onSwitch('ALL')
    }
  }

  render() {
    const { display } =this.state
    return (
      <div className="content-main" onClick={this.onReturn}>
        <BackBrick />
        <div className="content-subarea">
          {work.map(content=><BoxGenerator content={content} display={display} onSwitch={this.onSwitch}/>)}
        </div>
      </div>
    );
  }
}
