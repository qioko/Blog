import React, { Component } from 'react';
import './index.scss';

export default class BeginAnimation extends Component {
  firework = [1,1,1,1,1,1,1,1] //TODO 扩展角度数量
  render() {
    return (
      <div className="sky">
        <div className="firework type_1">
          {this.firework.map(i=><div className="fire"></div>)}
        </div>
        <div className="firework type_2">
          {this.firework.map(i=><div className="fire"></div>)}
        </div>
        <div className="firework type_3">
          {this.firework.map(i=><div className="fire"></div>)}
        </div>
      </div>
    );
  }
}
