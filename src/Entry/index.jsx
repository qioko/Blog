import React, { Component } from 'react';
import Modal from './Modal';

export default class Entry extends Component {
  render() {
    return (
      <div className="main">
        <Modal showContent={this.props.showContent} showEntry={this.props.showEntry}/>
      </div>
    );
  }
}
