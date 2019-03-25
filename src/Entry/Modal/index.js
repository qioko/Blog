import React, { Component } from 'react'
import {
  Container,
  Frame,
  Bg,
  Card,
  Thumb,
  Description,
  ButtonWrapper,
  OkButton,
  CancelButton,
  CloseButton,
} from './style'

export default class MessageBox extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Container>
        <Frame>
          <div />
          <div />
          <div />
          <div />
        </Frame>
        <Bg />
        <Card>
          <Thumb />
          <Description>
            <p>进来喝杯茶吧</p>
          </Description>
          <ButtonWrapper>
            <OkButton onClick={this.props.showContent}/>
            <CancelButton onClick={this.props.showEntry}/>
          </ButtonWrapper>
          <CloseButton />
        </Card>
      </Container>
    )
  }
}
