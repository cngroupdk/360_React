import React, { Component, PropTypes } from 'react';
import { RadioGroup } from 'react-radio-group';

import Level from './Level'

import { RadioWrapper } from '../common/assets/styles/ReasonPage/RadioWrapper';
import { StyledLink } from '../common/assets/styles/StyledLink';

export default class LevelEntry extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleProfLevelChange = this.handleProfLevelChange.bind(this);
    this.handleProccedToQuestions = this.handleProccedToQuestions.bind(this);
    const defLevel = this.props.location.query.levelId || '';
    this.state = {level: defLevel};
  }

  static contextTypes = {
    router: PropTypes.object
  };

  handleProfLevelChange(value) {
    this.setState({level: value});
  }

  handleProccedToQuestions(e) {
    const personId = this.props.location.query.personId;
    this.props.sendLevel(this.state.level, personId, this.context.router);
    e.preventDefault();
  }

  render() {
    const {
      levels,
      nextStep,
    } = this.props;

    const pathNameNextStep = {
      pathname: '/' + nextStep.toLowerCase(),
      query: {personId: this.props.location.query.personId}
    };

    return (
      <div>
        <RadioWrapper>
          <RadioGroup name="prof-level" selectedValue={this.state.level} onChange={this.handleProfLevelChange}>

            {levels.map((level) => (
                <Level level={level} key={level.Id} />
              )
            )}

          </RadioGroup>
        </RadioWrapper>

        <StyledLink disabled={!this.state.level} onClick={this.handleProccedToQuestions} to={pathNameNextStep}>
          Proceed to questions </StyledLink>
      </div>
    )
  }
}
