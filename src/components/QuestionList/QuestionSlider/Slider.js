import React, { Component } from 'react';

import { StyledSlider } from '../../common/assets/styles/QuestionsPage/StyledSlider.js'

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
    this.updateSlider = this.updateSlider.bind(this);
  }

  updateSlider(event) {
    const newValue = event.target.value;
    this.setState({
      value: newValue
    });
    this.props.onChange(newValue);
  }

  render() {
    const {disableRange} = this.props;

    return (
      <StyledSlider>
        <input
          type='range' min='0' max='100'
          onChange={this.updateSlider}
          disabled={disableRange}
          value={this.state.value}/>
        <div className={disableRange ? 'light-gray' : ''}>
          {this.state.value}
        </div>
      </StyledSlider>
    );
  }
}
