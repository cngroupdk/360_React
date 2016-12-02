import React, {Component} from 'react';

import StyledSlider from '../common/assets/styles/StyledSlider.js'

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
        value: e.target.value
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