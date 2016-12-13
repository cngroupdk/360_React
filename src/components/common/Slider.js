import React, { Component } from 'react';

import { StyledSlider } from './assets/styles/StyledSlider.js'

export default class Slider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 50
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
        const { disableRange } = this.props;

        return (
            <StyledSlider>
                <input type='range' name='answerValue' min='0' max='100'
                       onChange={this.updateSlider}
                       disabled={disableRange}/>
                <div>{disableRange ? '' : this.state.value}</div>
            </StyledSlider>
        );
    }
}