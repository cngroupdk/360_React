import React, { Component } from 'react';
import { RadioGroup } from 'react-radio-group';

import Level from './Level'

import { RadioWrapper } from '../common/assets/styles/ReasonPage/RadioWrapper';
import { StyledLink } from '../common/assets/styles/StyledLink';

export default class LevelEntry extends Component {
  constructor(props) {
    super(props);
    this.handleProfLevelChange = this.handleProfLevelChange.bind(this);
    this.state = {level: ''};
  }

  handleProfLevelChange(e) {
    this.props.sendLevel(e, this.props.location.query.personId);
    this.setState({level: 'Entered'});
  }

  render() {
    const {
      levels,
      nextStep,
    } = this.props;

    const pathNameNextStep = {
      pathname: '/' + nextStep.toLowerCase(),
      query: {personId: this.props.location.query.personId}
    }

    return (
      <div>
        <RadioWrapper>
          <RadioGroup name="prof-level" onChange={this.handleProfLevelChange}>

            {levels.map((level) => (
                <Level level={level} key={level.Id} />
              )
            )}

          </RadioGroup>
        </RadioWrapper>

        <StyledLink disabled={this.state.level === ''} to={pathNameNextStep}>
          Proceed to questions </StyledLink>
      </div>
    )
  }
}
