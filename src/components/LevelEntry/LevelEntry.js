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
    this.props.sendLevel(e, this.props.location.query.personId);
    this.setState({level: 'Entered'});
  }

  render() {
    const {
      levels,
      nextStep,
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
                      pathname: '/' + nextStep.toLowerCase(),
                      query: {personId: this.props.location.query.personId}
                    }}>
          Proceed to questions </StyledLink>
      </div>
    )
  }
}
