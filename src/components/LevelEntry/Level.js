import React, { Component }  from 'react';
import { Radio } from 'react-radio-group';


export default class Level extends Component {

    render() {
        const {
            level
        } = this.props;

        return (
            <label><Radio value={level.Id}/> {level.Caption}</label>
        );
    }
}
