import React, { Component } from 'react';
import './index.scss';

export default class List extends Component {
  onSwitch=()=>{
    const { content,display,onSwitch } = this.props
    if (display==='ALL') {
      onSwitch(content.name)
    } else {
      onSwitch('ALL')
    }
  }
  render() {
    const { content,display } = this.props
    const box= display === content.name 
      ? "contain-box super-me"
      : display === "ALL" ? "contain-box" : "contain-box no-me"
    return (
      <div className={box}>
        
        {[1,1,1,1,1].map(()=><div className="spin"/>)}
        <div className="image" style={{backgroundImage: `url(${content.imgUrl})`}}
        onClick={this.onSwitch}/>
      </div>
    );
  }
}
