import React, { Component } from 'react';
import './index.css';

export default class BackBrick extends Component {

  render() {
    return (
      <div className="list-rect">
      {[1,1,1,1,1].map(()=><div/>)}
    </div>
    );
  }
}
