import React, { Component } from 'react';

import { StyledSlider } from './assets/styles/QuestionsPage/StyledSlider.js'

export default class Slider extends Component {

    constructor(props) {
        super(props);
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
        const { disableRange } = this.props;

        return (
            <StyledSlider>
                <input type='range' name='value' min='0' max='100'
                       onChange={this.updateSlider}
                       disabled={disableRange}/>
                <div>{disableRange ? '' : this.state.value}</div>
            </StyledSlider>
        );
    }
}