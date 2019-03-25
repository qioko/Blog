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
      ? content.type === "image"?"contain-box super-me super-image":"contain-box super-me"
      : display === "ALL" ? "contain-box" : "contain-box no-me"
    const description = display === content.name && content.type === "word"
      ? "description"
      : "description disappear"
    const showContentImage = display === content.name && content.type === "image"
    const image = showContentImage?"image content-image":"image"
    console.log(image)
    return (
      <div className={box}>
        {[1,1,1,1,1].map(()=><div className="spin"/>)}
        <div className={image} style={{backgroundImage: showContentImage?`url(${content.contentUrl})`:`url(${content.imgUrl})`}}
        onClick={this.onSwitch}/>
        <div className={description} onClick={this.onSwitch}>
          <div className="text">
            <a href={content.link} target="_blank">{content.description}</a></div>
        </div>
      </div>
    );
  }
}
