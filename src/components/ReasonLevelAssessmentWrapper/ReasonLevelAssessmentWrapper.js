import React, { Component } from 'react';

import ReasonPage from '../../pages/ReasonPage'
import LevelPage from '../../pages/LevelPage'
import AssessmentPage from '../../pages/AssessmentPage'

const QUESTION_COMPONENT_BASED_ON_STEP = {
  'Level': LevelPage,
  'Reason': ReasonPage,
  'Questions': AssessmentPage,
};

export default class ReasonLevelAssessmentWrapper extends Component {
  render() {
    const step = this.props.step.Step;
    const TheComponent = QUESTION_COMPONENT_BASED_ON_STEP[step];

    const {
      assessment,
      whoIs,
      person,
      personId,
      getNextStep,
    } = this.props;

    return (
    <TheComponent
      personId={personId}
      levelId={assessment.LevelId}
      whoIs={whoIs}
      person={person}
      getNextStep={getNextStep}
    />
    )
  }
}
