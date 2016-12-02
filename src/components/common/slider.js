import React, {Component} from 'react';
import styled from 'styled-components';

import StyledSlider from './assets/styles/StyledSlider.js'
import ContentContainer from './assets/styles/CenteredContent.js'

export default class Slider extends Component {

  constructor() {
    super();
    this.state = {
      value: 50
    };
    this.updateSlider = this.updateSlider.bind(this);
  }

  updateSlider(e) {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  render() {
    return (
        <StyledSlider>
            <input type='range' name='value' min='0' max='100' onChange={this.updateSlider}/>
            <div>{this.state.value}</div>
        </StyledSlider>
    );
  }
}