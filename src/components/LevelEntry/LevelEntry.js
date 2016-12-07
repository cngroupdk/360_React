import React, { Component } from 'react';
import { RadioGroup } from 'react-radio-group';

import Level from './Level'

import { RadioWrapper } from '../common/assets/styles/ReasonPage/RadioWrapper';
import { StyledLink } from '../common/assets/styles/StyledLink';

export default class LevelEntry extends Component {

    constructor(props) {
        super(props);
        this._handleProfLevelChange = this._handleProfLevelChange.bind(this);
        this.state = {level: ''};
    }

    _handleProfLevelChange(e) {
        this.props.levelSave(e);

        this.setState({ level: 'Entered' });
    }

    render() {
        const {
            levels
        } = this.props;

        return (
            <div>
                <RadioWrapper>
                    <RadioGroup name="prof-level" onChange={this._handleProfLevelChange}>

                        {levels.map((level, index) => {
                            return (
                                <Level level={level}
                                       key={index}
                                />
                            )
                        })}

                    </RadioGroup>
                </RadioWrapper>

                <StyledLink disabled={this.state.level === ''}
                    to={{
                        pathname: "/questions-entry",
                        query: {name: this.props.location.query.name,
                            id: this.props.location.query.id}
                    }}>
                    Proceed to questions </StyledLink>
            </div>
        )
    }
}