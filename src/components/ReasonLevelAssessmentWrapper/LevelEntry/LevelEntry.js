import React, { Component, PropTypes } from 'react';
import { RadioGroup } from 'react-radio-group';

import Level from './Level'

import { RadioWrapper } from '../../common/assets/styles/ReasonPage/RadioWrapper';
import { StyledLink } from '../../common/assets/styles/StyledLink';

export default class LevelEntry extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleProfLevelChange = this.handleProfLevelChange.bind(this);
    this.handleProceedToQuestions = this.handleProceedToQuestions.bind(this);
    const defLevel = this.props.levelId || '';
    this.state = {level: defLevel};
  }

  static contextTypes = {
    router: PropTypes.object
  };

  handleProfLevelChange(value) {
    this.setState({level: value});
  }

  handleProceedToQuestions(e) {
    this.props.sendLevel(this.state.level, this.props.personId, this.context.router);
    this.props.getNextStep(this.props.personId);
    e.preventDefault();
  }

  render() {
    const {
      levels,
      personId,
    } = this.props;

    return (
      <div>
        <RadioWrapper>
          <RadioGroup name="prof-level" selectedValue={this.state.level} onChange={this.handleProfLevelChange}>

            {levels.map((level) => (
                <Level level={level} key={level.get('Id')} />
              )
            )}

          </RadioGroup>
        </RadioWrapper>

        <StyledLink disabled={!this.state.level} onClick={this.handleProceedToQuestions}
                    to={{ pathname: '/assessment/' + personId}}>
          Proceed to questions </StyledLink>
      </div>
    )
  }
}
